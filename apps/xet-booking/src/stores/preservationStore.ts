import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
type PreservationStore = {
  name: string;
  phoneNumber: string;

  actions: {
    setName: (name: string) => void;
    setPhoneNumber: (phoneNumber: string) => void;
  };
};

const defaultState = {
  name: '',
  phoneNumber: '',
} as const;

export const preservationStore = create<PreservationStore>()(
  persist(
    (set, _) => ({
      ...defaultState,
      actions: {
        setName: (name) => set({ name }),
        setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
      },
    }),
    {
      name: 'preservation-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
