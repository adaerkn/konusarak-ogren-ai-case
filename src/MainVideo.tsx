import React from 'react';
import { AbsoluteFill, Sequence, staticFile, Audio, Img, useCurrentFrame, useVideoConfig } from 'remotion';

// 🎬 SAHNE İMPORTLARI (Dosya adlarını bozmadan, kod içinde temiz takma adlar verdik)
import { Scene1Hook as S01_Hook } from './Scene1Hook';
import { GlobalBridgeScene as S02_GlobalBridge } from './GlobalBridgeScene';
import { QuestionBridgeScene as S03_QuestionBridge } from "./QuestionBridgeScene";
import { Scene2Problem as S04_Problem } from './Scene2Problem';
import { BackupScene as S05_Backup } from './BackupScene';
import { InterludeTransition as S06_Interlude } from './InterludeTransition';
import { SceneSteps as S07_Steps } from './SceneSteps';
import { Scene3Solution as S08_Solution } from './Scene3Solution';
import { Scene4Conversation as S09_Conversation } from './Scene4Conversation';
import { StatsCardScene as S10_StatsCard } from './StatsCardScene';
import { Scene5Features as S11_Features } from './Scene5Features';
import { Scene7Trust as S12_Trust } from './Scene7Trust';
import { Scene6CTA as S13_FinalCTA } from './Scene6CTA';

// Yardımcı Bileşenler
import { FadeInOut } from './FadeInOut';
import { MovingIconsBackground } from './MovingIconsBackground';

export const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- ZAMANLAMA AYARLARI (30 FPS) ---
  const voiceDelay = 30;
  const voiceDuration = 13 * 30;
  const postVoiceWait = 45;
  const s4Duration = voiceDelay + voiceDuration + postVoiceWait;

  return (
    <AbsoluteFill style={{ backgroundColor: '#FFFFFF', fontFamily: 'Helvetica', overflow: 'hidden' }}>

      {/* 1. ARKA PLAN MÜZİĞİ */}
      <Audio src={staticFile("background.mp3")} volume={0.1} loop />

      {/* 2. SABİT LOGO */}
      <div style={{ position: 'absolute', top: 50, left: 50, zIndex: 100 }}>
        <Img src={staticFile("konusarak_ogren_logo.png")} style={{ width: '180px' }} />
      </div>

      {/* Scene 1: Hook (0-3sn) */}
      <Sequence durationInFrames={105}>
       <FadeInOut>
        <S01_Hook />
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
            <MovingIconsBackground icon="🏆" color="#F1C40F" />
        </div>
       </FadeInOut>
      </Sequence>

      {/* 2. Global Bridge Sahnesi (3-8sn) */}
      <Sequence from={105} durationInFrames={105}>
        <FadeInOut>
          <S02_GlobalBridge />
        </FadeInOut>
      </Sequence>

      {/*  3.Soru Köprüsü */}
      <Sequence from={210} durationInFrames={120}>
        <FadeInOut>
            <S03_QuestionBridge />
        </FadeInOut>
      </Sequence>

      {/* 4. Problem (8-12sn) */}
      <Sequence from={330} durationInFrames={105}>
         <FadeInOut>
          <S04_Problem />
          <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
            <MovingIconsBackground icon="?" color="#E74C3C" />
          </div>
         </FadeInOut>
      </Sequence>

        {/* 5. Backup & Telafi Sahnesi  */}
      <Sequence from={435} durationInFrames={90}>
        <FadeInOut>
          <S05_Backup />
          <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
            <MovingIconsBackground icon="🔄" color="#3A85FF" />
          </div>
        </FadeInOut>
      </Sequence>

      {/* 6. Interlude: Köprü Sahne (1.5sn) - 390-435 */}
      <Sequence from={525} durationInFrames={48}>
        <FadeInOut>
          <S06_Interlude />
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.2, pointerEvents: 'none' }}>
            <MovingIconsBackground icon="⚡" color="#F1C40F" />
          </div>
        </FadeInOut>
      </Sequence>

      {/* Scene 5: 7. Steps  */}
      <Sequence from={570} durationInFrames={180}>
         <FadeInOut>
          <S07_Steps />
          <div style={{ position: 'absolute', inset: 0, zIndex: 5,opacity: 0.8, pointerEvents: 'none' }}>
            <MovingIconsBackground icon="🚀" color="#E67E22" />
          </div>
         </FadeInOut>
      </Sequence>

      {/* Scene 3: 8. Solution (12-22sn) */}
      <Sequence from={750} durationInFrames={120}>
        <FadeInOut>
          <S08_Solution />
        </FadeInOut>
      </Sequence>

     {/* Scene 4: 9. Sarah Pratiği (Ses: forest_talk.mp3) */}
      <Sequence from={870} durationInFrames={s4Duration} >
        <FadeInOut>

           <Sequence from={voiceDelay}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
              <MovingIconsBackground icon="🔊" color="#3A85FF" />
            </div>
          </Sequence>

          <Sequence from={voiceDelay}>
            <Audio src={staticFile("forest_talk.mp3")} volume={0.6} />
          </Sequence>
          <S09_Conversation />
        </FadeInOut>
      </Sequence>

      {/* 10. Sahne İstatistik Kartı */}
      <Sequence from={870 + s4Duration} durationInFrames={122}>
        <FadeInOut>
          <S10_StatsCard />
        </FadeInOut>
      </Sequence>

      {/* Scene 5: 11. Özellikler */}
      <Sequence from={990 + s4Duration} durationInFrames={122}>
        <FadeInOut> {/* Buradaki başlangıcı düzelttim */}
          <S11_Features />
          <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
            <MovingIconsBackground icon="✅" color="#2ECC71" />
          </div>
        </FadeInOut>
      </Sequence>

    {/* 12. Güven (Scene 7 - Orijinal Hali) - Başlangıç: 840 + s4Duration + 390 */}
      <Sequence from={1110 + s4Duration} durationInFrames={180}>
        <FadeInOut>
          <S12_Trust />
          <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
            <MovingIconsBackground icon="⭐" color="#FFD700" />
          </div>
        </FadeInOut>
      </Sequence>

      {/* Scene 6: 13. Final CTA (1530'dan başlar - Sıfırı düzelttim) */}
      <Sequence from={1290 + s4Duration } durationInFrames={240}>
        <FadeInOut>
          <S13_FinalCTA/>
        </FadeInOut>
      </Sequence>

      {/* TEKNİK KÜNYE */}
      <div style={{
        position: 'absolute',
        bottom: 10,
        width: '100%',
        textAlign: 'center',
        fontSize: '18px',
        color: '#64748B',
        zIndex: 101,
        fontWeight: 'bold'
      }}>
        built with: Gemini AI | ElevenLabs | Figma AI | Remotion (React)
      </div>

    </AbsoluteFill>
  );
};