import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Computer } from '@images/art/computer.svg';
import { ReactComponent as Network } from '@images/art/network.svg';
import { ReactComponent as Folders } from '@images/art/folders.svg';

import { Section, Container } from '@components/global';

const About = () => (
  <Section id="about">
    <Container>
      <Grid>
        <div>
          <h2>Create Interactive Learning Spaces</h2>
          <p>
            Build rich learning experiences with content from across the web.
          </p>
          <p>
            Create engaging activities for your classroom, professional training event or tutoring session.
          </p>
          <p>
            Access hundreds of resources covering a wide variety of subjects.
          </p>
        </div>
        <Art>{Computer()}</Art>
      </Grid>
      <Grid inverse>
        <Art>{Folders()}</Art>
        <div>
          <h2>Share Knowledge Privately</h2>
          <p>Create, manage and share content with colleagues.</p>
          <p>Collaborate both within and across organisations.</p>
          <p>Prepare interactive presentations for your next meeting or seminar.</p>
        </div>
      </Grid>
      <Grid>
        <div>
          <h2>Engage With Communities You Care About</h2>
          <p>Discuss topics with like-minded users.</p>
          <p>Take part in both virtual and real-world events.</p>
          <p>Connect with established communities of practice and personal interest groups.</p>
        </div>
        <Art>{Network()}</Art>
      </Grid>
    </Container>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
