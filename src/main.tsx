import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { router } from './router/routes';
import './index.css';
import { getSession } from './services/authService';
import { loginSuccess } from './store/reducers/authReducer';

const sessionUser = getSession();
if (sessionUser) {
  store.dispatch(loginSuccess(sessionUser));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
