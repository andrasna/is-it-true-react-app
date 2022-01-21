import styles from './Button.module.css'

function Button({ clickHandler, isDisabled, children }) {
  return (
    <button
      onClick={clickHandler}
      className={`${styles.normal} ${isDisabled ? styles.disabled : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
