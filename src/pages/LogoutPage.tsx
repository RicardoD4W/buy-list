import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();
  const logout = useUserStore((state) => state.logout);

  useEffect(() => {
    logout();
    navigate("/login");
  }, []);

  return <></>;
};

export default LogoutPage;
