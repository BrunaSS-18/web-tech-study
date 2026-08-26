import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"
import ImgCard from "./Components/ImgCard"

function App() {

  return (
    <>

      <Header title="Meu site"/>

      <Header title="Lorem ipsum"/>

      <Header title="introdução React"/>

      <ImgCard caption="New Lorem Ipsum"/>

      <Banner>
        <h1>Seja bem-vindo!</h1>   
        <p>Aqui você encontra as melhores cachorrinhos para a adoção</p>    
      </Banner>

      <Card/>

      <Footer title="fim da página"/>

    </>
  )
}

export default App


/*Atividade*/

// import BannerMT from "./Components/MuayThai/BannerMT"
// import FooterMT from "./Components/MuayThai/FooterMT"
// import HeaderMT from "./Components/MuayThai/HeaderMT"
// import ImgCardMT from "./Components/MuayThai/ImgCardMT"

// function App() {

//   return (
//     <>
//       <HeaderMT title="Muay Thai"/>
  
//       <BannerMT>
//         <h1>Seja bem-vindo ao site que fala sobre Muay Thai</h1>
//       </BannerMT>

//       <ImgCardMT/>

//       <FooterMT title="chegamos ao fim..."/>
//     </>
//   )
// }

// export default App