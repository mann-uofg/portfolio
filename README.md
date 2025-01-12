# Mann's Portfolio Showcase

This repository contains the source code for my personal portfolio website. The website showcases my projects, skills, and achievements, providing a platform for others to learn about my work.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mann-uofg/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `localhost:5173`.

   ## For preview, and exploring

1. Open your browser and navigate to `href:https://portfolio-dqnfeibey-manns-projects-205ec38b.vercel.app`.

## Features

- **Responsive Design**: Adapts to different screen sizes for mobile, tablet, and desktop users.
- **Project Showcase**: Highlights key projects with descriptions and links to GitHub repositories.
- **Skill Section**: Displays technical skills using interactive progress bars.
- **Contact Form**: Allows visitors to send messages directly via email.

## Tech Stack

- **Frontend**:
  - React
  - Tailwind CSS
  - Framer Motion (for animations)
- **Backend**:
  - EmailJS (for server-side handling of form submissions)

## File Structure

```plaintext
src/
├── components/
│   ├── Navbar.js          # Navigation bar
│   ├── Footer.js          # Footer section
│   ├── Projects.js        # Project showcase
│   ├── ContactForm.js     # Contact form
├── assets/
│   ├── images/            # Images used in the portfolio
│   ├── lottie/            # Lottie animations
├── styles/
│   ├── main.css           # Global CSS styles
├── App.js                 # Main React component
├── index.js               # Entry point of the application
```

## Usage

1. To build the production-ready website:
   ```bash
   npm run dev
   ```

2. Deploy the site using platforms like Netlify, Vercel, or GitHub Pages.

3. Update the `src/assets/images` and content in `src/components` to personalize your portfolio.

## Contributing

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push the changes: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
