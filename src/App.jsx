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
    </div>
  );
}

export default App;
