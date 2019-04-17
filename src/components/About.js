import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  background: var(--red);
  margin: 0 20px 20px 160px;
  padding: 1em;
  // Min height ensures that this section spans entire
  // viewport height space below NavBar (100px) + 20px of
  // margin above NavBar and below this section (40px total)
  min-height: calc(100vh - 140px);
  > p {
    font-size: 1em;
    max-width: 500px;
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
        <p>Meredith Lackey is a filmmaker based in Los Angeles.</p>
        <br />
        <p>
          Her work has screened internationally at festivals including Sundance,
          NYFF, FIDMarseille, and Edinburgh.
        </p>
        <br />
        <p>
          She holds a BA in Philosophy and Media from Hampshire College, and an
          MFA in Moving Image from the University of Illinois Chicago.
        </p>
        <br />
        <p>
          She is the recipient of the UFVA Carole Fielding Grant and is a
          Princess Grace Foundation Honorarium winner.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aperiam voluptate amet ad sint soluta, non deleniti nulla iste quaerat
          nostrum deserunt vel cumque itaque, officia saepe, ipsa dolor
          reprehenderit? Saepe eligendi rerum explicabo quasi consequuntur
          possimus illo recusandae obcaecati blanditiis perferendis. Explicabo
          nisi molestias perferendis, quas iure alias ratione accusantium
          excepturi, aut tempora nam quos culpa exercitationem voluptas.
          Laborum? Consequatur quasi fugit adipisci, placeat illum aperiam
          eligendi delectus voluptates repellat, voluptatem molestiae deserunt
          ipsa quos praesentium provident vero nostrum temporibus fuga?
          Exercitationem officiis dicta amet veritatis sunt explicabo nemo?
        </p>
      </Main>
    );
  }
}

export default About;
