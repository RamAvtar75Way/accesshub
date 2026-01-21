import { Button, Paper, TextField, Alert } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/reducers/authReducer';
import { loginWithStored } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    setError(null);
    const res = loginWithStored(email, password);
    if (!res.ok) {
      setError(res.error);
      return;
    }

    dispatch(loginSuccess(res.user));
    // Redirect based on role: admins -> users page, regular users -> dashboard
    if (res.user.role === 'ADMIN') navigate('/users');
    else navigate('/');
  };

  return (
    <Paper className="p-6 w-80 space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button fullWidth variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Button fullWidth variant="text" onClick={() => navigate('/signup')}>
        Create an account
      </Button>
    </Paper>
  );
}
