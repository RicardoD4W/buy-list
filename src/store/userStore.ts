import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface UserState {
  user: {
    name: string;
    email: string;
    id: number;
    access_token: string;
    authorized: boolean;
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
  setUser: (user: {
    name: string;
    email: string;
    id: number;
    access_token: string;
    authorized: boolean;
  }) => void;
  setActualRoom: (actualRoom: {
    roomName: string;
    roomUUID: `${string}-${string}-${string}-${string}-${string}` | undefined;
  }) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: {
          name: "",
          email: "",
          id: 0,
          access_token: "",
          authorized: false,
        },
        actualRoom: { roomName: "", roomUUID: undefined },
        avaliblesRooms: [{ roomName: "", roomUUID: undefined }],

        setUser: (user) => set({ user }),
        setActualRoom: (actualRoom) => set({ actualRoom }),
        logout: () =>
          set({
            user: {
              name: "",
              email: "",
              id: 0,
              access_token: "",
              authorized: false,
            },
            actualRoom: { roomName: "", roomUUID: undefined },
            avaliblesRooms: [{ roomName: "", roomUUID: undefined }],
          }),
      }),
      { name: "user-cache" }
    )
  )
);
