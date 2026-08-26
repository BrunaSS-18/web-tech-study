import React from 'react'
import "./box.css"

function index() {

  const boxPrincesas = [
    {
        img: "https://www.cazulo.com/media/catalog/product/cache/6053a0f28dbe90dbbd0e725067e2b9bc/a/d/adesivo-de-parede-cinderela-glamour-03.jpg",
        title:"Cinderela",
        textBox: "Protagonista do filme que leva seu nome, Cinderela é a segunda princesa oficial da Disney. Na história, depois da morte do seu pai, ela passa a servir como escrava de sua madrasta e suas irmãs, mas nunca deixa de ser uma jovem amável e cheia de esperanças.",
        link: "#"
    },

    {
        img: "https://preview.redd.it/how-do-you-view-rapunzel-v0-w99cp3fq3zbd1.jpeg?width=640&crop=smart&auto=webp&s=4114fc579e1713f3bcc766f96d81ea7464690069",
        title:"Rapunzel",
        textBox: "Rapunzel é a protagonista de Enrolados, bem como a décima Princesa da Disney, a primeira personagem da franquia originalmente animada por computação gráfica e a primeira princesa europeia da Disney em 20 anos.",
        link: "#"
    },

    {
        img: "https://i.pinimg.com/236x/c1/6f/ca/c16fcad0d851847d14f30cc98195cacf.jpg",
        title:"Bela",
        textBox: "Bela é a protagonista de A Bela e a Fera e a quinta Princesa da Disney. Ela é uma jovem muito inteligente e leitora voraz, que deseja se aventurar para longe de sua pequena aldeia. Quando seu pai é aprisionado por uma fera misteriosa, dona de um castelo encantado, Bela se oferece em troca da liberdade do homem.",
        link: "#"
    },

     {
        img: "https://upload.wikimedia.org/wikipedia/pt/5/56/Tiana_by_Disney.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
        title:"Tiana",
        textBox: "Na história, Tiana mora em Nova Orleans e tem o sonho de abrir um restaurante, mas no dia que compartilha um beijo com um príncipe que havia sido transformado em sapo, Tiana acaba sendo vítima da mesma maldição.",
        link: "#"
    },

    {
        img: "https://blog.explorersclub.com.br/wp-content/uploads/2024/04/moana.jpg",
        title:"Moana",
        textBox: "Moana é a personagem principal do filme que leva seu nome e é a décima segunda Princesa da Disney. Na história do longa, Moana parte em uma jornada para salvar seu povo de uma praga e conhece o semideus Maui, que a guia em uma aventura pelos oceanos.",
        link: "#"
    },

    {
        img: "https://kanto.legiaodosherois.com.br/w750-q95-k1/wp-content/uploads/2021/11/legiao_gBE5MyKARD9w.png.webp ",
        title:"Branca de Neve",
        textBox: "Branca de Neve não é apenas a primeira princesa oficial da Disney como também é a primeira protagonista de um longa-metragem da história da animação. No filme, Branca de Neve é perseguida pela sua madrasta, a Rainha Má, que resolve se livrar da enteada após o Espelho Mágico revelar que Branca de Neve era a mulher mais bela do mundo.",
        link: "#"
    }
]

  return (
    <div className='box-container'>
        {boxPrincesas.map((box, index) => {
            console.log(index)
            return (
                <div className='box' key={index}>
                    <img src={box.img}/>
                    <h2>{box.title}</h2>
                    <p>{box.textBox}</p>
                    <a href={box.link}>Saiba mais</a>
                </div>
            )
        })}
    </div>
  )
}

export default index