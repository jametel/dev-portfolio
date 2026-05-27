"use client";

import { useEffect, useRef } from "react";

const lerpColor = (a: string, b: string, t: number): string => {
    const parse = (h: string) => [
        parseInt(h.slice(1, 3), 16),
        parseInt(h.slice(3, 5), 16),
        parseInt(h.slice(5, 7), 16),
    ];

    const [ar, ag, ab] = parse(a);
    const [br, bg, bb] = parse(b);

    return `rgb(${Math.round(ar + (br - ar) * t)},${Math.round(
        ag + (bg - ag) * t
    )},${Math.round(ab + (bb - ab) * t)})`;
};

type LaserRig = {
    originX: number;
    originY: number;
    colorFrom: string;
    colorTo: string;
    beamCount: number;
    spreadAngle: number;
    baseAngle: number;
};

const RIGS: LaserRig[] = [
    {
        originX: 0.25,
        originY: 0.75,
        colorFrom: "#ffaa00",
        colorTo: "#ff0055",
        beamCount: 16,
        spreadAngle: Math.PI * 0.75,
        baseAngle: -Math.PI / 2,
    },
    {
        originX: 0.75,
        originY: 0.75,
        colorFrom: "#cc00ff",
        colorTo: "#00ffcc",
        beamCount: 16,
        spreadAngle: Math.PI * 0.75,
        baseAngle: -Math.PI / 2,
    },
];

type ComputedBeam = {
    angle: number;
    color: string;
};

type ComputedRig = {
    beams: ComputedBeam[];
    originX: number;
    originY: number;
    baseAngle: number;
};

const precompute = (
    rigs: LaserRig[],
    canvasW: number,
    canvasH: number
): ComputedRig[] => {
    return rigs.map((rig) => ({
        originX: rig.originX * canvasW,
        originY: rig.originY * canvasH,
        baseAngle: rig.baseAngle,
        beams: Array.from({ length: rig.beamCount }, (_, i) => {
            const t = i / (rig.beamCount - 1);

            return {
                angle:
                    -rig.spreadAngle / 2 +
                    t * rig.spreadAngle,
                color: lerpColor(
                    rig.colorFrom,
                    rig.colorTo,
                    t
                ),
            };
        }),
    }));
};

type LaserMode = "scroll" | "show";

const SHOW_DURATION = 10000;

const LaserBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const glowCanvasRef = useRef<HTMLCanvasElement>(null);

    const scrollRef = useRef(0);
    const targetScrollRef = useRef(0);

    const animFrameRef = useRef<number>(0);

    const rigsRef = useRef<ComputedRig[]>([]);

    const modeRef = useRef<LaserMode>("scroll");
    const showStartRef = useRef<number | null>(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const glowCanvas = glowCanvasRef.current;

        if (!canvas || !glowCanvas) return;

        const ctx = canvas.getContext("2d");
        const glowCtx = glowCanvas.getContext("2d");

        if (!ctx || !glowCtx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            glowCanvas.width = window.innerWidth * 0.5;
            glowCanvas.height = window.innerHeight * 0.5;

            rigsRef.current = precompute(
                RIGS,
                canvas.width,
                canvas.height
            );
        };

        resize();

        window.addEventListener("resize", resize);

        const onScroll = () => {
            targetScrollRef.current = window.scrollY;
        };

        window.addEventListener("scroll", onScroll, {
            passive: true,
        });

        // PRESS "L" TO START SHOW
        // const onKeyDown = (e: KeyboardEvent) => {
        //     if (e.key.toLowerCase() === "l") {
        //          modeRef.current = "show";
        //          showStartRef.current = performance.now();
        //     }
        // };

        const onLaserShow = () => {
        modeRef.current = "show";
        showStartRef.current = performance.now();
        document.getElementById('Hero')?.scrollIntoView({ behavior: 'smooth' });

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        
        audioRef.current = new Audio('/audio/bangarang.mp3');
        audioRef.current.volume = 0.8;
        audioRef.current.play();
};
        window.addEventListener("lasershow", onLaserShow);

// add to cleanup:
        

        // const k: Konami = new Konami()
        // k.enable()

        // // Add the event listener and callback
        // window.addEventListener(k.eventName, () => {

        //     modeRef.current = "show";
        //     showStartRef.current = performance.now();
        // })

        // window.addEventListener("keydown", onKeyDown);

        const length = 3000;

        const getShowState = (
            elapsed: number
        ) => {
            // 0-3s = left/right sweep
            // 3-6s = vertical bounce
            // 6-9s = cross sweep
            // 9-12s = scatter chaos

            if (elapsed < 1100) {
                return "cross";
            }

            if (elapsed < 5500) {
                return "vertical";
            }

            if (elapsed < 9000) {
                return "horizontal";
            }

            return "scatter";

            // if (elapsed < 3000) {
            //     return "horizontal";
            // }

            // if (elapsed < 6000) {
            //     return "vertical";
            // }

            // if (elapsed < 9000) {
            //     return "cross";
            // }

            // return "scatter";
        };

        const draw = () => {
            const time = performance.now();

            scrollRef.current +=
                (
                    targetScrollRef.current -
                    scrollRef.current
                ) * 0.12;

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const s = 0.5;

            glowCtx.clearRect(
                0,
                0,
                glowCanvas.width,
                glowCanvas.height
            );

            glowCtx.filter = "blur(6px)";

            rigsRef.current.forEach((rig, rigIndex) => {
                rig.beams.forEach((beam, beamIndex) => {
                    let angle =
                        rig.baseAngle + beam.angle;

                    let offsetY = 0;

                    // NORMAL SCROLL MODE
                    if (
                        modeRef.current === "scroll"
                    ) {
                        const verticalFactor =
                            Math.abs(
                                Math.sin(angle)
                            );

                        offsetY =
                            scrollRef.current *
                            3 *
                            verticalFactor;
                    }

                    // LASER SHOW MODE
                    if (
                        modeRef.current === "show" &&
                        showStartRef.current
                    ) {
                        const elapsed =
                            time -
                            showStartRef.current;

                        const state =
                            getShowState(elapsed);

                        const t = elapsed * 0.001;

                        // END SHOW
                        if (
                            elapsed >
                            SHOW_DURATION
                        ) {
                            modeRef.current =
                                "scroll";
                            showStartRef.current =
                                null;
                        }

                        // LEFT / RIGHT SWEEP
                        if (
                            state ===
                            "horizontal"
                        ) {
                            angle +=
                                Math.sin(t * 2) *
                                0.5;
                        }

                        // UP / DOWN
                        if (
                            state ===
                            "vertical"
                        ) {
                            offsetY =
                                Math.sin(t * 3) *
                                800;
                        }

                        // CROSSING SWEEP
                        if (
                            state === "cross"
                        ) {
                            angle +=
                                Math.sin(
                                    t * 3 +
                                        rigIndex *
                                            Math.PI
                                ) * 1.2;
                        }

                        // CHAOTIC SCATTER
                        if (
                            state ===
                            "scatter"
                        ) {
                            angle +=
                                Math.sin(
                                    t * 5 +
                                        beamIndex *
                                            0.7
                                ) * 1.5;

                            offsetY =
                                Math.cos(
                                    t * 4 +
                                        beamIndex *
                                            0.2
                                ) * 300;
                        }
                    }

                    const endX =
                        rig.originX +
                        Math.cos(angle) *
                            length;

                    const endY =
                        rig.originY +
                        Math.sin(angle) *
                            length +
                        offsetY;

                    // MAIN BEAM
                    ctx.save();

                    ctx.globalAlpha = 0.85;
                    ctx.strokeStyle = beam.color;
                    ctx.lineWidth = 1;

                    ctx.beginPath();
                    ctx.moveTo(
                        rig.originX,
                        rig.originY
                    );

                    ctx.lineTo(endX, endY);

                    ctx.stroke();

                    ctx.restore();

                    // GLOW BEAM
                    glowCtx.save();

                    glowCtx.globalAlpha = 0.5;
                    glowCtx.strokeStyle =
                        beam.color;

                    glowCtx.lineWidth = 4;

                    glowCtx.beginPath();

                    glowCtx.moveTo(
                        rig.originX * s,
                        rig.originY * s
                    );

                    glowCtx.lineTo(
                        endX * s,
                        endY * s
                    );

                    glowCtx.stroke();

                    glowCtx.restore();
                });
            });

            animFrameRef.current =
                requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener(
                "resize",
                resize
            );

            window.removeEventListener(
                "scroll",
                onScroll
            );

            cancelAnimationFrame(
                animFrameRef.current
            );

            window.removeEventListener("lasershow", onLaserShow);
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none">
            <canvas
                ref={glowCanvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.8 }}
            />

            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
};

export default LaserBackground;