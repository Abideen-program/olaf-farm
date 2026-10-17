const EAR = "M0,-28 C11,-17 11,11 0,28 C-11,11 -11,-17 0,-28Z";
const INNER = "M0,-17 C4.5,-11 4.5,7 0,17 C-4.5,7 -4.5,-11 0,-17Z";

function Ear({ x, r, cls, main, inner }: { x: number; r: number; cls?: string; main: string; inner: string }) {
  return (
    <g className={cls}>
      <g transform={`translate(${x} 33) rotate(${r})`}>
        <path d={EAR} fill={main} />
        <path d={INNER} fill={inner} transform="translate(0 -2)" />
      </g>
    </g>
  );
}

type Props = { main?: string; inner?: string; dot?: string; animate?: boolean; className?: string };

export default function Mark({ main = "#1B4D31", inner = "#6AB547", dot = "#6AB547", animate = false, className }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Olaf Farm rabbit mark">
      <Ear x={47} r={-9} cls={animate ? "ear-l" : undefined} main={main} inner={inner} />
      <Ear x={73} r={9} cls={animate ? "ear-r" : undefined} main={main} inner={inner} />
      <circle cx="60" cy="82" r="28.5" fill="none" stroke={main} strokeWidth="15" />
      <circle cx="60" cy="82" r="7" fill={dot} />
    </svg>
  );
}
