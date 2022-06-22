import styles from './Button.module.scss';

interface IButton {
  children : string
}

const Button = ({ children }: IButton) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default Button