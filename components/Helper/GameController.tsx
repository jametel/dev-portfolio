"use client";

type GameControllerProps = {
    color?: string;
    onClick?: () => void;
}

const pressKey = (key: string) => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    window.dispatchEvent(new KeyboardEvent('keyup', { key, bubbles: true }));
};

const GameController = ({ color = '#f0f0f0', onClick }: GameControllerProps) => {
    return (
        <svg
            
        
            width='100%'
            height='100%'
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default', filter: `drop-shadow(0 0 8px ${color})` }}
        >
            {/* Body */}
            {/* <path
                d="M40 50 Q40 20 70 20 L130 20 Q160 20 160 50 L165 80 Q168 100 150 100 L130 95 Q115 85 100 85 Q85 85 70 95 L50 100 Q32 100 35 80 Z"
                fill={color}
                opacity={0.15}
                stroke={color}
                strokeWidth={1.5}
            /> */}

            {/* D-pad vertical */}
            <rect x="47" y="42" width="10" height="12" rx="2" fill={color} 
                style={{ cursor: 'pointer' }}
                onClick={() => pressKey('ArrowUp')}
            />
            <rect x="47" y="60" width="10" height="12" rx="2" fill={color} 
                style={{ cursor: 'pointer' }}
                onClick={() => pressKey('ArrowDown')}
            />
            <rect x="37" y="52" width="12" height="10" rx="2" fill={color} 
                style={{ cursor: 'pointer' }}
                onClick={() => pressKey('ArrowLeft')}
            />
            <rect x="55" y="52" width="12" height="10" rx="2" fill={color} 
                style={{ cursor: 'pointer' }}
                onClick={() => pressKey('ArrowRight')}
            />
            {/* D-pad center (non-clickable) */}
             <rect x="47" y="52" width="10" height="10" rx="1" fill={color}  />

            {/* A button */}
            <circle cx="148" cy="52" r="8" fill={color} 
                style={{ cursor: 'pointer' }}
                onClick={() => pressKey('a')}
            />
            <text
                x="148" y="55"
                textAnchor="middle"
                fontSize={9}
                fontWeight="bold"
                fill="#0a0a0a"
                style={{ pointerEvents: 'none' }}
            >
                A
            </text>

            {/* B button */}
            <circle cx="132" cy="64" r="8" fill={color} 
                style={{ cursor: 'pointer' }}
                onClick={() => pressKey('b')}
            />
            <text
                x="132" y="67"
                textAnchor="middle"
                fontSize={9}
                fontWeight="bold"
                fill= "#0a0a0a"
                style={{ pointerEvents: 'none' }}
            >
                B
            </text>

            {/* Grip details */}
            {/* <path d="M40 75 Q38 90 50 98" stroke={color} strokeWidth={1} opacity={0.3} fill="none" />
            <path d="M160 75 Q162 90 150 98" stroke={color} strokeWidth={1} opacity={0.3} fill="none" /> */}
        </svg>
    );
};

export default GameController;