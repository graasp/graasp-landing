import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import { ReactComponent as GraaspLogo } from '@images/logos/graasp.svg';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Grid>
        <Art>{GraaspLogo()}</Art>
        <Text>
          <h1>
            Communicate, Collaborate, Build Engaging Learning Experiences
          </h1>
          <br />
          <p>
            <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">
              Check out source &nbsp;&#x2794;
            </StyledExternalLink>
          </p>
        </Text>
      </Grid>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  color: ${props => props.theme.color.white.regular};
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
