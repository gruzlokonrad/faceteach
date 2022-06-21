import Container from '../Container/Container';
import style from './Footer.module.scss';
import logo from 'images/logo_1.png';
import FooterItem from './FooterItem/FooterItem';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapper}>


          {/* logo div */}
          <div className={style.logo}>
            <img src={logo} alt="faceteach" />
          </div>


          {/* container with items */}
          <div className={style.wrapper__container}>
            <FooterItem
              header="Whatsapp"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            />



            {/* extra container with custom styl */}
            <div className={style.wrapper__container__container}>
              <FooterItem
                header="E-mail"
                content="Lorem ipsum dolor sit amet, consectetur"
              />
              <FooterItem
                header="Telefon"
                content="(+48) 500 705 705"
              />
            </div>
          </div>


        </div>
      </Container>
    </footer>
  )
}

export default Footer