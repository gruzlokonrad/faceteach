import '../../_colors.scss';
import './Menu.scss';
import {
  Navbar,
  // Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleCheck, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo_1.png';
import Container from '../Container/Container';

const Menu = () => {
  return (
    <div className="menu">
      <div className="accountBar">
        <Container>
          <img src={logo} alt="logo" />
          <div className="accountBar__icon">
            <FontAwesomeIcon className="circle-check" icon={faCircleCheck} />
            <FontAwesomeIcon className="circle-user" icon={faCircleUser} />
          </div>
        </Container>
      </div>
      <Navbar expand="lg">
        <Container>
          <img src={logo} alt="logo" />
          <div className="accountBar__icon">
            <FontAwesomeIcon className="circle-check" icon={faCircleCheck} />
            <FontAwesomeIcon className="circle-user" icon={faCircleUser} />
            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ width: '100vw' }}
              navbarScroll
            >
              <NavDropdown title="Przedmioty" id="navbarScrollingDropdown">
                  <Nav.Link href="#action1">Matematyka</Nav.Link>
                  <Nav.Link href="#action2">Fizyka</Nav.Link>
                  <Nav.Link href="#action3">Chemia</Nav.Link>
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#action5">
                  Chemia
                </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="#action4">Dla ucznia</Nav.Link>
              <Nav.Link href="#action5">Dla nauczyciela</Nav.Link>
              <Nav.Link href="#action6">Cennik</Nav.Link>
              <Nav.Link href="#action7">Kontakt</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu