import { omit } from '@dry-typescript/util-helpers';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { OccasionType } from '../constants/OccasionType';

type PreservationStore = {
  name: string;
  phoneNumber: string;
  preservedTime: Date | undefined;
  guestAmount: number;
  occasionType: OccasionType | undefined;

  actions: {
    setName: (name: string) => void;
    setPhoneNumber: (phoneNumber: string) => void;
    setPreservedTime: (preservedTime: Date) => void;
    setGuestAmount: (guestAmount: number) => void;
    setOccasionType: (occasionType: OccasionType) => void;
  };
};

const defaultState = {
  name: '',
  phoneNumber: '',
  preservedTime: undefined,
  guestAmount: 1,
  occasionType: undefined,
} as const;

export const usePreservationStore = create<PreservationStore>()(
  persist(
    (set, _) => ({
      ...defaultState,
      actions: {
        setName: (name) => set({ name }),
        setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
        setPreservedTime: (preservedTime) => set({ preservedTime }),
        setGuestAmount: (guestAmount) => set({ guestAmount }),
        setOccasionType: (occasionType) => set({ occasionType }),
      },
    }),
    {
      name: 'preservation-store',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => {
        const keysToOmit = ['actions'] as Array<keyof typeof state>;
        return omit(state, keysToOmit);
      },
    },
  ),
);
