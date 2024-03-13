import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
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
  setUser: (user: Pick<UserState, "user">) => void;
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
      }),
      { name: "user-cache" }
    )
  )
);
