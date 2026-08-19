import imgCard from "../../assets/img-meninaMT.jpg";
import "./ImgCardMT.css"

const ImgCardMT = (props) => {

    return (
        <section>
            <div className="image-card">
                <img src={imgCard} alt={props.caption || 'imagem'} className="image-card-img"/>
                <p className="image-card-caption">{props.caption}</p>
                <p>A defesa no Muay Thai é ativa e direta. Ela usa bloqueios com a canela e os braços,
                    desvios, o uso do chute frontal para manter distância (teep), e o controle no clinch
                    para anular os ataques do oponente e preparar o contragolpe.
                </p>
            </div>
        </section>
    )
}

export default ImgCardMT