import { useEffect, useState } from "react";

import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
import Footer from "./components/Footer/Footer"

const counterInitialValue = parseInt(localStorage.getItem("counter")) || 0

function App() {
  const [counter, setCounter] = useState(counterInitialValue)

  const sefiProp = "Cómo mola tu camisa"

  useEffect(() => {
    localStorage.setItem("counter", counter)
  },[counter])

  return (
    <>
      <Header counterInitialValue={counterInitialValue} counter={counter} setCounter={setCounter} />
      <Body sefiProp={sefiProp} />
      <Footer counter={counter} />
    </>
  );
}

export default App;
