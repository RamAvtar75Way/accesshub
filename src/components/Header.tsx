import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../store/reducers/authReducer';
import { useNavigate } from 'react-router-dom';
import { clearSession } from '../services/authService';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b">
      <h1 className="font-bold">AccessHub</h1>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(logout());
          clearSession();
          navigate('/login');
        }}
      >
        Logout
      </Button>
    </header>
  );
}
