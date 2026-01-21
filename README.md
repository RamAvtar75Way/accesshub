# AccessHub

AccessHub is a small demo application that demonstrates a role-based authentication flow (ADMIN / USER) using React and TypeScript. It is intentionally minimal and uses browser storage to simulate user signup, login, and session persistence so you can try the flow locally without a backend.

## Tech stack

- React 19 + TypeScript
- Vite (dev server + build)
- React Router (layout-based routing)
- Redux Toolkit (auth state)
- Material UI (components)
- Tailwind CSS (layout / spacing)

## Features

- Signup (local cache): collect name, email, password, and role; prevents duplicate emails
- Login using stored users (validates email/password)
- Session persistence: restores session from localStorage on app load
- Role-based protection: admin-only routes with friendly Unauthorized page
- Services layer: `src/services/authService.ts` encapsulates storage logic
- Minimal UI with Material UI and Tailwind for clarity

## Folder structure (important files)

```
accesshub/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  └─ Header.tsx
│  ├─ layouts/
│  │  ├─ AppLayout.tsx
│  │  └─ AuthLayout.tsx
│  ├─ pages/
│  │  ├─ Dashboard.tsx
│  │  ├─ Login.tsx
│  │  ├─ Signup.tsx
│  │  ├─ Profile.tsx
│  │  ├─ Users.tsx
│  │  ├─ Unauthorized.tsx
│  │  └─ NotFound.tsx
│  ├─ router/
│  │  ├─ routes.tsx
│  │  └─ ProtectedRoute.tsx
│  ├─ services/
│  │  ├─ api.ts
│  │  └─ authService.ts
│  ├─ store/
│  │  ├─ store.ts
│  │  └─ reducers/
│  │     └─ authReducer.ts
│  ├─ types.d.ts
│  └─ main.tsx
```

## Installation & setup

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

## Usage

- Open the app (Vite will log the URL, usually `http://localhost:5173`)
- Go to **Signup** and create a new account (choose role `USER` or `ADMIN`)
- Return to **Login** and sign in with the same email and password
- Admin users are redirected to the Admin `Users` page; regular users land on the Dashboard

## Storage keys

- `accesshub_users` — list of registered users (for demo purposes)
- `accesshub_session` — currently logged-in user session

## Notes & limitations

- This project is a demo: passwords are stored in plaintext in `localStorage` for simplicity. Do not use this pattern in production.
- No backend or encryption is provided. The services layer is intentionally simple and synchronous.

## Next steps / suggestions

- Add an admin-only users list page that reads `authService.listUsers()` (already suggested in README)
- Replace localStorage with a backend and secure auth flows for production
- Add form validation and nicer error handling

If you'd like, I can add example test accounts, hide admin links from non-admin users, or wire an admin users-list page next.
