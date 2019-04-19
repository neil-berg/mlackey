import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: 120px;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 10px 0 70px;
  padding: 1.75em 1.1em;
  background: var(--red);

  li {
    padding: 0.15em 0;
    font-size: 1.15em;
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  li a {
    color: var(--black);
    transition: all 0.3s ease-out;
    :hover {
      color: var(--white);
    }
  }

  li a.selected {
    color: var(--white);
  }
`;

class NavBar extends React.Component {
  state = { navValue: 'Meredith Lackey' };

  setNavValue = e => {
    if (e.target.nodeName === 'A') {
      if (e.target.innerText !== 'Notes') {
        this.setState({ navValue: e.target.innerText });
      }
    }
  };

  render() {
    const navItems = [
      { value: 'Meredith Lackey', path: '/' },
      { value: 'Work', path: '/work' },
      {
        value: 'Notes',
        path:
          'https://docs.google.com/document/d/1BC2HZorFld9sInMfIKiXZGsLbNu1UgW5zJbdb39VeLk/edit?usp=sharing'
      },
      { value: 'Contact', path: '/contact' }
    ];
    const navList = navItems.map((item, i) => {
      if (item.value !== 'Notes') {
        return (
          <li key={i}>
            <Link
              to={`${item.path}`}
              className={`${
                item.value === this.state.navValue ? 'selected' : ''
              }`}
            >
              {item.value}
            </Link>
          </li>
        );
      } else {
        return (
          <li key={i}>
            <a href={`${item.path}`} target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          </li>
        );
      }
    });
    return (
      <nav onClick={e => this.setNavValue(e)}>
        <NavContainer>{navList}</NavContainer>
      </nav>
    );
  }
}

export default NavBar;
