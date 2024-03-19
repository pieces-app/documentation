const Video = ({
  src,
  type,
}: {
  type: 'youtube'
  src: {
    youtube: string
  }
} | {
  type: 'local'
  src: {
    mp4?: string
    webm?: string
    ogg?: string
  }
}) => (
  type === 'youtube' ? (
    <iframe
      width="100%"
      style={{
        aspectRatio: '16 / 9',
      }}
      src={src.youtube}
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
        aspectRatio: '16 / 9',
        borderRadius: '8px',
      }}
    >
      <source src={src.webm} type="video/webm" />
      <source src={src.mp4} type="video/mp4" />
      <source src={src.ogg} type="video/ogg" />
    </video>
  ): null
);

export default Video;
