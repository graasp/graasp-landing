import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
} from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'gatsby';
import FooterListItem from '../common/FooterListItem';

const Footer = () => (
  <Grid
    container
    spacing={1}
    sx={{ bgcolor: 'primary.main', color: 'text.main' }}
    alignContent="center"
    justifyContent="space-around"
  >
    <Grid item xs={12} align="center">
      <Typography variant="p">Get Started with a Free Account</Typography>
      <Button
        href="https://auth.graasp.org/signup"
        variant="contained"
        color="action"
        sx={{ my: 2, mx: 1 }}
      >
        Sign Up
      </Button>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Typography variant="h6" align="center">
        <strong>Partners</strong>
      </Typography>
      <List dense sx={{ px: 5 }}>
        <FooterListItem>
          <ListItemButton component="a" href="https://epfl.ch" target="_blank">
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
      <Typography variant="h6" align="center">
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
              <FacebookIcon sx={{ color: 'text.main' }} />
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
              <TwitterIcon sx={{ color: 'text.main' }} />
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
              <LinkedInIcon sx={{ color: 'text.main' }} />
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
              <GitHubIcon sx={{ color: 'text.main' }} />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItemButton>
        </FooterListItem>
      </List>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Typography variant="h6" align="center">
        <strong>Support</strong>
      </Typography>
      <List dense sx={{ px: 5 }}>
        <FooterListItem>
          <ListItemButton
            component="a"
            href="https://cloud.graasp.eu/en/pages/5797891865089e56cd1f11a9"
            target="_blank"
          >
            <ListItemText primary="Tutorials" />
          </ListItemButton>
        </FooterListItem>
        <FooterListItem>
          <ListItemButton
            component="a"
            href="https://developers.graasp.eu/"
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
        <FooterListItem>
          <ListItemButton
            component="a"
            href="https://graasp.eu/donate"
            target="_blank"
          >
            <ListItemText primary="Donate" />
          </ListItemButton>
        </FooterListItem>
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
    <Grid item xs={12} sm={4} align="center">
      <Link to="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>
        Terms of Service
      </Link>
    </Grid>
    <Grid item xs={12} sm={4} align="center">
      <Link to="/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="p">Privacy Policy</Typography>
      </Link>
    </Grid>
    <Grid item xs={12} sm={4} align="center">
      <Link
        to="/disclaimer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Typography variant="p">Disclaimer</Typography>
      </Link>
    </Grid>
    <Grid item xs={12} align="center">
      <Box sx={{ my: 2 }}>
        <Typography variant="p" align="center">
          &copy; Graasp 2014 - {new Date().getFullYear()}
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

export default Footer;
