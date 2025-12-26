# MERN Project (JavaScript)

## Structure
- **frontend**: Unified React application (Vite + React + Tailwind)
  - `/`: Client facing pages
  - `/admin`: Admin dashboard
- **server**: Backend API (Node + Express + MongoDB)

## Setup
1. Install dependencies:
   ```bash
   cd frontend && npm install
   cd ../server && npm install
   ```

2. Configure Environment Variables:
   - Create `.env` in `server` with:
     ```
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/mern-project
     ```

3. Run:
   - Frontend: `cd frontend && npm run dev`
   - Server: `cd server && npm run dev`
