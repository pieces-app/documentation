const ReleasePill = props => {
  return <div style={{maxWidth: "fit-content", minWidth: "fit-content"}}>
    <p style={{
      padding: "2px 20px",
      borderRadius: "12px",
      border: "1px solid #f3f5f6",
      backgroundColor: "#f3f4f5",
      color: "black",
      fontWeight: "500",
      marginTop: "8px",
      marginBottom: "15px"
    }}>{props.children}</p>
  </div>
}

export default ReleasePill
