import React from 'react';
import { AdminLogin } from '../../../src/pages/admin/Login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin · Login',
  description: 'Admin login'
};

export default function Page() {
  return <AdminLogin />;
}
