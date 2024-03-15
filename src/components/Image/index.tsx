type ImageProps = {
  src: string
  alt?: string
  width?: number
  height?: number
  style?: React.CSSProperties
}

const Image = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      style={props.style}
    />
  )
}

export default Image;
