import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "white",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <SecurityIcon sx={{ mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                GuruFinance
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: "grey.400" }}>
              Your trusted partner for comprehensive insurance solutions.
              Protecting what matters most since 2003.
            </Typography>
            <Box>
              <IconButton color="inherit" size="small" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" size="small" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" size="small" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" size="small" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection("hero")}
                sx={{
                  color: "grey.400",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                }}
              >
                Home
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection("services")}
                sx={{
                  color: "grey.400",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                }}
              >
                Services
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection("about")}
                sx={{
                  color: "grey.400",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                }}
              >
                About Us
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => scrollToSection("contact")}
                sx={{
                  color: "grey.400",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Auto Insurance
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Home Insurance
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Health Insurance
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Business Insurance
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Life Insurance
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                123 Insurance Street
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                New York, NY 10004
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Phone: +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.400" }}>
                Email: info@gurufinance.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "grey.700" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            © {currentYear} GuruFinance. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="#"
              variant="body2"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{ color: "grey.400", "&:hover": { color: "white" } }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
