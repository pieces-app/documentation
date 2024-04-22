type VideoProps = {
  src: string;
  type: 'gif' | 'youtube' | 'local';
  maxWidth?: string;
  alt?: string;
}

const Video = (props: VideoProps) => {
  const { src, type, maxWidth, alt } = props;

  return (
    type === 'gif' ? (
      <img
        src={src}
        alt={alt}
        style={{
          borderRadius: '8px',
          maxWidth: maxWidth || '100%',
        }}
      />
    ) :
    type === 'youtube' ? (
      <iframe
        width="100%"
        style={{
          aspectRatio: '16 / 9',
          maxWidth: maxWidth || '100%',
        }}
        src={src}
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
        <source src={`${src}.webm`} title={alt} type="video/webm"/>
        <source src={`${src}.mp4`} title={alt} type="video/mp4"/>
        <source src={`${src}.ogg`} title={alt} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
    ) : null
  )
}

export default Video;
