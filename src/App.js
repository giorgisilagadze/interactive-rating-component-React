
import {useState} from "react";
import Rating from "./components/Rating";
import Result from "./components/Res";

function App() {
  const [visible, setVisible] = useState(true);
  const [rate, setRate] = useState(null);


 return visible ? (<Rating setVisible={setVisible} setRate={setRate} rate={rate}/>) : <Result rate={rate}/>
}

export default App;

