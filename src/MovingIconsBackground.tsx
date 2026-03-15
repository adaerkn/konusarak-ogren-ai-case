import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const MovingIconsBackground: React.FC<{ icon: string, color: string }> = ({ icon, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const icons = [
    { top: '10%', left: '15%', delay: 0 },
    { top: '25%', left: '80%', delay: 15 },
    { top: '60%', left: '10%', delay: 30 },
    { top: '75%', left: '70%', delay: 45 },
    { top: '40%', left: '40%', delay: 10 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden' }}>
      {icons.map((pos, i) => {
        const translateY = interpolate(frame + pos.delay, [0, 8 * fps], [100, -200], { extrapolateRight: 'clamp' });
        const opacity = interpolate(frame + pos.delay, [0, 20, 150, 180], [0, 0.15, 0.15, 0]);
        return (
          <div key={i} style={{ position: 'absolute', top: pos.top, left: pos.left, fontSize: '80px', color: color, opacity: opacity, transform: `translateY(${translateY}px)` }}>
            {icon}
          </div>
        );
      })}
    </div>
  );
};