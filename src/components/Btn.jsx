
import styles from "./Btn.module.css";
const Btn = ({ onbuttonclick }) => {

  const btnitem = ['c', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', '.', "00"];
  return <> <div className={styles.btncontainer}>
    {btnitem.map((item) => (<button className={styles.btn} onClick={() => onbuttonclick(item)}>{item}</button>))}

  </div>
  </>
}
export default Btn;