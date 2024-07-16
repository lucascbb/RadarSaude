const contentStyle: React.CSSProperties = {
    maxHeight: "100vh",
    color: '#fff',
    backgroundColor: '#fffaff',
    overflowY: "auto",
};

const mainTitleStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
}

const tableStyle: React.CSSProperties = {
    margin: "0 auto",
    width: '100%',
    padding: '10px 40px',
};

const confirmTextStyle: React.CSSProperties = {
    width: '350px',
    height: "60px",
    whiteSpace: 'pre-wrap'
}

const iconBtnDeleteStyle: React.CSSProperties = {
    fontSize: "24px",
    lineHeight: 0,
    textDecoration: 'underline',
    color: "red",
    cursor: "pointer"
}

const iconBtnEditStyle: React.CSSProperties = {
    fontSize: "24px",
    lineHeight: 0,
    textDecoration: 'underline',
    color: "#0c0668",
    cursor: "pointer"
}

const mainSearchStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px"
}

const inputStyle: React.CSSProperties = {
    width: "300px"
}

const searchRemoveStyle: React.CSSProperties = {
    display: "flex",
    gap: '10px',
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    padding: "0 6px",
    border: "1px solid grey",
    cursor: "pointer"
}

const iconRemoveStyle: React.CSSProperties = {
    fontFamily: "Comfortaa-Bold",
    fontSize: "18px",
    color: "#943030"
}

export { contentStyle, mainTitleStyle, tableStyle, confirmTextStyle, iconBtnDeleteStyle, iconBtnEditStyle, inputStyle, mainSearchStyle, searchRemoveStyle, iconRemoveStyle }