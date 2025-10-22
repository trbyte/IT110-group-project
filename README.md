# IT110 Group Project — Group Portfolio and Currency Converter Web Application (Default: dev)

## Project Overview

A simple, static web project for IT110 built with HTML, CSS, and JavaScript. This README documents how to run the site locally, the project structure, and contribution guidelines for the team. The project includes a team portfolio website and a functional currency converter application.

## Project Components

### 1. Team Portfolio Website (`index.html`)
- Professional presentation of team members
- Project overview and features
- Contact information and team credentials

### 2. Currency Converter Application (`app.html`)
- Real-time currency conversion using public API
- Multi-currency support
- Responsive web interface
- Bidirectional conversion capability

## Technical Specifications

### Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Version Control**: Git with GitHub
- **Deployment**: GitHub Pages (branch: `dev`)
- **API Integration**: Public currency exchange rate API

### Key Features
- Real-time exchange rate data retrieval
- Responsive design for multiple device compatibility
- User-friendly interface with intuitive navigation
- Cross-browser compatibility

## Project Structure

```
IT110-group-project/
├── index.html
├── app.html
├── assets/
│   ├── alvarez.jpg
│   ├── berdon.jpg
│   ├── cabase.jpg
│   └── valeroso.png
├── src/
│   ├── app.css
│   ├── app.js
│   ├── portfolio.css
│   └── portfolio.js
└── README.md
```

## Local Development Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor or IDE (VS Code recommended)
- Git for version control

### Installation and Execution
1. Clone the repository:
   ```bash
   git clone https://github.com/trbyte/IT110-group-project.git
   ```
2. Navigate to project directory:
   ```bash
   cd IT110-group-project
   ```
3. Open the main application:
   - Double-click `index.html`, or
   - Right-click → Open With → preferred browser

## Production Deployment

### GitHub Pages
The application is deployed via GitHub Pages and accessible at:
`https://trbyte.github.io/IT110-group-project/`

### Deployment Configuration
1. In GitHub: Settings → Pages
2. Source: select branch `dev` (root)
3. Save

## Development Guidelines

### Branch Management (Default and final branch: `dev`)
- `dev`: Default branch; all finalized work is merged here
- Feature branches: `feature/<description>` created from `dev`
- Optional: if `main` exists, it is not used for releases; use `dev` as the default and final branch

### Contribution Workflow
1. Create feature branch from `dev`:
   ```bash
   git checkout -b feature/feature-name dev
   ```
2. Implement changes and test locally
3. Commit with descriptive messages:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push branch and create Pull Request to `dev`
5. Request code review from team members
6. Merge after approval

### Code Standards
- Semantic HTML structure
- Modular CSS organization
- Descriptive class naming conventions
- Commented JavaScript functions
- Responsive design principles
- Accessibility compliance (WCAG guidelines)

## Quality Assurance

### Testing Protocol
- Cross-browser compatibility testing
- Mobile responsiveness verification
- API integration validation
- User interface usability testing

### Performance Optimization
- Image compression and optimization
- CSS and JavaScript minification
- Cache management strategies
- Loading performance monitoring

## Team Collaboration

### Version Control Practices
- Regular commits with meaningful messages
- Branch protection rules (protect `dev`)
- Pull request templates
- Code review requirements

### Documentation Standards
- Comprehensive README documentation
- Code commenting for complex logic
- Change log maintenance
- Technical specification updates

## Troubleshooting

### Common Issues
- **Broken asset paths**: Verify relative path structure
- **CSS loading failures**: Check Network tab in developer tools
- **API connectivity**: Validate internet connection and CORS policies
- **Layout inconsistencies**: Test across multiple browsers and devices

### Debugging Procedures
1. Browser developer tools inspection
2. Console error logging
3. Network request monitoring
4. Responsive design testing

## License and Attribution

### Educational Use
This project is developed for educational purposes as part of IT110 - Introduction to Computing curriculum.

### Third-Party Resources
- Font Awesome icons (CDN)
- Public currency exchange API
- Open-source CSS frameworks and patterns

## Maintenance and Support

### Ongoing Development
- Regular security updates
- Browser compatibility maintenance
- Performance optimization
- Feature enhancements based on user feedback

### Technical Support
For technical issues or development inquiries, please reference the project documentation or contact the development team through the provided channels in the portfolio section.

## Team Members
- Lavieen Alvarez - Project Lead & Frontend Developer (App)
- Alexia Sheen Cabase - Backend Developer
- Jesriel Valeroso - Frontend Developer (Portfolio)
- Rheciel Ann Berdon - QA Tester & Documentation
```
