const Video = ({
  src,
  type,
}: {
  src: string
  type: 'youtube' | 'mp4'
}) => (
  type === 'youtube' ? (
    <iframe
      width="100%"
      height="500px"
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={true}>
    </iframe>
  ) : type === 'mp4' ? (
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      width={'100%'}
      style={{
        borderRadius: '6px',
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  ): null
);

export default Video;
