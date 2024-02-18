import { create } from "zustand";

interface UserState {
  user: {
    name: string;
    email: string;
    userId: number;
  };
  actualRoom: {
    roomName: string;
    roomUUID: `${string}-${string}-${string}-${string}-${string}`;
  };
  avaliblesRooms: [
    {
      roomName: string;
      roomUUID: `${string}-${string}-${string}-${string}-${string}`;
    }
  ];
}

export const useUserStore = create<UserState>()((/*set*/) => ({
  user: { name: "a", email: "a", userId: 1 },
  actualRoom: { roomName: "Familia", roomUUID: crypto.randomUUID() },
  avaliblesRooms: [{ roomName: "Familia", roomUUID: crypto.randomUUID() }],
}));
