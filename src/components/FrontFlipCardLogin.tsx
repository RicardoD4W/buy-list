import { register } from "../api/api";
import { useTheme } from "../hooks/useTheme";
import { useUserStore } from "../store/userStore";

function FrontFlipCardLogin({ handleFlip }: { handleFlip: () => void }) {
  const { themeState } = useTheme();
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const username = formData.get("frontUsername") + "";
    const email = formData.get("frontEmail") + "";
    const password = formData.get("frontPassword") + "";
    const password_confirm = formData.get("front_password_confirm") + "";

    await register(username, email, password, password_confirm)
      .then((res): void => {
        const { user, access_token } = res;
        setUser({ ...user, access_token });
        handleFlip();
        form.reset();
      })
      .catch((error): void => {
        console.log("error: ", error);
        alert(error);
      });
  };

  return (
    <>
      <div
        className="p-3 rounded-md front"
        style={{ backgroundColor: themeState.CardColor }}
      >
        <h2
          className="p-2 text-2xl font-semibold text-center "
          style={{ color: themeState.ContentColor }}
        >
          Crear una cuenta
        </h2>
        <form
          onSubmit={handleSubmitForm}
          name="crear"
          className="flex flex-col gap-5 mt-3"
        >
          <div>
            <label
              className="block text-sm font-medium"
              style={{ color: themeState.ContentColor }}
            >
              Nombre de usuario
              <input
                required
                placeholder="PeRt_34"
                type="text"
                name="frontUsername"
                className="w-full p-2 mt-1 border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-sm font-medium"
              style={{ color: themeState.ContentColor }}
            >
              Email
              <input
                required
                placeholder="pert_34@gmail.com"
                type="email"
                name="frontEmail"
                className="w-full p-2 mt-1 border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-sm font-medium"
              style={{ color: themeState.ContentColor }}
            >
              Contraseña
              <input
                required
                type="password"
                placeholder="******************"
                name="frontPassword"
                className="w-full p-2 mt-1 border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-sm font-medium"
              style={{ color: themeState.ContentColor }}
            >
              Repetir contraseña
              <input
                required
                type="password"
                placeholder="******************"
                name="front_password_confirm"
                className="w-full p-2 mt-1 border-gray-300 rounded-md"
              />
            </label>
          </div>
          <button
            type="submit"
            className="px-4 py-2 transition-opacity rounded-md hover:opacity-35 active:opacity-75"
            style={{
              backgroundColor: themeState.PrimaryIconColor,
              color: themeState.CardColor,
            }}
          >
            Crear
          </button>
        </form>
        <p
          className="mt-4"
          style={{
            color: themeState.ContentColor,
          }}
        >
          ¿Ya tienes una cuenta?{" "}
          <button onClick={handleFlip} className="text-blue-500">
            Inicia sesión
          </button>
        </p>
      </div>
    </>
  );
}

export default FrontFlipCardLogin;
