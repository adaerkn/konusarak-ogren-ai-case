import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const SceneBridge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sahne süresi kısa olmalı (örn: 5 saniye)
  const bridgeOpacity = interpolate(frame, [0, fps / 2], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Dünya ikonunun büyümesi
  const globeScale = interpolate(frame, [0, 5 * fps], [1, 1.15]);

  return (
    <div style={{ flex: 1, backgroundColor: '#3A85FF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: bridgeOpacity }}>

      {/* 1. Küresel Vizyon İkonu */}
      <div style={{ fontSize: '150px', transform: `scale(${globeScale})` }}>🌐</div>

      {/* 2. Metin Katmanı */}
      <div style={{
        marginTop: '50px',
        fontSize: '50px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'SF Pro Display, sans-serif'

      }}>
        GLOBAL FIRSATLAR<br/> SENİ BEKLİYOR!
      </div>

    </div>
  );
};