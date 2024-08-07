import { ReactNode } from 'react';
import { metaldata } from './metadata';

export const metadata = metaldata;

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
