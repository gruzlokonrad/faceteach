import Container from '../Container/Container';
import style from './Copyright.module.scss';

const Copyright = () => {
  return (
    <section className={style.copyrightSection}>
      <Container>
        <p>
          © 2022 FACETEACH. WSZYSTKIE PRAWA ZASTRZEŻONE.
        </p>
      </Container>
    </section>
  )
}

export default Copyright