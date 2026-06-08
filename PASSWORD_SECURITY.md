# 🔐 Password Security & Storage Guide

## Where Passwords are Stored

**Location:** `/Users/pushpaksamuelkumarpedapati/vscode/EDU_PLATFORM/backend/prisma/dev.db`

**Database:** SQLite  
**Table:** `User`  
**Column:** `passwordHash`

### Example Database Entry:
```
User Table:
─────────────────────────────────────────────────────────────────
│ id        │ email           │ passwordHash                    │
─────────────────────────────────────────────────────────────────
│ uuid-1234 │ student@test.com│ $2b$12$N9qo8uLOickgx2ZMRZoMyeI  │
│           │                 │ JZagQvFPap68pUm3BmWQaVEUDjJ... │
─────────────────────────────────────────────────────────────────
```

## 🔒 Password Hashing (Not Reversible!)

When you register with password `MyPassword@123`:

1. **Frontend**: Sends `MyPassword@123` over HTTPS (encrypted)
2. **Backend**: Receives the password
3. **Hashing**: Password is hashed using bcrypt (cost factor 12)
4. **Storage**: Only the HASH is stored: `$2b$12$xxxxx...xxxxx`
5. **Original Password**: NEVER stored, NEVER visible, IMPOSSIBLE to reverse! ✅

### Why bcrypt?
- Extremely slow to crack (takes seconds per attempt)
- Cannot be reversed to original password
- Industry standard for password security
- Cost factor 12 = maximum security for personal use

---

## 🛡️ Password Requirements

Your passwords MUST have:

✅ **Minimum 8 characters**  
✅ **At least 1 UPPERCASE letter** (A-Z)  
✅ **At least 1 NUMBER** (0-9)  
✅ **At least 1 SPECIAL CHARACTER** (!@#$%^&*(),.?":{}|<>)  

### Valid Password Examples:
- ✅ `MyPassword@123`
- ✅ `SecurePass!99`
- ✅ `Edu#Platform2024`
- ✅ `Student@School1`

### Invalid Passwords (Will be Rejected):
- ❌ `password123` (no uppercase, no special char)
- ❌ `PASSWORD!@#` (no number)
- ❌ `Pass1!` (too short, less than 8 chars)
- ❌ `12345678` (no letter, no special char)

---

## 🔄 Password Validation Flow

```
User Registration Form
        ↓
Frontend Validation (browser shows error if invalid)
        ↓
Backend Validation (Zod schema checks rules)
        ↓
If Valid: Hash password with bcrypt
        ↓
Store HASH in database
        ↓
User Created ✅
```

---

## 🔑 Login Process (Password Verification)

```
User enters: email + password
        ↓
Backend retrieves User record from database
        ↓
Compare: User's password → Hashed password in DB
        ↓
bcrypt.compare() does the magic:
- Takes entered password
- Hashes it the same way
- Compares to stored hash
- Returns true/false (match or not)
        ↓
If Match: Generate JWT token, login successful ✅
If No Match: Return "Invalid credentials" ❌
```

---

## 📊 Data Security Summary

| Item | Storage | Security |
|------|---------|----------|
| Password | Hashed in DB | bcrypt (non-reversible) ✅ |
| Email | Plain text in DB | Used as unique identifier |
| Access Token | In memory (frontend) | Short-lived (15 minutes) |
| Refresh Token | HTTPOnly cookie + hashed DB | Long-lived, revokable |
| Audit Logs | All in SQLite | Tracks who did what, when |

---

## 🚀 Try It Now!

**Test Password:** `MyPassword@123`

Go to: http://localhost:5173/register

1. Email: `student@test.com`
2. Password: `MyPassword@123`
3. Role: `STUDENT`
4. Click Register

The backend will validate the password, hash it, and store it securely! ✅

---

## ⚠️ Important Security Notes

1. **Never share your password** with anyone
2. **Never store passwords in plain text** (we use bcrypt)
3. **HTTPS only** in production (encrypts data in transit)
4. **Password reset**: Would involve sending secure link via email
5. **Forgot password**: Generate temporary token, not showing actual password

---

## 🗄️ All Tables in Your Database

```
EDU_PLATFORM Database (SQLite - dev.db)
├── User (accounts & authentication)
├── RefreshToken (login sessions)
├── AcademicYear (school years)
├── Course (subjects)
├── Class (course sections)
├── Enrollment (student enrollments)
├── Grade (student grades)
├── Announcement (teacher posts)
├── Material (course resources)
└── AuditLog (activity tracking)
```

All stored in: `backend/prisma/dev.db` (126KB file)
