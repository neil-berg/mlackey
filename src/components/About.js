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

  p.about {
    font-size: 1em;
    max-width: 500px;
    padding-bottom: 1em;
  }
`;

class About extends React.Component {
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
        <p className="about">
          Meredith Lackey is a filmmaker based in Los Angeles.
        </p>
        <p className="about">
          Her work has screened internationally at festivals including Sundance,
          NYFF, FIDMarseille, and Edinburgh.
        </p>
        <p className="about">
          She holds a BA in Philosophy and Media from Hampshire College, and an
          MFA in Moving Image from the University of Illinois Chicago.
        </p>
        <p className="about">
          She is the recipient of the UFVA Carole Fielding Grant and is a
          Princess Grace Foundation Honorarium winner.
        </p>
      </Main>
    );
  }
}

export default About;
