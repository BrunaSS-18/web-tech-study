const Header = (props) => {

    const headerStyle = {
        background: '#0f1458',
        padding: '20px',
        textAlign: 'center',
        borderBottom:'2px solid #696969',
        fontFamily: 'times new roman'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: '#e9e9ee'
    }

    return(
        <header style = {headerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
        </header>
    )
}

export default Header