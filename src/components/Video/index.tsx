const Video = ({
  src
}: {
  src: string
}) => (
  <iframe
    width="100%"
    height="500px"
    src={src}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen={true}>
  </iframe>
);

export default Video;
