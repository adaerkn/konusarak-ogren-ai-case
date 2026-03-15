import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';

export const GlobalBridgeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 15], [0, 1]);
  const scale = interpolate(frame, [0, 150], [1, 1.1]);

  return (
    <AbsoluteFill style={{
      backgroundColor: '#3A85FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontFamily: 'Helvetica',
      opacity
    }}>
      <div style={{ transform: `scale(${scale})`, textAlign: 'center', padding: '0 40px' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>Küresel Şirketlerin Ortak Dili:</h2>
        <h1 style={{ fontSize: '70px', fontWeight: 'bold' }}>İNGİLİZCE</h1>
        <p style={{ fontSize: '30px', marginTop: '30px', opacity: 0.8 }}>
            Kariyer yolculuğunun en kritik eşiği.
        </p>
      </div>
    </AbsoluteFill>
  );
};