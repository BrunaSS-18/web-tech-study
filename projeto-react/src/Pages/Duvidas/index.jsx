import "./Duvidas.css"
import "../../global.css"

export default function index() {

  return (
    <section className="duvida-container">
        <div className="duvida-section">
            <h2>Perguntas Frequentes</h2>
            
            <div className="duvida-item">
                <p className="pergunta">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p className="resposta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="duvida-item">
                <p className="pergunta">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p className="resposta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="duvida-item">
                <p className="pergunta">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p className="resposta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="duvida-item">
                <p className="pergunta">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p className="resposta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <form className="duvida-form" onSubmit={(e) => e.preventDefault()}>
            <label className="duvida" for="duvida">Digite sua dúvida:</label>
            <textarea id="duvida" name="duvida" rows="5" cols="40" required></textarea>
            <button type="submit" className="enviar">Enviar</button>
        </form>
    </section>
  )
}

//rows: Define a altura do campo em número de linhas visíveis. 
//cols: Define a largura do campo em número de caracteres.
