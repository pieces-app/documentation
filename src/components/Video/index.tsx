export const Video = ({
  src
}: {
  src: string
}) => {
  return (
    <iframe width="100%" height="400px" src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}></iframe>

  )
}
