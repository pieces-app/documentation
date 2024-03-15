const Video = ({
  paths,
  type,
}: {
  type: 'youtube'
  paths: {
    youtube: string
  }
} | {
  type: 'local'
  paths: {
    mp4?: string
    webm?: string
    ogg?: string
  }
}) => (
  type === 'youtube' ? (
    <iframe
      width="100%"
      height="500px"
      src={paths.youtube}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}>
    </iframe>
  ) : type === 'local' ? (
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      width={'100%'}
      style={{
        borderRadius: '8px',
      }}
    >
      <source src={paths.mp4} type="video/mp4" />
      <source src={paths.webm} type="video/webm" />
      <source src={paths.ogg} type="video/ogg" />
    </video>
  ): null
);

export default Video;
