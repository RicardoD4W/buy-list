import { useEffect, useState } from "react";
import { getAllRoomsFromAnUser } from "../api/api";
import { useUserStore } from "../store/userStore";
import RoomDataCard from "../components/RoomDataCard";
import { FetchUserRoom } from "../types/api";
import { useTheme } from "../hooks/useTheme";
import { MagnifyingGlass } from "react-loader-spinner";

function SelectRoomPage() {
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
        <div className="flex flex-col items-center justify-center gap-8 ">
          {userRooms && userRooms.user && userRooms.user.length > 0 ? (
            userRooms?.user.map((userRomData) => (
              <>
                <RoomDataCard
                  key={userRomData.id}
                  data={userRomData}
                ></RoomDataCard>
              </>
            ))
          ) : (
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          )}
        </div>
      </article>
    </>
  );
}

export default SelectRoomPage;
