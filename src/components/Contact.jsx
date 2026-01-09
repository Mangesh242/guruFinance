import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      });
    }, 5000);
  };

  const serviceTypes = [
    'Auto Insurance',
    'Home Insurance',
    'Health Insurance',
    'Business Insurance',
    'Life Insurance',
    'Travel Insurance',
    'Other',
  ];

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
        >
          Ready to protect what matters most? Contact us today for a free consultation and personalized quote.
        </Typography>

        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'white' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                  Contact Information
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <PhoneIcon />
                    <Box>
                      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                        Phone
                      </Typography>
                      <Typography variant="body1">+1 (555) 123-4567</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <EmailIcon />
                    <Box>
                      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                        Email
                      </Typography>
                      <Typography variant="body1">info@gurufinance.com</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <LocationOnIcon />
                    <Box>
                      <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                        Address
                      </Typography>
                      <Typography variant="body1">
                        123 Insurance Street<br />
                        Financial District<br />
                        New York, NY 10004
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    <strong>Business Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} md={8}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                {submitted && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! We'll get back to you within 24 hours.
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        label="Service Type"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      >
                        {serviceTypes.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Tell us about your insurance needs..."
                      />
                    </Grid>
                    <Grid xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<SendIcon />}
                        sx={{ py: 1.5 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
