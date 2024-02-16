import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

export const useRedirect = () => {
  const navigate = useNavigate();
  const { name, email, userId } = useUserStore((state) => state.user);

  useEffect(() => {
    (!name || !email || !userId) && navigate("/login");
    name && email && userId && navigate(`/home/${userId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, userId]);
};
