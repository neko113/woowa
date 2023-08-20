import React from 'react';

import { create } from 'zustand';

import { ToastState } from './toast-types';

interface ToastStore {
  toasts: ToastState;
  nofity: (message: React.ReactNode) => void;
  close: () => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  nofity: (message) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        {
          id: Date.now(),
          message,
        },
      ],
    })),
  close: () =>
    set((state) => ({
      toasts: state.toasts.slice(1),
    })),
}));

export default useToastStore;
