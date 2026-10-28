import './ChatMascot.css';

type MascotPose = 'wave' | 'thinking' | 'happy' | 'concerned' | 'neutral' | 'listening' | 'present';

const poseFrames: Record<MascotPose, number> = {
  happy: 4,
  concerned: 2,
  neutral: 0,
  listening: 5,
  wave: 7,
  thinking: 2,
  present: 5,
};

export function ChatMascot({ pose, size = 54, className = '' }: { pose: MascotPose; size?: number; className?: string }) {
  const frame = poseFrames[pose];
  const column = frame % 4;
  const row = Math.floor(frame / 4);
  const backgroundPosition = `${column * 100 / 3}% ${row * 100 / 2}%`;

  return (
    <span
      aria-hidden="true"
      className={`chat-mascot chat-mascot--react ${className}`}
      style={{ width: size, height: size, backgroundPosition }}
    />
  );
}
