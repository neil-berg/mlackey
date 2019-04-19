import React from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';

const Main = styled.main`
  background: var(--red);
  margin: 0 10px 10px 70px;
  padding: 3em 1em 0 1.1em;
  // Min height ensures that this section spans entire
  // viewport height space below NavBar (120px) + 10px of
  // margin above NavBar and below this section (20px total)
  min-height: calc(100vh - 140px);
  position: relative;

  a {
    display: block;
    width: 100px;
    color: var(--black);
    font-weight: bold;
    padding-bottom: 1em;
    transition: all 0.3s ease-out;
    :hover {
      color: var(--white);
    }
  }

  a.pgp {
    display: inline-block;
    width: auto;
    padding-bottom: 0;
  }

  .pgp-numbers {
    font-size: 0.8em;
  }

  p.footer {
    position: absolute;
    bottom: 0.75em;
    left: 1em;
    font-size: 0.9em;

    a {
      display: inline;
      font-weight: bold;
      letter-spacing: 0.05em;
      transition: all 0.3s ease-out;
      :hover {
        color: var(--white);
      }
    }
  }

  .fade-appear {
    opacity: 0.01;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 0.4s ease-in;
  }
`;

class Contact extends React.Component {
  componentDidMount() {
    const sectionHeight = this.sectionRef.clientHeight;
    const sectionOffsetTop = this.sectionRef.offsetTop;
    const galleryHeight = sectionOffsetTop + sectionHeight - 10;
    this.props.setGalleryHeight(galleryHeight);
  }

  render() {
    return (
      <Main
        sectionMinHeight={this.props.sectionMinHeight}
        ref={sectionRef => (this.sectionRef = sectionRef)}
      >
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={400}
          transitionEnter={false}
          transitionLeave={false}
        >
          <a className="email" href="mailto:mhelenelackey@gmail.com">
            EMAIL
          </a>
          <a
            className="pgp"
            href="/assets/Meredith-Lackey-AB873A70–Public.asc"
            download
          >
            PGP
          </a>
          <span className="pgp-numbers">
            / D745 45C1 9117 640A BE2B A754 C3EB D3AF AB87 3A70
          </span>
          <p className="footer">
            site by{' '}
            <a
              href="https://neilberg.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              neil berg
            </a>
          </p>
        </CSSTransitionGroup>
      </Main>
    );
  }
}

export default Contact;
