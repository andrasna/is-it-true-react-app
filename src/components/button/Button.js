import styles from './Button.module.css'

function Button({ clickHandler, isDisabled, children }) {
  return (
    <button
      onClick={clickHandler}
      className={`${styles.activated} ${isDisabled ? styles.disabled : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
