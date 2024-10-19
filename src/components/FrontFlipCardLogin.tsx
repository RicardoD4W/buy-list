import { useTheme } from "../hooks/useTheme";
import { Oval } from "react-loader-spinner";
import { FrontFlipCardLoginProps } from "../types/props";

function FrontFlipCardLogin({
  handleFlip,
  handleSubmitForm,
  isLoading,
}: FrontFlipCardLoginProps) {
  const { themeState } = useTheme();

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

          {isLoading ? (
            <div
              className="flex items-center justify-center px-4 py-2 transition-opacity rounded-md hover:opacity-35 active:opacity-75"
              style={{
                backgroundColor: themeState.PrimaryIconColor,
                color: themeState.CardColor,
              }}
            >
              <Oval
                visible={true}
                height="auto"
                width="24"
                color={themeState.CardColor}
                secondaryColor={themeState.PrimaryIconColor}
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 transition-opacity rounded-md hover:opacity-35 active:opacity-75"
              style={{
                backgroundColor: themeState.PrimaryIconColor,
                color: themeState.CardColor,
              }}
            >
              Crear
            </button>
          )}
        </form>
        <p
          className="mt-4"
          style={{
            color: themeState.ContentColor,
          }}
        >
          ¿Ya tienes una cuenta?{" "}
          <button onClick={handleFlip} className="text-blue-500">
            Inicia sesión{" "}
          </button>
        </p>
      </div>
    </>
  );
}

export default FrontFlipCardLogin;
