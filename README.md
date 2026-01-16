# Patient_Healthcare_Registration
# Project Title
## Overview
## Actors & Roles
## Tech Stack
## Project Structure
patient-management-system/
│
├── frontend/ # Client-side application
│ ├── public/
│ │ ├── index.html # Landing & authentication
│ │ ├── patient.html # Patient dashboard
│ │ ├── doctor.html # Doctor dashboard
│ │ └── receptionist.html # Receptionist dashboard
│ │
│ ├── assets/
│ │ ├── css/ # Stylesheets
│ │ ├── js/ # Client-side logic
│ │ └── images/ # Static assets
│ │
│ └── README.md # Frontend documentation
│
├── backend/ # Server-side application
│ ├── src/
│ │ ├── app.js # Express app configuration
│ │ ├── server.js # Server entry point
│ │ │
│ │ ├── config/ # Database & env configuration
│ │ ├── modules/ # Feature-based modules
│ │ │ ├── auth/
│ │ │ ├── users/
│ │ │ ├── patients/
│ │ │ ├── appointments/
│ │ │ └── medical-records/
│ │ │
│ │ ├── middlewares/ # Auth, RBAC, error handling
│ │ ├── utils/ # Helpers & validators
│ │ └── routes.js # Central route loader
│ │
│ ├── tests/ # API tests
│ ├── package.json
│ └── README.md # Backend documentation
│
├── docs/ # Diagrams & API documentation
├── .gitignore
└── README.md # Root documentation
## Installation
## API Overview
## Security & RBAC
## Future Enhancements