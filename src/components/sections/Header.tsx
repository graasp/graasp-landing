import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/global';
import GraaspLogo from '@images/logos/graasp.svg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Grid>
        <Art>{/* <GraaspLogo /> */}</Art>
        <Text>
          <Typography variant="h3">
            Communicate, Collaborate, Build Engaging Learning Experiences
          </Typography>
          <Typography variant="h5" sx={{ my: 2 }}>
            Digital Education Platform
          </Typography>
          <Button
            href="https://auth.graasp.org/signin"
            variant="contained"
            color="primary"
            sx={{ my: 2, mx: 1 }}
          >
            Sign In
          </Button>
          <Button
            href="https://auth.graasp.org/signup"
            variant="contained"
            color="secondary"
            sx={{ my: 2, mx: 1 }}
          >
            Sign Up
          </Button>
        </Text>
      </Grid>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  padding-top: 204px;
  padding-bottom: 180px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-top: 128px;
    text-align: center;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
  text-align: center;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: -1;
    }
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.color.white.regular};
  justify-self: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default Header;
