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

  .movie {
    font-size: 1em;
    max-width: 500px;

    :not(:last-child) {
      padding-bottom: 2em;
    }

    h2 {
      font-size: 1.1em;
    }

    p.overview {
      padding: 1em 0;
    }

    a.trailer,
    a.premier {
      display: block;
      width: 100px;
      color: var(--black);
      font-weight: bold;
      padding-bottom: 0.25em;
      transition: all 0.3s ease-out;

      :hover {
        color: var(--white);
      }
    }

    p.support {
      padding-bottom: 1em;
    }

    p.support a {
      color: var(--black);
      font-weight: bold;
      transition: all 0.3s ease-out;

      :hover {
        color: var(--white);
      }
    }
  }
`;

class Work extends React.Component {
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
        <div className="movie cablestreet">
          <h2 className="title">CABLESTREET / 电缆街</h2>
          <p className="overview">
            A cable system designed by controversial Chinese company Huawei
            Technologies enables communication between an expert and a machine.
            Time succumbs to space in a New Cold War played out in materials.
          </p>
          <a className="trailer" href="https://vimeo.com/182922960">
            TRAILER
          </a>
          <a
            href="https://www.sundance.org/projects/cablestreet"
            className="premier"
          >
            PREMIERE
          </a>
        </div>
        <div className="movie carwarsh">
          <h2 className="title">OPERATION CAR WASH / OPERAÇÃO LAVA JATO</h2>
          <p className="overview">
            In Salvador, Brazil, workers protests the ouster of Brazilian Labor
            Party President, Dilma Rousseff. In Cleveland, Ohio, gun rights
            advocates clash with anti-fascists during the Republican nomination
            of Donald Trump. A verité portrait of populism as seen from the
            public square.
          </p>
          <p className="support">
            Produced with support from the{' '}
            <a href="http://sacatar.org">Sacatar Foundation</a>
          </p>
          <a href="" className="support" />
          <a className="trailer" href="">
            TRAILER
          </a>
        </div>
      </Main>
    );
  }
}

export default Work;
