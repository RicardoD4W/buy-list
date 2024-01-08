import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      if (JSON.parse(localStorage.getItem("user")).data?.user?.id) {
        navigate("/lista");
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, []);
};
