import Button from "./Button";
import { useEffect, useState } from "react";
function App() {
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + content)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [content]);

  console.log("Componente caricata");

  const str = ["users", "posts", "photos"];

  function show(stringhe) {
    console.log("aggiornato");
    setContent(stringhe);
  }
  //useEffect(bevo(),[qunado mangio,quando,ho sete,quando corro,..])
  // fa 'bevo' quando varia una delle dipendenze

  return (
    <div>
      <Button azione={() => show(str[0])} nome="Utenti" />
      <Button azione={() => show(str[1])} nome="Tweet" />
      <Button azione={() => show(str[2])} nome="Commenti" />
      <div>{content}</div>
      {data.map((elemento) => (
        <pre>{JSON.stringify(elemento)}</pre>
      ))}
    </div>
  );
}

export default App;
