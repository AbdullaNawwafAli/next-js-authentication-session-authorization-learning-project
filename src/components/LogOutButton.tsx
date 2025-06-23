'use client';

import { logout } from '@/components/LoginForm/actions';
import { Button } from '@mui/material';

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button type="submit" variant="contained" color="primary">
        Log Out
      </Button>
    </form>
  );
}