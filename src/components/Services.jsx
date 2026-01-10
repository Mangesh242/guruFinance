import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BusinessIcon from "@mui/icons-material/Business";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const services = [
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 48 }} />,
    title: "Auto Insurance",
    description:
      "Comprehensive coverage for your vehicle, protecting you from accidents, theft, and liability.",
  },
  {
    icon: <HomeIcon sx={{ fontSize: 48 }} />,
    title: "Home Insurance",
    description:
      "Protect your home and belongings with customized homeowner and renter insurance policies.",
  },
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 48 }} />,
    title: "Health Insurance",
    description:
      "Quality healthcare coverage for you and your family with flexible plans and networks.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 48 }} />,
    title: "Business Insurance",
    description:
      "Safeguard your business with liability, property, and workers compensation coverage.",
  },
  {
    icon: <FamilyRestroomIcon sx={{ fontSize: 48 }} />,
    title: "Life Insurance",
    description:
      "Secure your family's financial future with term life and whole life insurance options.",
  },
  {
    icon: <TravelExploreIcon sx={{ fontSize: 48 }} />,
    title: "Travel Insurance",
    description:
      "Travel with peace of mind with coverage for trip cancellations, medical emergencies, and more.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box id="services" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Our Insurance Services
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
        >
          We offer a comprehensive range of insurance products to protect you,
          your family, and your assets.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
            mt: 4,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: "center", pt: 4 }}>
                <Box sx={{ color: "primary.main", mb: 2 }}>{service.icon}</Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 3 }}>
                <Button
                  size="medium"
                  variant="outlined"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
