import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const theme = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid xs={12} md={7}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              }}
            >
              Your Trusted Insurance Partner
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                opacity: 0.9,
              }}
            >
              Protecting what matters most with comprehensive insurance solutions tailored to your needs.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Get a Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('services')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 3,
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Contact Us Today
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon />
                <Typography variant="body1">+1 (555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon />
                <Typography variant="body1">info@gurufinance.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
