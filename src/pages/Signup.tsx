import { Paper, TextField, Button, MenuItem, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/authService';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'ADMIN' | 'USER'>('USER');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCreate = () => {
    setError(null);
    setSuccess(null);
    if (!name || !email || !password) {
      setError('Please fill all fields');
      return;
    }

    const res = signUp({ name, email, password, role });
    if (!res.ok) {
      setError(res.error);
      return;
    }

    setSuccess('Account created — please log in');
    setTimeout(() => navigate('/login'), 900);
  };

  return (
    <Paper className="p-6 w-80 space-y-4">
      <h2 className="text-xl font-bold">Signup</h2>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <TextField select fullWidth label="Role" value={role} onChange={(e) => setRole(e.target.value as 'ADMIN' | 'USER')}>
        <MenuItem value="USER">User</MenuItem>
        <MenuItem value="ADMIN">Admin</MenuItem>
      </TextField>
      <Button fullWidth variant="contained" onClick={handleCreate}>
        Create Account
      </Button>
      <Button fullWidth variant="text" onClick={() => navigate('/login')}>
        Already have an account? Login
      </Button>
    </Paper>
  );
}
