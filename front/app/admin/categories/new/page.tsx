"use client";
import React from 'react';
import { CategoryForm as AdminCategoryForm } from '../../../../src/app-pages/admin/CategoryForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin · New Category',
  description: 'Create a new category'
};

export default function Page() {
  return <AdminCategoryForm />;
}
