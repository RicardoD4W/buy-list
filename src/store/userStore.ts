import { create } from "zustand";

interface UserState {
  user: {
    userData: string;
  };
}

export const useUserStore = create<UserState>()((/*set*/) => ({
  user: { userData: "todo" },
}));
