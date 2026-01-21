import { Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Paper className="p-6 max-w-md">
      <h2 className="text-xl font-bold">Page not found</h2>
      <p className="mt-2">We couldn't find that page.</p>
      <div className="mt-4 flex gap-2">
        <Button variant="contained" onClick={() => navigate('/')}>Go to Dashboard</Button>
        <Button variant="outlined" onClick={() => navigate('/login')}>Login</Button>
      </div>
    </Paper>
  );
}
