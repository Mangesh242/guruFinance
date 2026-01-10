import React from "react";
import { Box, Container, Typography, Paper, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Privacy Policy
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, color: "text.secondary" }}
          >
            <strong>Last updated:</strong> January 10, 2026
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            At Guru Finance, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our insurance
            services.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Information We Collect
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 600, mt: 3 }}
          >
            Personal Information
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect personally identifiable information that you provide
            to us, including:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              Name, address, email address, and phone number
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Date of birth and Social Security number (for insurance quotes)
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Financial information for underwriting purposes
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Vehicle information (for auto insurance)
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Property information (for home insurance)
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Health information (for health and life insurance)
            </Typography>
          </Box>

          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 600, mt: 3 }}
          >
            Automatically Collected Information
          </Typography>
          <Typography variant="body1" paragraph>
            We automatically collect certain information when you visit our
            website:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              IP address and browser information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Pages visited and time spent on our site
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Referring website information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Device and operating system information
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            How We Use Your Information
          </Typography>

          <Typography variant="body1" paragraph>
            We use the information we collect for the following purposes:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              Provide insurance quotes and policy information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Process insurance applications and claims
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Communicate with you about your policies and services
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Improve our website and customer service
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Comply with legal and regulatory requirements
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Prevent fraud and ensure security
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Information Sharing and Disclosure
          </Typography>

          <Typography variant="body1" paragraph>
            We may share your personal information in the following
            circumstances:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              <strong>With Insurance Companies:</strong> To obtain quotes and
              process applications
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>With Service Providers:</strong> Third parties who assist
              us in operating our business
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>For Legal Compliance:</strong> When required by law or to
              protect our rights
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>With Your Consent:</strong> When you explicitly authorize
              us to share information
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Data Security
          </Typography>

          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. These measures
            include:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              Encryption of sensitive data in transit and at rest
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Regular security assessments and updates
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Access controls and employee training
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Secure data storage and backup procedures
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Your Rights and Choices
          </Typography>

          <Typography variant="body1" paragraph>
            You have certain rights regarding your personal information:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Typography component="li" variant="body1" paragraph>
              <strong>Access:</strong> Request access to your personal
              information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>Correction:</strong> Request correction of inaccurate
              information
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>Deletion:</strong> Request deletion of your information
              (subject to legal requirements)
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              <strong>Opt-out:</strong> Unsubscribe from marketing
              communications
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Cookies and Tracking Technologies
          </Typography>

          <Typography variant="body1" paragraph>
            Our website uses cookies and similar tracking technologies to
            enhance your browsing experience and analyze website usage. You can
            control cookie preferences through your browser settings, though
            this may affect website functionality.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Children's Privacy
          </Typography>

          <Typography variant="body1" paragraph>
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children under
            18. If we become aware that we have collected such information, we
            will take steps to delete it promptly.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Changes to This Privacy Policy
          </Typography>

          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or applicable laws. We will notify you of
            any material changes by posting the updated policy on our website
            and updating the "Last updated" date.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Contact Us
          </Typography>

          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us:
          </Typography>

          <Box sx={{ mt: 3, p: 3, bgcolor: "grey.50", borderRadius: 2 }}>
            <Typography variant="body1" paragraph>
              <strong>Guru Finance</strong>
              <br />
              123 Insurance Street
              <br />
              Financial District
              <br />
              New York, NY 10004
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email:</strong> privacy@gurufinance.com
              <br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{ mt: 4, color: "text.secondary", fontStyle: "italic" }}
          >
            This privacy policy is designed to help you understand our
            commitment to protecting your privacy while providing you with
            excellent insurance services.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
