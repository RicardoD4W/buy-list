import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";

export const useRedirect = () => {
  const navigate = useNavigate();
  const { name, email, id } = useUserStore((state) => state.user);

  useEffect(() => {
    (!name || !email || !id) && navigate("/login");
    name && email && id && navigate(`/home/${id}`);
  }, [name, email, id]);
};
