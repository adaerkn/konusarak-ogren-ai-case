import { interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill } from 'remotion';

const logos = [
  "axa.png", "turkcell.png", "vodafone.png", "loreal.png", "allianz.png",
  "mercedes.png", "riot.png", "tav.png", "eczacibasi.png", "erikli.png", "man.png"
];

const logoWidth = 180;

export const LogoCarousel: React.FC = () => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();

  const totalStripWidth = logos.length * (logoWidth + 40); // Genişlik + Margin
  const duration = 400; // Hız ayarı

  const translateX = interpolate(frame % duration, [0, duration], [width, -totalStripWidth]);

  return (
    <AbsoluteFill style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '45px', marginBottom: '60px', color: '#333', fontWeight: 'bold' }}>
        Güven Veren Kurumsal Ortaklarımız
      </h2>
      <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'flex', transform: `translateX(${translateX}px)` }}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/${logo}`}
              style={{ width: `${logoWidth}px`, height: '100px', margin: '0 40px', objectFit: 'contain' }}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};