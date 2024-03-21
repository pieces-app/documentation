const Video = ({
  src,
  type,
  maxWidth,
}: {
  type: 'youtube'
  src: {
    youtube: string
  }
  maxWidth?: string
} | {
  type: 'local'
  src: {
    webm: string
    mp4: string
    ogg?: string
  }
  maxWidth?: string
}) => (
  type === 'youtube' ? (
    <iframe
      width="100%"
      style={{
        aspectRatio: '16 / 9',
        maxWidth: maxWidth || '100%',
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
        borderRadius: '8px',
        maxWidth: maxWidth || '100%',
      }}
    >
      <source src={src.webm} type="video/webm" />
      <source src={src.mp4} type="video/mp4" />
      <source src={src.ogg} type="video/ogg" />
    </video>
  ): null
);

export default Video;
