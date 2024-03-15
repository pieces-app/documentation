type GridFlexRowProps = {
  type: 'start' | 'evenly'
  children: React.ReactNode;
}

const GridFlexRow = (props: GridFlexRowProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: props.type === 'start' ? 'start' : 'space-evenly',
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {props.children}
    </div>
  )
}

export default GridFlexRow;
