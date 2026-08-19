import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"

function App() {

  return (
    <>

      <Header title="Meu site"/>

      <Header title="Lorem ipsum"/>

      <Header title="introdução React"/>

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
