import styles from './NotFoundPage.module.css';
import img from './img/not-found.jpg'
import {useLocation} from 'react-router-dom'

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <>
    <img src={img} className={styles.img} alt="Not Found"></img>
    <p className={styles.text}>No match for  <u>{location.pathname}</u> </p>
    </>
  )
}


export default NotFoundPage;