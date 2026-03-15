import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';

const data = [
  { label: "Mutlu Öğrenci", value: 20000, suffix: "+" },
  { label: "Ana Dili İngilizce Eğitmen", value: 500, suffix: "+" },
  { label: "Memnuniyet Oranı", value: 98, suffix: "%" }
];

export const StatsCardScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{
      backgroundColor: '#3A85FF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontFamily: 'Helvetica',
    }}>
      <h1 style={{ fontSize: '60px', marginBottom: '60px', fontWeight: 'bold' }}>Uygulamanın Gücü Verilerde:</h1>
      <div style={{ display: 'flex', gap: '50px' }}>
        {data.map((item, index) => {
          const animatedValue = interpolate(frame, [0, fps * 2], [0, item.value], {extrapolateRight: 'clamp'});
          return (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '90px', fontWeight: 'bold' }}>
                {Math.round(animatedValue).toLocaleString()}{item.suffix}
              </div>
              <p style={{ fontSize: '30px' }}>{item.label}</p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};