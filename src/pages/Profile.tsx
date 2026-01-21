import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <h2 className="text-xl font-bold">Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}
