import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';

export const InterludeTransition: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 20], [0.8, 1.2], { extrapolateRight: 'clamp' });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#3A85FF',
      justifyContent: 'center',
      alignItems: 'center',
      opacity
    }}>
      <h2 style={{
        color: 'white',
        fontSize: '80px',
        fontWeight: '900',
        transform: `scale(${scale})`,
        textAlign: 'center' ,
        margin: 0 ,
        lineHeight: 1.2
      }}>
        HAZIRSANIZ<br/>
      <span style={{ position: 'relative' }}>
        BAŞLIYORUZ!
        <span style={{ position: 'absolute', marginLeft: '20px' }}>🚀</span>
      </span>
    </h2>
    </AbsoluteFill>
  );
};