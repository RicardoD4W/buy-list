import { create } from "zustand";

interface UserState {
  user: {
    name: string;
    email: string;
    userId: number;
  };
  room: {
    roomName: string;
    roomUUID: string;
  };
}

export const useUserStore = create<UserState>()((/*set*/) => ({
  user: { name: "a", email: "a", userId: 1 },
  room: { roomName: "Familia", roomUUID: crypto.randomUUID() },
}));
