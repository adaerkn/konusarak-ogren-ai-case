import React from 'react';
import { AbsoluteFill, Img, staticFile, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene7Trust: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logos = [
    "axa.png", "turkcell.png", "vodafone.png", "loreal.png", "allianz.png",
    "mercedes.png", "riot.png", "tav.png", "eczacibasi.png", "erikli.png", "man.png"
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: 'transparent', padding: '40px', display: 'flex', flexDirection: 'column' }}>

      {/* Başlık - Logo ile çakışmaması için padding eklendi */}
      <div style={{ marginTop: '140px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '55px', fontWeight: '900', color: '#111', lineHeight: 1.2 }}>
          Bizi Tercih Eden <br/> <span style={{ color: '#3A85FF' }}>Öncü Şirketler</span>
        </h2>
      </div>

      {/* Dev Logo Grid - Ekranın ortasına tam odaklı */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '25px',
        alignContent: 'center', // Logoları dikeyde ortalar
        justifyItems: 'center',
        padding: '25px'
      }}>
        {logos.map((logo, i) => {
          const s = spring({ frame: frame - i * 10, fps, config: { damping: 12 } });
          return (
            <div key={i} style={{
              transform: `scale(${s})`,
              opacity: s,
              backgroundColor: 'white',
              width: '310px',
              height: '170px',
              borderRadius: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              border: '2px solid #F1F5F9',
              boxShadow: '0 12px 40px rgba(0,0,0,0.06)'
            }}>
              <Img src={staticFile(logo)} style={{ maxHeight: '85%', maxWidth: '85%', objectFit: 'contain' }} />
            </div>
          );
        })}
      </div>

      {/* Alt Bilgi Metni */}
      <div style={{ marginBottom: '80px', textAlign: 'center' }}>
        <p style={{ fontSize: '30px', fontWeight: '800', color: '#64748B' }}>
          Binlerce profesyonel aday mülakatlara bizimle hazırlanıyor.
        </p>
      </div>
    </AbsoluteFill>
  );
};