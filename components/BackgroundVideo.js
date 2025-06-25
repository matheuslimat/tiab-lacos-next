import styles from './BackgroundVideo.module.css';

export default function BackgroundVideo() {
  return (
    <div className={styles.videoContainer}>
      <video
        src="/videos/tiab_video_background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      />
    </div>
  );
}