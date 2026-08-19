const Header = (props) => {

    const headerStyle = {
        background: '#000000',
        padding: '20px',
        textAlign: 'center',
        borderBottom:'2px solid #696969'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: '#ffffff'
    }

    return(
        <header style = {headerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
        </header>
    )
}

export default Header