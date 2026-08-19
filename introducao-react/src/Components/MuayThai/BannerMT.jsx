import "./BannerMT.css"

const BannerMT = (props) => {

    return (
       <div className="banner">
            {props.children}
        </div>
    )
}

export default BannerMT