import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'The Company', 'The Product'];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseNavMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(to right, #2D0052, #7A1FA2, #1A0033)', color: '#EFEFEF', boxShadow: 'none', border: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          width: 'auto',
          height: 'auto',
          img: {
            width: '90px',
            '@media (max-width: 1200px)': {
              width: '80px',
            },
            '@media (max-width: 900px)': {
              width: '70px',
            },
            '@media (max-width: 600px)': {
              width: '60px',
            }
          }
        }}>
          <img src='/NavLogo.svg' alt='nav-logo' />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1.5rem', fontSize: '15px' }}>
          {pages.map((page) => (
            <Typography key={page} sx={{ color: '#EFEFEF', cursor: 'pointer' }}>
              {page}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="contained" sx={{
            background: 'linear-gradient(to right, #a855f7, #003F68)',
            color: 'white',
            fontWeight: 550,
            borderRadius: '7px',
            padding: '0.5rem 1rem',
            textTransform: 'none',
            cursor: 'pointer'
          }}>
            Schedule a Briefing
          </Button>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative', zIndex: 200 }}>
          <IconButton size="large" onClick={handleOpenNavMenu} sx={{ color: '#EFEFEF' }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'linear-gradient(to right, #2D0052, #7A1FA2, #1A0033)',
            padding: '1rem',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isMenuOpen ? 1 : 0,
            transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
            flexDirection: 'column',
            gap: '1.5rem',
            zIndex: 100,
            paddingTop: '1.5rem',
            pointerEvents: isMenuOpen ? 'auto' : 'none'
          }}
        >
          {pages.map((page) => (
            <Typography key={page} sx={{ color: '#EFEFEF', cursor: 'pointer' }} onClick={handleCloseNavMenu}>
              {page}
            </Typography>
          ))}

          <Button variant="contained" sx={{
            background: 'linear-gradient(to right, #a855f7, #003F68)',
            color: '#D3D3D3',
            fontWeight: 550,
            borderRadius: '7px',
            padding: '0.5rem 1rem',
            textTransform: 'none',
            marginTop: '1.5rem',
            cursor: 'pointer'
          }}>
            Schedule a Briefing
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;