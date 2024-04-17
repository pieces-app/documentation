type GridProps = {
  cols: number;
  children: React.ReactNode;
}

const Grid = (props: GridProps) => {
  return (
    <div className={`grid-${props.cols}xN`}>
      {props.children}
    </div>
  )
}

export default Grid;
