
import styles from './App.module.css'
import Display from './components/display'
import Btn from "./components/Btn"
import { useState } from 'react';
function App() {

  const [calval, setcalval] = useState("");
  const onbuttonclick = (buttonText) => {

    if (buttonText === "c") {
      setcalval("");
    } else if (buttonText === "=") {

      const result = eval(calval);
      setcalval(result);
    }
    else {
      const newdisplayvalue = calval + buttonText;
      setcalval(newdisplayvalue);
    }
  }

  return <>
    <div className={styles.container}>
      <Display displayvalue={calval}></Display>
      <Btn onbuttonclick={onbuttonclick} ></Btn>
    </div>
  </>
}

export default App
