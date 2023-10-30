import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Mastodon from '../../images/logos/mastodon.svg';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'gatsby';
import FooterListItem from '../common/FooterListItem';

const Footer = () => (
  <Stack
    direction="column"
    bgcolor="primary.main"
    color="primary.contrastText"
    alignItems="center"
  >
    <Stack alignItems="center" direction="row" color="primary.contrastText">
      <Typography color="primary.contrastText" variant="body1">
        Get Started with a Free Account
      </Typography>
      <Button
        href="https://auth.graasp.org/signup"
        variant="contained"
        color="secondary"
        sx={{ my: 2, mx: 1 }}
      >
        Sign Up
      </Button>
    </Stack>
    <Grid
      container
      spacing={1}
      alignContent="center"
      justifyContent="space-around"
      textAlign="center"
    >
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">
          <strong>Partners</strong>
        </Typography>
        <List dense sx={{ px: 5 }}>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://epfl.ch"
              target="_blank"
            >
              <ListItemText primary="EPFL" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://edtech-collider.ch/"
              target="_blank"
            >
              <ListItemText primary="Swiss EdTech Collider" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://www.golabz.eu/"
              target="_blank"
            >
              <ListItemText primary="Go-Lab" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://d-skills.ch/"
              target="_blank"
            >
              <ListItemText primary="Swiss Digital Skills Academy" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://www.ihub4schools.eu/"
              target="_blank"
            >
              <ListItemText primary="iHub4Schools" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://belearn.swiss/en/"
              target="_blank"
            >
              <ListItemText primary="BeLEARN" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://go-ga.org/"
              target="_blank"
            >
              <ListItemText primary="GO-GA" />
            </ListItemButton>
          </FooterListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">
          <strong>Social Media</strong>
        </Typography>
        <List dense sx={{ px: 5 }}>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://www.facebook.com/graasp"
              target="_blank"
            >
              <ListItemIcon>
                <FacebookIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://twitter.com/graasp"
              target="_blank"
            >
              <ListItemIcon>
                <TwitterIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://www.linkedin.com/company/graasp"
              target="_blank"
            >
              <ListItemIcon>
                <LinkedInIcon sx={{ color: 'primary.contrastText' }} />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://github.com/graasp"
              target="_blank"
            >
              <ListItemIcon>
                <GitHubIcon sx={{ color: 'primary.contrastText' }} />
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              rel="me"
              component="a"
              href="https://tooting.ch/@graasp"
              target="_blank"
            >
              <ListItemIcon>
                <Mastodon />
              </ListItemIcon>
              <ListItemText primary="Mastodon" />
            </ListItemButton>
          </FooterListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">
          <strong>Support</strong>
        </Typography>
        <List dense sx={{ px: 5 }}>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://player.graasp.org/9d80d81f-ec9d-4bfb-836a-1c6b125aef2f"
              target="_blank"
            >
              <ListItemText primary="Tutorials" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://graasp.github.io/docs/"
              target="_blank"
            >
              <ListItemText primary="Developers" />
            </ListItemButton>
          </FooterListItem>
          <FooterListItem>
            <ListItemButton
              component="a"
              href="https://portal.klewel.com/watch/webcast/swiss-edtech-collider-april-2017/talk/2/"
              target="_blank"
            >
              <ListItemText primary="Pitch" />
            </ListItemButton>
          </FooterListItem>
          {/* <FooterListItem>
            <ListItemButton
              component="a"
              href="https://graasp.eu/donate"
              target="_blank"
            >
              <ListItemText primary="Donate" />
            </ListItemButton>
          </FooterListItem> */}
          <FooterListItem>
            <ListItemButton
              component="a"
              href="mailto:contact@graasp.org"
              target="_blank"
            >
              <ListItemText primary="Contact" />
            </ListItemButton>
          </FooterListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography
          component={Link}
          margin="auto"
          to="/terms/"
          color="primary.contrastText"
          variant="body1"
          sx={{ textDecoration: 'none' }}
        >
          Terms of Service
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography
          component={Link}
          to="/privacy/"
          color="primary.contrastText"
          variant="body1"
          sx={{ textDecoration: 'none' }}
        >
          Privacy Policy
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography
          component={Link}
          to="/disclaimer/"
          color="primary.contrastText"
          variant="body1"
          sx={{ textDecoration: 'none' }}
        >
          Disclaimer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box my={2}>
          <Typography
            variant="body1"
            align="center"
            color="primary.contrastText"
          >
            &copy; Graasp 2014 - {new Date().getFullYear()}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Stack>
);

export default Footer;