import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, staticFile, Img } from 'remotion';

export const Scene6CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#3A85FF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '60px',
      color: 'white'
    }}>

      <div style={{ transform: `scale(${s})`, marginBottom: '40px' }}>
        <h1 style={{ fontSize: '80px', fontWeight: '900', marginBottom: '30px' }}>Mobil Uygulamamızı İndirin!</h1>
        <p style={{ fontSize: '30px', fontWeight: '600', lineHeight: 1.5, padding: '0 50px', opacity: 0.95 }}>
          Konuşarak Öğren mobil uygulamasını hemen ücretsiz indirin. <br/>
          Video egzersizleri, yapay zeka destekli kelime öğrenme uygulamaları ve deneme dersleri sizi bekliyor.
        </p>
      </div>

      {/* Hemen Ücretsiz Dene Butonu */}
      <div style={{ margin: '40px 0', transform: `scale(${s})` }}>
        <div style={{
          backgroundColor: 'white',
          color: '#3A85FF',
          padding: '35px 90px',
          borderRadius: '100px',
          fontSize: '48px',
          fontWeight: '900',
          boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
        }}>
          Hemen Ücretsiz Dene
        </div>
      </div>

      {/* Store Logoları (EŞİT BOYUTTA ve ALTTA) */}
      <div style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px',
  marginTop: '50px',
  transform: `scale(${s})`
}}>
  <Img
    src={staticFile("app_store.png")}
    style={{
      height: '195px',
      width: 'auto',
      objectFit: 'contain'
    }}
  />
  <Img
    src={staticFile("google_play.png")}
    style={{
      height: '110px',
      width: 'auto',
      objectFit: 'contain',
      marginTop: '3px'
    }}
  />
</div>

      <div style={{ position: 'absolute', bottom: 80, width: '100%', fontSize: '32px', fontWeight: 'bold', opacity: 0.8 }}>
        konusarakogren.com
      </div>
    </AbsoluteFill>
  );
};