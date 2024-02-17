import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

export const useRedirect = () => {
  const navigate = useNavigate();
  const { name, email, userId } = useUserStore((state) => state.user);
  const { roomUUID } = useUserStore((state) => state.room);

  useEffect(() => {
    (!name || !email || !userId) && navigate("/login");

    !roomUUID && navigate(`/rooms/${userId}`);

    name && email && userId && navigate(`/home/${roomUUID}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, userId]);
};
