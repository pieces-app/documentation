type ImageProps = {
  src: string
  caption?: string
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

// const Image = ({ src, caption, alt, width, height, style }: ImageProps) => {
//   return (
//     <figure style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     }}>
//       <img
//         src={src}
//         alt={alt}
//         width={width}
//         height={height}
//         style={style}
//       />
//       {caption && <figcaption>{caption}</figcaption>}
//     </figure>
//   )
// }

export default Image;
