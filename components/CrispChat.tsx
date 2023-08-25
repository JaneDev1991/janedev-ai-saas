'use client';

import { Crisp } from 'crisp-sdk-web';
import { useEffect } from 'react';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('d246f6af-3e96-42d6-8209-ce457f10505e');
  }, []);

  return null;
};
