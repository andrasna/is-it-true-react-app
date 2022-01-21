import { Link as RouterLink } from 'react-router-dom'
import styles from './Link.module.css'

function Link(props) {
  return <RouterLink {...props} className={styles.link} />
}

export default Link
