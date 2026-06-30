# Event Feedback System

A full-stack web application for collecting, managing, and analyzing event feedback.

Users can browse events, submit feedback with ratings/comments, and view all submitted reviews in a clean dashboard interface.

---

## Features

### Level 1: Frontend Pages
- Homepage with project introduction
- Navigation bar
- Events page with sample event listings
- Feedback submission form

### Level 2: Backend Setup
- Express server setup
- Welcome route
- API route to receive feedback
- API route to display all submitted feedback

### Level 3: Database Integration
- MongoDB setup
- Feedback schema/model creation
- Store submitted feedback in database
- Retrieve feedback from database

### Level 4: Frontend + Backend Integration
- Connected React frontend with backend APIs
- Success message after feedback submission
- Display feedback dynamically in reviews page
- Basic form validation

---

## Tech Stack

### Frontend
- React
- HTML
- CSS
- JavaScript
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## Project Structure


event-feedback-system/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── App.css
│
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
```

---

## Installation & Setup

### Clone Repository


git clone https://github.com/Arushi240803/Event-Feedback-Management-System-.git
cd event-feedback-system
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
node server.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## MongoDB Setup

Make sure MongoDB is installed and running locally.

Database connection used:

```bash
mongodb://127.0.0.1:27017/eventFeedbackDB
```

---

## API Routes

### Welcome Route

```bash
GET /
```

Response:

```json
Welcome to Event Feedback Backend API
```

---

### Get All Feedback

```bash
GET /api/feedback
```

---

### Submit Feedback

```bash
POST /api/feedback
```

Sample Request Body:

```json
{
  "name": "Arushi",
  "email": "arushi@gmail.com",
  "eventName": "AI Workshop",
  "rating": 5,
  "comment": "Excellent event!"
}
```

---

## Screenshots

### Home Page
<img width="1897" height="812" alt="image" src="https://github.com/user-attachments/assets/b04291ff-d88b-4cbb-9da2-6cea206b765b" />


### Events Page
<img width="1907" height="627" alt="image" src="https://github.com/user-attachments/assets/71cbd76a-a9b3-41ef-8d73-7bbc5df2b165" />


### Feedback Page
<img width="1897" height="812" alt="image" src="https://github.com/user-attachments/assets/dd688d66-98e4-4e84-844a-9a7ea0fd0122" />


### Reviews Page
<img width="1905" height="907" alt="image" src="https://github.com/user-attachments/assets/09e3776f-a8ab-4efe-8685-eb20650a76d8" />


---

## Future Improvements

- Authentication system
- Admin dashboard
- Event creation system
- Search & filters
- Analytics dashboard
- Charts for feedback insights

---

## Author

**Arushi Naskar**
