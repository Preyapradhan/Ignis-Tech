# Job Listing Web Application

This project is a full-stack web application that allows users to browse and filter job listings. The backend is built using Django REST Framework, the frontend is developed using ReactJS (or NextJS), and the job data is scraped using Scrapy. The job listings are stored in a MySQL database.

## Features

- **Backend API (Django REST Framework)**:
  - GET API: Fetches job listings from the MySQL database.
  - POST API: Allows inserting new job data into the MySQL database.
  
- **Scraping (Scrapy)**:
  - Scrapes job data from an external website (using Scrapy).
  - Supports pagination to fetch multiple pages of job listings.
  - Sends the scraped data via a POST request to the backend API for storage in the MySQL database.
  
- **Frontend (ReactJS / NextJS with Tailwind CSS)**:
  - Displays job listings in a user-friendly interface.
  - Fetches job data from the Django backend via a GET API request.
  - Optionally styled with Tailwind CSS to ensure a responsive, modern design.

## Technologies Used

- **Backend**: Django REST Framework, MySQL
- **Scraping**: Scrapy (Python)
- **Frontend**: ReactJS (or NextJS), Tailwind CSS (for styling)
- **Version Control**: Git and GitHub

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **npm**: npm should be installed with Node.js to manage frontend dependencies.
- **Python**: Python 3.x installed on your machine (for Scrapy and Django).
- **MySQL**: A MySQL server running on your local machine or a cloud service.

### Installation

#### 1. Clone the repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/Preyapradhan/job-listing-app.git
cd job-listing-app
```

Frontend Screenshots
Here are some screenshots of the frontend interface:

Homepage
![Screenshot 2024-12-22 142750](https://github.com/user-attachments/assets/937012e4-3da4-4880-b8ce-86391b3b258f)



Job Listing Page
![Screenshot 2024-12-22 142807](https://github.com/user-attachments/assets/9edfaf22-fb40-4e3d-8e3d-64e2d0317934)



Job Detail Page
![Screenshot 2024-12-22 152929](https://github.com/user-attachments/assets/c30335cd-5d91-40a1-a939-60224ce80e98)
