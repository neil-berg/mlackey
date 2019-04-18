import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  background: var(--red);
  margin: 0 20px 20px 170px;
  padding: 3em 1em 0 1.1em;
  // Min height ensures that this section spans entire
  // viewport height space below NavBar (120px) + 20px of
  // margin above NavBar and below this section (40px total)
  min-height: calc(100vh - 160px);

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
`;

class Contact extends React.Component {
  componentDidMount() {
    const sectionHeight = this.sectionRef.clientHeight;
    const sectionOffsetTop = this.sectionRef.offsetTop;
    const galleryHeight = sectionOffsetTop + sectionHeight - 20;
    this.props.setGalleryHeight(galleryHeight);
  }

  render() {
    return (
      <Main
        sectionMinHeight={this.props.sectionMinHeight}
        ref={sectionRef => (this.sectionRef = sectionRef)}
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
      </Main>
    );
  }
}

export default Contact;
