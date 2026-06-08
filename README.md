# EDU Platform - Secure Educational Institution Management System

## Setup Instructions

### Prerequisites
- Node.js 20+
- PostgreSQL 14+
- npm or yarn

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Setup Database

```bash
# Create PostgreSQL database
createdb edu_platform

# Or using psql
psql -U postgres
CREATE DATABASE edu_platform;
\q
```

### 3. Configure Environment

Backend and frontend `.env` files are already created. Update `DATABASE_URL` in `backend/.env` if your PostgreSQL credentials differ.

### 4. Run Database Migrations

```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start Development Servers

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 6. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:4000
- Health check: http://localhost:4000/health

## API Endpoints

### Authentication
- POST `/api/v1/auth/register` - Register new user
- POST `/api/v1/auth/login` - Login
- POST `/api/v1/auth/refresh` - Refresh access token
- POST `/api/v1/auth/logout` - Logout
- GET `/api/v1/csrf` - Get CSRF token

### Users (Admin only)
- GET `/api/v1/users` - List users
- PATCH `/api/v1/users/:userId/role` - Update user role
- PATCH `/api/v1/users/:userId/active` - Activate/deactivate user

### Academic Years (Admin only)
- GET `/api/v1/academic-years` - List academic years
- POST `/api/v1/academic-years` - Create academic year
- POST `/api/v1/academic-years/:yearId/activate` - Activate year
- POST `/api/v1/academic-years/rollover` - Rollover to new year

### Courses
- GET `/api/v1/courses` - List courses (all authenticated)
- POST `/api/v1/courses` - Create course (Admin)

### Classes
- GET `/api/v1/classes` - List classes (all authenticated)
- POST `/api/v1/classes` - Create class (Admin)

### Enrollments
- POST `/api/v1/enrollments` - Enroll student (Admin)
- GET `/api/v1/enrollments/student/:studentId` - Get student enrollments

### Grades
- POST `/api/v1/grades` - Create grade (Admin/Teacher)
- GET `/api/v1/grades/student/:studentId` - Get student grades

### Announcements
- GET `/api/v1/announcements` - List announcements (all authenticated)
- POST `/api/v1/announcements` - Create announcement (Admin/Teacher)

### Materials
- GET `/api/v1/materials` - List materials (all authenticated)
- POST `/api/v1/materials` - Upload material (Admin/Teacher)

## Security Features

✅ JWT access + refresh tokens with rotation
✅ CSRF protection for state-changing operations
✅ Rate limiting (300 req/15min)
✅ Input validation with Zod
✅ Password hashing with bcrypt (cost factor 12)
✅ Role-based access control (RBAC)
✅ Audit logging for critical operations
✅ Secure HTTP headers (Helmet)
✅ SQL injection prevention (Prisma ORM)
✅ XSS protection via validation
✅ httpOnly cookies for refresh tokens

## Architecture

- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Frontend**: React + TypeScript + Vite
- **Auth**: JWT-based with refresh token rotation
- **Security**: OWASP Top 10 compliant

## Testing the API

```bash
# Register a user
curl -X POST http://localhost:4000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@test.com","password":"password123","role":"ADMIN"}'

# Login
curl -X POST http://localhost:4000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@test.com","password":"password123"}'
```
