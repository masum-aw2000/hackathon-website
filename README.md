# Hackathon Website (WIP)
*Last updated: 1/7/2025*

This repository contains the frontend implementation of a mock website for a 3-week in-person hackathon located in New Brunswick, NJ, hosted by Rutgers NB. The website is built using React and styled with Tailwind CSS.

## Features
- **Landing Page**: Includes details about the hackathon, categories, and call-to-action buttons.
- **Schedule Page**: Displays the event schedule for each weekend with collapsible session details.
- **Register Page**: Allows users to register as individuals or teams.
- **User & Team Directory**: Shows registered user profiles and team information.
- **Error and Success Pages**: Provides feedback for actions like registration.

## Technologies Used
- **React**: Component-based UI development.
- **React Router**: For navigation between pages.
- **Tailwind CSS**: For styling and responsiveness.
- **Vite**: Fast development build tool.

## File Structure
```
src/
├── components/
│   ├── common/          # Shared components (Navbar, Footer, etc.)
│   ├── views/           # Page-specific components
│   │   ├── landing/
│   │   ├── schedule/
│   │   ├── register/
│   │   ├── directory/
│   │   ├── user/
│   │   └── success/     # Success/Error pages
│   └── routes/          # Route components rendering views
├── assets/              # Static assets (images, logos, etc.)
├── styles/
│   └── input.css        # Tailwind directives
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.html           # HTML template
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd hackathon-website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Tailwind CSS:
   - Ensure `tailwind.config.js` and `postcss.config.js` exist in the root.
   - Add the following Tailwind directives to `src/styles/input.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

### Running the Project
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

### Building for Production
To create an optimized production build:
```bash
npm run build
```

The output will be in the `dist/` folder.

## How to Contribute
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## Additional Features to Add
Below are some potential features and enhancements to be added in future iterations:

### Firebase Setup
- **User Authentication**: Enable users to log in, manage profiles, and secure their registration.
- **Database Integration**: Use Firebase Firestore to store user and team data, event schedules, and other dynamic content.
- **Real-time Updates**: Implement real-time database listeners for live schedule updates.

### Features to Turn Into Issues
- **Team Directory**:
  - Add search and filtering capabilities (e.g., by team name, user name, or category).
  - Allow users to view detailed team profiles.
- **Registration Form Enhancements**:
  - Add form validation for better user experience.
  - Support multi-step registration for larger teams.
- **Admin Dashboard**:
  - Create an admin-only page for managing event schedules and reviewing registrations.
- **Mobile Optimization**:
  - Ensure full responsiveness for all components.
- **Dark Mode**:
  - Add a toggle for light and dark themes.

### Documentation Improvements
- Add detailed setup instructions for Firebase integration.
- Provide examples for customizing Tailwind classes.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Author
- **Name**: Ma'Sum Abdul-Wadud
- **Role**: Developer and Designer
- **Email**: [masum.aw2000@gmail.com](mailto:masum.aw2000@gmail.com)
- **LinkedIn**: [linkedin.com/in/masum-abdulwadud/](https://www.linkedin.com/in/masum-abdulwadud/)
- **GitHub**: [github.com/masum-aw2000](https://github.com/masum-aw2000)
