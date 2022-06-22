import style from './FooterItem.module.scss';

const FooterItem = ({ header, content }: any) => {
  return (
    <div className={style.item}>
      <header className={style.item__header}>
        <h4>{header}</h4>
      </header>
      <p className={style.item__content} >
        {content}
      </p>
    </div>
  )
}

export default FooterItem