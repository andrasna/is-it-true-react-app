import styles from './Wrapper.module.css'

function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
