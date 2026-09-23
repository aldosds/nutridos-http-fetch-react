import { useEffect, useState } from "react";
import "./App.css";

////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }

    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>Nutridos</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img className="capa" src={item.capa} alt={item.titulo} />
            <p className="subtitulo">{item.subtitulo}</p>
            <h3>
              Categoria: <em>{item.categoria}</em>
            </h3>
            <a href="#" className="botao">
              Acessar
            </a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
