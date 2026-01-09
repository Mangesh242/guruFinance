import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

const About = () => {
  const features = [
    '20+ Years of Experience',
    'Licensed & Certified',
    '5000+ Happy Clients',
    '24/7 Customer Support',
    'Competitive Rates',
    'Fast Claim Processing',
  ];

  return (
    <Box id="about" sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              About GuruFinance
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
              With over two decades of experience in the insurance industry, GuruFinance has been a trusted partner for thousands of families and businesses. We pride ourselves on providing personalized service and comprehensive coverage options.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
              Our team of dedicated insurance professionals is committed to understanding your unique needs and finding the perfect coverage solutions. We work with leading insurance providers to ensure you get the best rates and coverage.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 4 }}>
              {features.map((feature, index) => (
                <Chip
                  key={index}
                  icon={<CheckCircleIcon />}
                  label={feature}
                  color="primary"
                  sx={{ px: 1, py: 2.5, fontSize: '0.95rem' }}
                />
              ))}
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Card sx={{ p: 3 }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'primary.main',
                      fontSize: '3rem',
                    }}
                  >
                    GF
                  </Avatar>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Expert Insurance Agent
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Certified Insurance Professional
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: 'gold', fontSize: 28 }} />
                    ))}
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                  "I believe in building lasting relationships with my clients based on trust, integrity, and exceptional service. Your peace of mind is my priority."
                </Typography>

                <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.light', borderRadius: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                    Professional Credentials:
                  </Typography>
                  <Typography variant="body2">
                    • Licensed Insurance Agent<br />
                    • Certified Financial Planner<br />
                    • Member, National Association of Insurance Agents
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
