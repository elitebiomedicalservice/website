import { useEffect, useState } from 'react';
import './ChatMascot.css';

type MascotPose = 'walk' | 'wave' | 'thinking' | 'present';

const poseFrames: Record<Exclude<MascotPose, 'walk'>, number> = {
  wave: 7,
  thinking: 2,
  present: 5,
};

export function ChatMascot({ pose, size = 54 }: { pose: MascotPose; size?: number }) {
  const [walkFrame, setWalkFrame] = useState(8);

  useEffect(() => {
    if (pose !== 'walk' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setWalkFrame((frame) => frame === 11 ? 8 : frame + 1), 280);
    return () => window.clearInterval(timer);
  }, [pose]);

  const frame = pose === 'walk' ? walkFrame : poseFrames[pose];
  const column = frame % 4;
  const row = Math.floor(frame / 4);
  const backgroundPosition = `${column * 100 / 3}% ${row * 100 / 2}%`;

  return (
    <span
      aria-hidden="true"
      className={`chat-mascot ${pose === 'walk' ? 'chat-mascot--walk' : 'chat-mascot--react'}`}
      style={{ width: size, height: size, backgroundPosition }}
    />
  );
}
