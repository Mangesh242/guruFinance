# GuruFinance - Insurance Agent Website

A modern, responsive insurance agent website built with React and Material UI. This website provides a professional online presence for insurance agents, showcasing services, agent information, and a contact form for potential clients.

## Features

- **Responsive Design**: Fully optimized for both mobile and desktop devices
- **Modern UI**: Built with Material UI components for a clean, professional look
- **Service Showcase**: Display various insurance services (Auto, Home, Health, Business, Life, Travel)
- **About Section**: Highlight agent credentials and experience
- **Contact Form**: Interactive form for client inquiries with service type selection
- **Smooth Navigation**: Smooth scrolling between sections
- **Mobile Menu**: Responsive hamburger menu for mobile devices

## Technology Stack

- **React 19.2**: Modern React with hooks
- **Material UI 7.3**: Comprehensive UI component library
- **Vite**: Fast build tool and development server
- **Emotion**: CSS-in-JS styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mangesh242/guruFinance.git
cd guruFinance
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
guruFinance/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header with mobile menu
│   │   ├── Hero.jsx         # Hero/landing section
│   │   ├── Services.jsx     # Insurance services showcase
│   │   ├── About.jsx        # About agent section
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer with links and info
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── App.css              # App styles
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Updating Content

1. **Services**: Edit the `services` array in `src/components/Services.jsx`
2. **Contact Information**: Update phone, email, and address in `src/components/Hero.jsx`, `src/components/Contact.jsx`, and `src/components/Footer.jsx`
3. **About Section**: Modify content in `src/components/About.jsx`
4. **Theme Colors**: Adjust the theme in `src/App.jsx`

### Styling

The application uses Material UI's theming system. You can customize:
- Primary/secondary colors in `src/App.jsx`
- Component-specific styles using the `sx` prop
- Global styles in `src/index.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@gurufinance.com
- Phone: +1 (555) 123-4567
