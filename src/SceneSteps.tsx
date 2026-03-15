import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';

export const SceneSteps: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Kademeli giriş animasyonları
  const step1 = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: 'clamp'});
  const step2 = interpolate(frame, [fps * 1.5, fps * 1.5 + 15], [0, 1], {extrapolateRight: 'clamp'});
  const step3 = interpolate(frame, [fps * 3, fps * 3 + 15], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{ backgroundColor: '#F8F9FA', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Helvetica' }}>
      <h2 style={{ color: '#3A85FF', fontSize: '50px', marginBottom: '60px' }}>Konuşarak Öğren'de Sadece 3 Adımda:</h2>
      <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#333' }}>
        <div style={{ opacity: step1 }}>1. Eğitmenini Seç 👤</div>
        <div style={{ opacity: step2, marginTop: '30px' }}>2. Programını Yap 📅</div>
        <div style={{ opacity: step3, marginTop: '30px' }}>3. Konuşmaya Başla! 🚀</div>
      </div>
    </AbsoluteFill>
  );
};