# Freelancer Time and Invoice Manager

## Overview
Freelancer Time and Invoice Manager is a full-stack application designed to help freelancers **track project time, calculate earnings, and generate professional invoices automatically**. The system simplifies daily freelancing tasks, improves productivity, and ensures accurate financial records.

## Key Features
- **Time Tracking**: Start and stop timers for projects to automatically calculate working hours.
- **Invoice Generation**: Automatically generate PDF invoices based on hours worked and rates.
- **Project Management**: Browse, select, and manage multiple freelance projects.
- **Earnings Calculation**: Calculates total earnings based on hourly rates and work duration.
- **User-Friendly Interface**: Interactive dashboard for easy monitoring of projects and invoices.

## Tech Stack
- **Frontend**: React.js, CSS
- **Backend**: Spring Boot, Java
- **Database**: MongoDB
- **PDF Generation**: iText

## Getting Started

### Prerequisites
- Java JDK 11 or later
- Maven
- Node.js and npm
- MongoDB

### Backend Setup
1. Navigate to the backend folder:
   cd backend/demo
Install dependencies and run:
mvn clean install
mvn spring-boot:run
Backend will start at http://localhost:8080.

Frontend Setup
Navigate to the frontend folder:
cd frontend
Install dependencies:
npm install
Start the React app:

npm start
Frontend will run at http://localhost:3000.

Usage
Login with your credentials (or predefined login for demo).

Browse and select a project to start tracking time.

Stop tracking when work is completed.

Generate and download PDF invoices.

Future Enhancements
Advanced analytics and reporting for projects and earnings.

Workflow automation for recurring tasks.

Mobile app integration.

AI-based productivity and bid suggestions.
