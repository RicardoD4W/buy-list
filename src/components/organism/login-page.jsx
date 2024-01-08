import { useState } from "react";
import { useMainStore } from "../../stores/mainStore";
import { login } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useProtected";

const LoginPage = () => {
  useLogin();
  const navigate = useNavigate();

  const { setUserData, setLogin } = useMainStore();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [nombre, setNombre] = useState("");

  const handleChangeEmail = () => {
    setEmail(event?.target?.value);
  };
  const handleChangePass = () => {
    setPass(event?.target?.value);
  };
  const handleChangeNombre = () => {
    setNombre(event?.target?.value);
  };
  const handleFormLogin = async () => {
    event?.preventDefault();
    const respose = await login(email, pass, nombre).then((userData) => {
      if (userData.session == null || userData.user == null) return;
      setUserData(userData);
      setLogin();
      navigate("/lista");
    });
  };

  return (
    <div className="bg-green">
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-green">
            Iniciar sesión
          </h2>
          <form onSubmit={handleFormLogin}>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block mb-2 text-sm font-medium text-neutral-orange"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full px-3 py-2 border rounded-lg border-neutral-border"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={handleChangeNombre}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-neutral-orange"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg border-neutral-border"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-neutral-orange"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg border-neutral-border"
                placeholder="Ingrese su contraseña"
                value={pass}
                onChange={handleChangePass}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-center text-white transition-colors duration-300 rounded-lg bg-green hover:bg-greenDark "
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
