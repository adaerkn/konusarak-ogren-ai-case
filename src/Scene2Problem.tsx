import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();

  // İnternet kesilme anındaki ekran Glitch efekti
  const glitch = interpolate(frame, [150, 155, 160, 165], [0, 5, -5, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px' }}>

      {/* Online Ders Arayüzü Simülasyonu */}
      <div style={{ width: '90%', height: '400px', border: '4px solid #E2E8F0', borderRadius: '40px', backgroundColor: '#F8FAFC', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transform: `translateX(${glitch}px)`, overflow: 'hidden' }}>
        {/* Üst Bilgi Barı */}
        <div style={{ position: 'absolute', top: 0, width: '100%', backgroundColor: '#3A85FF', padding: '10px', color: 'white', fontSize: '30px', fontWeight: 'bold' }}>
          LIVE: Staj Mülakatı İngilizce Dersi #4
        </div>
        {/* Kesilen Görüntü Simgesi */}
        <div style={{ fontSize: '120px', opacity: frame % 10 < 5 ? 0.3 : 1 }}>📶❌</div>
        {/* Hata Mesajı */}
        <div style={{ marginTop: '20px', backgroundColor: '#FF3B30', color: 'white', padding: '12px 30px', borderRadius: '15px', fontSize: '28px', fontWeight: '900', boxShadow: '0 10px 20px rgba(255,59,48,0.3)' }}>BAĞLANTI KESİLDİ</div>
      </div>

      {/* Soru Metni - BÜYÜK VE OKUNAKLI */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '75px', fontWeight: '900', color: '#111', lineHeight: 1.1 }}>
          Tam mülakata hazırlanırken <br/>
          <span style={{ color: '#3A85FF' }}>İnternetin mi koptu?</span>
        </h2>
        <p style={{ fontSize: '36px', color: '#64748B', marginTop: '30px', fontWeight: '600', padding: '0 40px' }}>
            Provayı yarıda kesmeye stres yapmaya gerek yok.
        </p>
      </div>
    </AbsoluteFill>
  );
};