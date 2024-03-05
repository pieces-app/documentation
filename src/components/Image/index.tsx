type ImageProps = {
  src: string
  alt?: string
  width?: number
  height?: number
}

export const Image = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}
