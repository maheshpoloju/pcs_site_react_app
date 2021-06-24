import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UncontrolledDropdown from 'reactstrap/lib/UncontrolledDropdown';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import Logo from '../../assets/img/pcs-logo.png';

const items = [
  { to: '/', title: 'home' },
  { to: '/about', title: 'about' },
  { to: '/clients', title: 'clients' },
  { to: '/services', title: 'services' },
  { to: '/bot', title: 'bot' },
  { to: '/careers', title: 'careers' },
  { to: '/contact', title: 'contact' },
];

const languages = ['EN', 'FR', 'PL', 'DE'];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(['navbar']);

  const toggle = () => setIsOpen(!isOpen);
  const language = i18n.language.split('-')[0].toUpperCase();

  return (
    <header id="header">
      <div className="startp-nav">
        <Navbar color={isOpen ? 'light' : undefined} light expand="md">
          <Container>
            <NavbarBrand href="/" className="logo">
              <img src={Logo} alt="dsi-logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar className="offset justify-content-end">
              <Nav className="menu_nav nav " navbar>
                {items.map((item, index) => (
                  <NavItem key={`nav-item-${index}`}>
                    <NavLink to={item.to} exact className="nav-link">{t(item.title)}</NavLink>
                  </NavItem>
                ))}
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {language}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {languages.filter((e) => e !== language).map((e) => (
                      <DropdownItem
                        key={e}
                        onClick={() => {
                          i18n.changeLanguage(e.toLowerCase());
                        }}
                      >
                        {e}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default NavBar;
