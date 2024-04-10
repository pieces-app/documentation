type Image2x1Props = {
  children: React.ReactNode;
}

const Image2x1 = (props: Image2x1Props) => {
  return (
    <div className="image-2x1">
      {props.children}
    </div>
  );
}

export default Image2x1;
