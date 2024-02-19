import { create } from "zustand";

interface UserState {
  user: {
    name: string;
    email: string;
    userId: number;
  };
  actualRoom: {
    roomName: string;
    roomUUID: `${string}-${string}-${string}-${string}-${string}` | undefined;
  };
  avaliblesRooms: [
    {
      roomName: string;
      roomUUID: `${string}-${string}-${string}-${string}-${string}` | undefined;
    }
  ];
}

export const useUserStore = create<UserState>()((/*set*/) => ({
  user: { name: "", email: "", userId: 0 },
  actualRoom: { roomName: "", roomUUID: undefined },
  avaliblesRooms: [{ roomName: "", roomUUID: undefined }],
}));
