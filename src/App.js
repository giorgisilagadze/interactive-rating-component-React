
import {useState} from "react";
import Rating from "./components/Rating";

function App() {
  const [visible, setVisible] = useState(true);


 return visible ? (<Rating setVisible={setVisible} visible={visible} />) : null
}

export default App;

