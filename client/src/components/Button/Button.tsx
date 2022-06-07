import ButtonStyles from './Button.module.scss';

interface IButton {
  children : string
}

const Button = ({ children }: IButton) => {
  return (
    <button className={ButtonStyles.button}>
      {children}
    </button>
  )
}

export default Button