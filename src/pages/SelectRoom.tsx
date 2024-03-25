import { useEffect, useState } from "react";
import { getAllRoomsFromAnUser } from "../api/api";
import { useUserStore } from "../store/userStore";
import RoomDataCard from "../components/RoomDataCard";
import { FetchUserRoom } from "../types/api";
import { useTheme } from "../hooks/useTheme";

function SelectRoom() {
  const { themeState } = useTheme();
  const user = useUserStore((state) => state.user);
  const [userRooms, setUserRooms] = useState<FetchUserRoom>();

  useEffect(() => {
    getAllRoomsFromAnUser(user.access_token, user.id).then(setUserRooms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  return (
    <>
      <article
        style={{
          color: themeState.ContentColor,
        }}
        className="flex flex-col items-center justify-center pt-12"
      >
        <h2 className="text-3xl font-semibold">Elegir sala: </h2>
        <div className="flex flex-col items-center justify-center gap-8 mt-12">
          {userRooms?.user.map((userRomData) => (
            <RoomDataCard
              key={userRomData?.id}
              data={userRomData}
            ></RoomDataCard>
          ))}
        </div>
      </article>
    </>
  );
}

export default SelectRoom;
