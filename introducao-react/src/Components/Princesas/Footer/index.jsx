const Footer = (props) => {

    const footerStyle = {
        background: '#0f1458',
        padding: '20px',
        textAlign: 'center',
        borderBottom:'2px solid #696969',
        fontFamily: 'times new roman'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '20px',
        color: '#e9e9ee'
    }

    return(
        <footer style={footerStyle}>
            <p style={titleStyle}>{props.title}</p>
        </footer>
    )

}

export default Footer