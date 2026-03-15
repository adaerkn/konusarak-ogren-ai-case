import { interpolate, useCurrentFrame, AbsoluteFill, Img, staticFile } from 'remotion';
import React from "react";

export const BackupScene: React.FC = () => {
  const frame = useCurrentFrame();

  const cardScale = interpolate(frame, [0, 20], [0.8, 1], { extrapolateRight: 'clamp' });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }}>

      {/* --- Orta Kart Yapısı --- */}
      <div style={{
        width: '85%',
        backgroundColor: 'white',
        borderRadius: '70px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
        overflow: 'hidden',
        transform: `scale(${cardScale})`,
        opacity
      }}>
        {/* Mavi Header */}
        <div style={{
          backgroundColor: '#3A85FF',
          padding: '30px',
          textAlign: 'center',
          color: 'white',
          fontWeight: '900',
          fontSize: '32px',
          letterSpacing: '1px'
        }}>
          GÜVENLİ BAĞLANTI SİSTEMİ
        </div>

        {/* --- İkonlar ve Butonlar (Arası Açıldı) --- */}
        <div style={{
          padding: '80px 20px',
          display: 'flex',
          justifyContent: 'center', // Merkeze topluyoruz
          alignItems: 'center',
          gap: '80px'              // KRİTİK: Butonların arasını bu değer açar
        }}>
          {/* Telefon Grubu */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Img src={staticFile("phone_icon.png")} style={{ height: '130px', marginBottom: '25px' }} />
             <div style={{
               backgroundColor: '#3A85FF',
               color: 'white',
               padding: '15px 40px', // İç dolguyu artırdık
               borderRadius: '40px',
               fontWeight: '900',
               fontSize: '22px',
               whiteSpace: 'nowrap', // Yazının alt satıra kaymaması için
               boxShadow: '0 8px 20px rgba(58,133,255,0.3)'
             }}>DOĞRUDAN ARAMA</div>
          </div>

          {/* Telafi Grubu */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Img src={staticFile("calendar_icon.png")} style={{ height: '130px', marginBottom: '25px' }} />
             <div style={{
               backgroundColor: '#E74C3C',
               color: 'white',
               padding: '15px 40px',
               borderRadius: '40px',
               fontWeight: '900',
               fontSize: '22px',
               whiteSpace: 'nowrap',
               boxShadow: '0 8px 20px rgba(231,76,60,0.3)'
             }}>HAKKINIZ YANMAZ</div>
          </div>
        </div>
      </div>

      {/* --- Alt Metin --- */}
      <div style={{
        marginTop: '70px',
        textAlign: 'center',
        width: '100%',
        padding: '0 20px'
      }}>
        <h2 style={{ fontSize: '80px', fontWeight: '900', color: '#111', lineHeight: 1.1, margin: 0 }}>
          Sorun Değil!
        </h2>
        <p style={{
          color: '#3A85FF',
          fontSize: '38px',
          fontWeight: '700',
          marginTop: '25px',
          lineHeight: 1.3
        }}>
          Eğitmeniniz sizi telefonla arar, <br/> dersiniz telafi edilir.
        </p>
      </div>

    </AbsoluteFill>
  );
};