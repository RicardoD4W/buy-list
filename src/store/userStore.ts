import { create } from "zustand";

interface UserState {
  user: {
    name: string;
    email: string;
    id: number;
  };
}

export const useUserStore = create<UserState>()((/*set*/) => ({
  user: { name: "a", email: "a", id: 1 },
}));
