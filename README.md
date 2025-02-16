# Natalia Alpizar Meza's Portfolio

Welcome to my personal portfolio website built with React, TypeScript, and Vite. This project showcases my work, skills, and experience as a Frontend Engineer.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Infrastructure](#infrastructure)
- [CI/CD Pipeline](#cicd-pipeline)

## Introduction

This portfolio website is designed to provide an overview of my professional background, projects, and contact information. It is built using modern web development technologies to ensure a fast and responsive user experience.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **Framer Motion**: A library for animations and gestures in React.
- **Responsive Design**: Optimized for various screen sizes and devices.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nataliaalpizar/nataliaalpizar.com.git
   cd nataliaalpizar.com
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview the production build**:

   ```bash
   npm run preview
   ```

## Scripts

- `npm run dev`: Starts the development server with hot module replacement.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for linting errors.

## Folder Structure

```plaintext
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── sections
│   ├── styles
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── infra
│   └── states
│       └── nataliaalpizar.com
│           └── main.tf
├── .github
│   └── workflows
│       └── main.yml
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
└── tsconfig.json
```

## Infrastructure

The infrastructure for this project is managed using Terraform. The following AWS resources are configured in the main.tf file:

- **S3**: For storing and serving static assets.
- **Route 53**: For DNS management.
- **CloudFront**: For content delivery and caching.
- **ACM (AWS Certificate Manager)**: For managing SSL/TLS certificates.
- **Other AWS Resources**: Additional resources as needed for the project.

You can find the Terraform configuration in the main.tf file.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline is defined in the main.yml file located in the workflows directory. The pipeline includes the following steps:

- **Trigger**: The pipeline is triggered on push and pull request events to the main branch.
- **Checkout Repository**: Checks out the repository to the GitHub runner.
- **Set up Node.js**: Sets up the Node.js environment.
- **Install Dependencies**: Installs the project dependencies using npm install.
- **Run Tests**: Runs the test suite using npm test.
- **Build Project**: Builds the project for production using npm run build.
- **Deploy**: Deploys the built project to the specified hosting environment (e.g., AWS S3, CloudFront).

You can find the GitHub Actions configuration in the main.yml file.
