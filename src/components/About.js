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

  p.about {
    font-size: 1em;
    max-width: 500px;
    padding-bottom: 1em;
  }

  .fade-appear {
    opacity: 0.01;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 0.4s ease-in;
  }
`;

class About extends React.Component {
  componentDidMount() {
    const sectionHeight = this.sectionRef.clientHeight;
    const sectionOffsetTop = this.sectionRef.offsetTop;
    const galleryHeight = sectionOffsetTop + sectionHeight - 10;
    this.props.setGalleryHeight(galleryHeight);

    this.props.setSection(this.props.location.pathname);
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
          <p className="about">
            Meredith Lackey is a filmmaker based in Los Angeles.
          </p>
          <p className="about">
            Her work has screened internationally at festivals including
            Sundance, NYFF, FIDMarseille, and Edinburgh.
          </p>
          <p className="about">
            She holds a BA in Philosophy and Media from Hampshire College, and
            an MFA in Moving Image from the University of Illinois Chicago.
          </p>
          <p className="about">
            She is the recipient of the UFVA Carole Fielding Grant and is a
            Princess Grace Foundation Honorarium winner.
          </p>
        </CSSTransitionGroup>
      </Main>
    );
  }
}

export default About;
