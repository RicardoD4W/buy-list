import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

export const useRedirect = () => {
  const navigate = useNavigate();
  const { name, email, userId } = useUserStore((state) => state.user);
  const { roomUUID } = useUserStore((state) => state.actualRoom);

  useEffect(() => {
    if (!name || !email || !userId) return navigate("/login");
    if (!roomUUID) return navigate(`/rooms/${userId}`);
    if (name && email && userId) return navigate(`/home/${roomUUID}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, userId]);
};
