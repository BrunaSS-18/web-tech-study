const Banner = (props) => {

/*
    o children permite que você passe e redenrizze conteúdo dinâmico dentro do componente
*/

    return (
        <>
            {props.children}
        </>
    )
}

export default Banner