type GridProps = {
  cols: 1 | 2 | 3 | 4
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
