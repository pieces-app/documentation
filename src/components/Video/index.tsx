const Video = ({
  src,
  type,
  maxWidth,
  alt,
}: {
  type: 'youtube'
  src: {
    youtube: string
  }
  maxWidth?: string
  alt?: string
} | {
  type: 'local'
  src: {
    webm: string
    mp4: string
    ogg?: string
  }
  maxWidth?: string
  alt?: string
}) => (
  type === 'youtube' ? (
    <iframe
      width="100%"
      style={{
        aspectRatio: '16 / 9',
        maxWidth: maxWidth || '100%',
      }}
      src={src.youtube}
      title={alt}
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
      <source src={src.webm} title={alt} type="video/webm" />
      <source src={src.mp4} title={alt} type="video/mp4" />
      <source src={src.ogg} title={alt} type="video/ogg" />
    </video>
  ): null
);

export default Video;
