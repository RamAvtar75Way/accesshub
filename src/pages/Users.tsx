import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store/store';

export default function Users() {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
      return;
    }
    if (user.role !== 'ADMIN') {
      navigate('/unauthorized', { state: { requiredRoles: ['ADMIN'] }, replace: true });
    }
  }, [user, navigate]);

  return (
    <div>
      <h2 className="text-xl font-bold">Users (Admin Only)</h2>
      <ul className="list-disc pl-5">
        <li>Alice</li>
        <li>Bob</li>
        <li>Charlie</li>
      </ul>
    </div>
  );
}
