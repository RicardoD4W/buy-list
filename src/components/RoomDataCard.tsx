import { useTheme } from "../hooks/useTheme";
import { useUserStore } from "../store/userStore";
import { RoomDataCardProps } from "../types/props";
import { useNavigate } from "react-router-dom";

export default function RoomDataCard({ data }: { data: RoomDataCardProps }) {
  const navigate = useNavigate();

  const { themeState } = useTheme();
  const setActualRoom = useUserStore((state) => state.setActualRoom);

  const handleChooseActualRoom = () => {
    const room = { roomName: data.name, roomUUID: data.id };

    setActualRoom(room);
    navigate(`/home/${data.id}`);
  };

  return (
    <>
      <div
        onClick={handleChooseActualRoom}
        className="w-[90%] shadow-sm p-3 mx-3 overflow-auto text-center break-all rounded overflow-x cursor-pointer"
        style={{
          backgroundColor: themeState.CardColor,
          boxShadow: `0 0 5px ${themeState.ContentColor}`,
        }}
      >
        <p className="uppercase">{data.name}</p>
        <p className="text-sm">{data.description}</p>
      </div>
    </>
  );
}
