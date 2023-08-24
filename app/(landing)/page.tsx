'use client';

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const { user } = useUser();
  const router = useRouter();
  if (user?.id) return router.push('/dashboard');
  return (
    <div>
      LandingPage (Unprotected)
      <div>
        <Link href={'/sign-in'}>
          <Button>Login</Button>
        </Link>
        <Link href={'/sign-up'}>
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
