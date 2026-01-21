import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function Unauthorized() {
  const loc = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const requiredRoles = (loc.state as { requiredRoles?: string[] } | null)?.requiredRoles;

  return (
    <Paper className="p-6 max-w-md">
      <h2 className="text-xl font-bold text-red-600">Access Denied</h2>
      <p className="mt-2">You don't have permission to view this page.</p>
      <p className="mt-2">
        Your role: <strong>{user?.role ?? 'Guest'}</strong>
      </p>
      {requiredRoles && (
        <p className="mt-2">
          Required role: <strong>{requiredRoles.join(', ')}</strong>
        </p>
      )}
      <div className="mt-4 flex gap-2">
        <Button variant="contained" onClick={() => navigate('/')}>Go to Dashboard</Button>
        <Button variant="outlined" onClick={() => navigate('/login')}>Login</Button>
      </div>
    </Paper>
  );
}
