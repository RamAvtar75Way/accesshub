import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div>
      <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
      <p className="text-sm text-slate-600 mt-2">Role: <strong>{user.role}</strong></p>

      {user.role === 'ADMIN' ? (
        <Paper className="p-4 mt-4">
          <h3 className="font-semibold">Admin Console</h3>
          <p className="mt-2">Quick actions for administrators.</p>
          <div className="mt-3 flex gap-2">
            <Button variant="contained" onClick={() => navigate('/users')}>Manage Users</Button>
            <Button variant="outlined" onClick={() => navigate('/profile')}>View Profile</Button>
          </div>
        </Paper>
      ) : (
        <Paper className="p-4 mt-4">
          <h3 className="font-semibold">Your Dashboard</h3>
          <p className="mt-2">Access your profile and personal settings.</p>
          <div className="mt-3">
            <Button variant="contained" onClick={() => navigate('/profile')}>Go to Profile</Button>
          </div>
        </Paper>
      )}
    </div>
  );
}
