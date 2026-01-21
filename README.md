# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # AccessHub — React + TypeScript (Vite)

    Small demo app showing a simple role-based auth flow (ADMIN / USER) using browser storage.

    Key points
    - React + TypeScript + Vite
    - React Router (layout-based routing)
    - Redux Toolkit for simple auth state
    - Material UI + Tailwind for lightweight UI
    - No backend — users and session are stored in localStorage (for demo only)

    Quick start

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

    Project structure (important files)
    - `src/services/authService.ts` — all localStorage interactions (sign up, login, session)
    - `src/store/reducers/authReducer.ts` — Redux slice for auth state
    - `src/pages/Signup.tsx` — signup UI (stores users in localStorage)
    - `src/pages/Login.tsx` — login UI (validates against stored users)
    - `src/router/ProtectedRoute.tsx` — route guard for authenticated + role checks
    - `src/pages/Unauthorized.tsx` — friendly message when access is denied
    - `src/pages/NotFound.tsx` — 404 fallback page

    Auth & session behavior
    - Signing up stores a user record in `localStorage` (key: `accesshub_users`). Passwords are stored plaintext for the demo — do NOT do this in production.
    - Logging in validates credentials against stored users and saves the session (key: `accesshub_session`).
    - On app load the session is restored and the Redux store is updated.
    - Logging out clears the session and Redux state.

    Notes & limitations
    - This is a demo: there is no server, no encryption, and passwords are stored in localStorage. It's intended only for local testing and learning.
    - The UI is intentionally minimal and uses MUI components with Tailwind for spacing.

    Usage
    - Open the app, go to Sign up, create an account (choose role User or Admin).
    - Return to Login, sign in with the same email/password.
    - Admin-only pages are protected and will show an Unauthorized page explaining required vs current role.

    Extending the demo
    - Add a users list page (Admin-only) showing stored users (`authService.listUsers()`).
    - Improve password handling and add server-side auth for production.

    Contact
    - This repository is a small demo; open issues or PRs if you want features or fixes.
