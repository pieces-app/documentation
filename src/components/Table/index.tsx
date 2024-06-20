const Table = ({
  children,
}:{
  children: React.ReactNode,
}) => {
  return (
    <div className={'table-container'}>
      {children}
    </div>
  )
}

export default Table
