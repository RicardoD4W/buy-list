import { useState } from "react";
import "./LoginPage.css";
import FrontFlipCardLogin from "../components/FrontFlipCardLogin";
import BackFlipCardLogin from "../components/BackFlipCardLogin";
import { useRedirect } from "../hooks/useRedirect";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login, register } from "../api/api";
import { useUserStore } from "../store/userStore";

const toastStyle = {
  pending: { backgroundColor: "#ffff8c", color: "black", fontWeight: "bold" },
  success: { backgroundColor: "#8cff8c", color: "black", fontWeight: "bold" },
  error: { backgroundColor: "#ff8c8c", color: "black", fontWeight: "bold" },
};

const LoginPage = () => {
  useRedirect();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmitFormLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const newUsername = formData.get("back_username") + "";
    const newPassword = formData.get("back_password") + "";

    setIsLoading(true);
    toast
      .promise(
        login(newUsername, newPassword).then((res) => {
          const { user, access_token, error } = res;

          if (error) {
            throw new Error(error);
          }

          setUser({ ...user, access_token });
          form.reset();
        }),
        {
          pending: {
            render: "Iniciando sesión...",
            className: "pending-toast",
            style: toastStyle.pending,
          },
          success: {
            render: "Sesión iniciada 😇",
            className: "success-toast",
            style: toastStyle.success,
          },
          error: {
            render: ({ data }: { data }) => {
              const errorMessage = data?.message || "Algo salió mal 😱";
              return `Error: ${errorMessage}`;
            },
            className: "error-toast",
            style: toastStyle.error,
          },
        },
        {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        }
      )
      .finally(() => setIsLoading(false));
  };

  const handleSubmitFormRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const username = formData.get("frontUsername") + "";
    const email = formData.get("frontEmail") + "";
    const password = formData.get("frontPassword") + "";
    const password_confirm = formData.get("front_password_confirm") + "";

    setIsLoading(true);

    toast
      .promise(
        register(username, email, password, password_confirm).then((res) => {
          const { user, access_token, errors } = res;

          if (errors) {
            throw new Error(
              Object.values(errors)
                .map((e) => e)
                .join("\n")
            );
          }

          setUser({ ...user, access_token });
          handleFlip();
          form.reset();
        }),
        {
          pending: {
            render: "Registrando usuario...",
            className: "pending-toast",
            style: toastStyle.pending,
          },
          success: {
            render: "Usuario registrado con éxito 🎉",
            className: "success-toast",
            style: toastStyle.success,
          },
          error: {
            render: ({ data }: { data }) => {
              const errorMessage = data?.message || "Error en el registro 😱";
              return `Error: ${errorMessage}`;
            },
            className: "error-toast",
            style: toastStyle.error,
          },
        },
        {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        }
      )
      .finally(() => setIsLoading(false));
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center min-h-80 ">
      <ToastContainer />
      <div className="w-full max-w-md px-3">
        <div className={"card" + (isFlipped ? " flipped" : "")}>
          <FrontFlipCardLogin
            isLoading={isLoading}
            handleSubmitForm={handleSubmitFormRegister}
            handleFlip={handleFlip}
          />
          <BackFlipCardLogin
            handleSubmitForm={handleSubmitFormLogin}
            isLoading={isLoading}
            handleFlip={handleFlip}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
