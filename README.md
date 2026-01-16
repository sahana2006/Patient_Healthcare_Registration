# Patient_Healthcare_Registration

# Project Title

## Overview

## Actors & Roles

## Tech Stack

## Project Structure

```bash
patient-management-system/
│
├── backend/
│   ├── src/
│   │   ├── server.js                 # App entry point
│   │   ├── app.js                    # Express configuration
│   │   │
│   │   ├── config/
│   │   │   ├── db.js                 # MongoDB connection
│   │   │   └── env.js                # Environment variables
│   │   │
│   │   ├── views/                    # EJS templates (UI)
│   │   │   ├── layouts/
│   │   │   │   └── main.ejs          # Base layout
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   ├── login.ejs
│   │   │   │   └── register.ejs
│   │   │   │
│   │   │   ├── patient/
│   │   │   │   └── dashboard.ejs
│   │   │   │
│   │   │   ├── doctor/
│   │   │   │   └── dashboard.ejs
│   │   │   │
│   │   │   └── receptionist/
│   │   │       └── dashboard.ejs
│   │   │
│   │   ├── public/                   # Static assets
│   │   │   ├── css/
│   │   │   │   ├── main.css
│   │   │   │   └── dashboard.css
│   │   │   │
│   │   │   ├── js/
│   │   │   │   └── dashboard.js
│   │   │   │
│   │   │   └── images/
│   │   │
│   │   ├── modules/                  # Business logic (API)
│   │   │   ├── auth/
│   │   │   │   ├── auth.routes.js
│   │   │   │   ├── auth.controller.js
│   │   │   │   └── auth.service.js
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── user.model.js
│   │   │   │   └── user.service.js
│   │   │   │
│   │   │   ├── patients/
│   │   │   │   ├── patient.model.js
│   │   │   │   ├── patient.routes.js
│   │   │   │   ├── patient.controller.js
│   │   │   │   └── patient.service.js
│   │   │   │
│   │   │   ├── appointments/
│   │   │   │   ├── appointment.model.js
│   │   │   │   ├── appointment.routes.js
│   │   │   │   └── appointment.service.js
│   │   │   │
│   │   │   └── medical-records/
│   │   │       ├── record.model.js
│   │   │       ├── record.routes.js
│   │   │       └── record.service.js
│   │   │
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js    # Session/JWT verification
│   │   │   ├── role.middleware.js    # Role-based access
│   │   │   └── error.middleware.js   # Global errors
│   │   │
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   └── validators.js
│   │   │
│   │   └── routes.js                # Route aggregator
│   │
│   ├── tests/
│   │   ├── auth.test.js
│   │   └── patient.test.js
│   │
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── docs/
│   ├── use-case-diagram.png
│   ├── er-diagram.png
│   └── api-spec.md
│
├── .gitignore
└── README.md
```

## Installation

```bash
npm install express ejs mongoose dotenv
npm install express-session bcryptjs
npm install helmet morgan
npm install -D nodemon
```

```bash
mkdir src\config,src\views,src\public,src\modules,src\middlewares,src\utils
mkdir src\views\layouts,src\views\auth,src\views\patient,src\views\doctor,src\views\receptionist
mkdir src\public\css,src\public\js,src\public\images
mkdir src\modules\auth,src\modules\users,src\modules\patients,src\modules\appointments,src\modules\medical-records
```

## API Overview

## Security & RBAC

## Future Enhancements
