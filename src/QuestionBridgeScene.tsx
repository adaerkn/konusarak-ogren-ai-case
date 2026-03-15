import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const QuestionBridgeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const moveUp = interpolate(frame, [0, 30], [20, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#3A85FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 50px',
      opacity
    }}>
      <div style={{ transform: `translateY(${moveUp}px)` }}>
        <h2 style={{ color: 'white', fontSize: '60px', fontWeight: '900', lineHeight: 1.2 }}>
          İngilizceyi "AKTİF" geliştirmek için <br/>
          <span style={{ color: '#F1C40F', fontSize: '80px' }}>Canlı Pratik Şart!</span>
        </h2>
        {/* İşte problem sahnesine bağlayan o kritik köprü metni */}
        <p style={{ color: 'white', fontSize: '40px', fontWeight: 'bold', marginTop: '40px', opacity: 0.9 }}>
          Ama online eğitimlerin can sıkıcı bir sorunu var... 🤔
        </p>
      </div>
    </AbsoluteFill>
  );
};