import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'gatsby';
import { Divider } from '@mui/material';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0, mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Graasp
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="about"
              align="center"
              onClick={handleCloseNavMenu}
              href="https://association.graasp.org"
              target="_blank"
              sx={{ my: 2, mx: 1, display: 'block' }}
              color="text"
            >
              About
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="signin" onClick={handleCloseNavMenu}>
                <Button href="https://auth.graasp.org/signin" variant="text">
                  Sign In
                </Button>
              </MenuItem>
              <MenuItem key="signup" onClick={handleCloseNavMenu}>
                <Button href="https://auth.graasp.org/signup" variant="text">
                  Sign Up
                </Button>
              </MenuItem>
              <Divider />
              <MenuItem key="about" onClick={handleCloseNavMenu}>
                <Button
                  href="https://association.graasp.org"
                  target="_blank"
                  variant="text"
                >
                  About
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              href="https://auth.graasp.org/signin"
              variant="text"
              color="text"
              sx={{ my: 2, mx: 1, display: 'block' }}
            >
              Sign In
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              href="https://auth.graasp.org/signup"
              variant="contained"
              color="action"
              sx={{ my: 2, mx: 1, display: 'block' }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
