// hook으로 toast를 간단하게 사용하기 위함.

import React from 'react';

import { ToastOptions } from './toast-types';
import useToastStore from './toast-store';

const useToast = () => {
  const { nofity } = useToastStore();
  const toast = (message: React.ReactNode, options: ToastOptions) => {
    return nofity(message, options);
  };

  return { toast };
};

export default useToast;