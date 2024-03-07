type ImageProps = {
  src: string
  alt?: string
  width?: number
  height?: number
}

const Image = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}

export default Image;
