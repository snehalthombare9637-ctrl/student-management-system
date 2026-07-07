# Student Management System

This is a simple **Student Management System** developed using **Node.js, Express.js, MySQL, EJS, HTML, and CSS**. The project performs complete CRUD (Create, Read, Update, Delete) operations and allows users to upload student photos while managing student records.

## Features

* Add new student details
* View all student records
* Update student information
* Delete student records
* Upload student photos
* Automatically replace old photos when updating
* Remove photos when a student record is deleted

## Technologies Used

* Node.js
* Express.js
* MySQL
* EJS
* HTML
* CSS
* Express File Upload

## Project Structure

text
student-management-system/
│
├── public/
├── views/
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## How to Run the Project

1. Clone this repository.
bash
git clone https://github.com/snehalthombare9637-ctrl/student-management-system.git

2. Open the project folder.
bash
cd student-management-system

3. Install the required packages.
bash
npm install

4. Create a MySQL database and the `student` table.

5. Update the database configuration in `server.js`.

6. Start the server.
bash
node server.js

or

bash
nodemon server.js

7. Open your browser and visit:

text
http://localhost:3000

## Learning Outcomes

Through this project, I learned:

* Building CRUD applications using Node.js and Express.js
* Connecting Node.js with MySQL
* Handling file uploads
* Using EJS templates for dynamic pages
* Managing student records with database operations

## Future Improvements

* User Authentication (Login & Signup)
* Search and Filter Students
* Pagination
* Form Validation
* Responsive UI
* Deploy the project online

## Author

**Snehal Thombare**

Thank you for visiting this project. Feel free to explore the code and share your feedback.
