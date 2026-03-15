import { Composition } from 'remotion';
import { MainVideo } from './MainVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KonusarakOgrenAd"
        component={MainVideo}
        durationInFrames={1960} // Toplam süre 62 saniye (30fps) - Bekleme süresi eklendi
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
            config: {
                theme: { primaryColor: '#3A85FF', fontFamily: 'Helvetica' },
                scenes: [{}, {}, { stats: { fluencyScore: '%92' } }]
            }
        }}
      />
    </>
  );
};