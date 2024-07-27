# TaskDisplayWebsite

Task Management System with Spring Boot and React
Introduction
Welcome to the Task Management System! This project is a comprehensive solution for managing tasks, developed using Spring Boot for the backend and React for the frontend. It features user authentication, dynamic routing, and a responsive UI powered by Bootstrap.

Features
User Authentication: Secure login and logout functionality.
Task Management: Create, read, update, and delete tasks.
Custom Validation: Error handling and validation for better user experience.
Dynamic Routing: Seamless navigation using React Router.
Responsive Design: Styled with Bootstrap for a mobile-friendly interface.
Technologies Used
Backend: Spring Boot, JPA
Frontend: React, Bootstrap
Testing: Postman for API testing
Components
Header Component
The Header component includes navigation links and the logout button, making it easy to navigate through the application.

Footer Component
The Footer component provides useful links and information at the bottom of every page.

Authentication
User authentication is implemented using custom JavaScript functions, ensuring secure access to the application. React's useState and useEffect hooks are used for managing authentication states.

Task Management
Tasks are managed using static data and dynamic state updates. The system allows users to add, edit, and delete tasks with custom validation to ensure data integrity.

Error Validation
Custom error messages are displayed for invalid inputs, enhancing the user experience. Validation is handled both on the client-side and the server-side.

Getting Started
Prerequisites
Java 11 or higher
Node.js and npm
Spring Boot
A code editor like VS Code
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/task-management-system.git
cd task-management-system
Backend Setup

Navigate to the backend directory and build the project
bash
Copy code
cd backend
./mvnw clean install
Run the Spring Boot application
bash
Copy code
./mvnw spring-boot:run
Frontend Setup

Navigate to the frontend directory
bash
Copy code
cd ../frontend
npm install
Start the React application
bash
Copy code
npm start
Usage
Login
Use the login page to authenticate.
Manage Tasks
Navigate through the application using the header links.
Create, edit, and delete tasks as needed.
Customization
Bootstrap Styling: Modify the Bootstrap classes in your React components to customize the look and feel.
API Endpoints: Update the API endpoints in the React app to match your backend setup.
Contributing
Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.

Acknowledgments
Inspired by various task management tools.
Special thanks to the developers of Spring Boot and React.
