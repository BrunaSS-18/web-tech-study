import "./Sobre.css"
import "../../global.css"
import {useState, useEffect} from "react"

export default function index() {
  const [sobre, setSobre] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/sobre')
      .then(response => response.json())
      .then(data => setSobre(data))
  }, [])

  return (
    <section className='container' key={sobre.id}>
        <h1 className='sobre-title'>Sobre - React</h1>
        <div>
            {sobre.map(item => (
                <div className='sobre-text'key={item.id}>
                    <h3>{item.titulo}</h3>
                    <p>{item.descricao}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
