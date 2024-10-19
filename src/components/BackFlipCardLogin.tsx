import { Oval } from "react-loader-spinner";
import { useTheme } from "../hooks/useTheme";
import { BackFlipCardLoginProps } from "../types/props";

function BackFlipCardLogin({
  handleFlip,
  handleSubmitForm,
  isLoading,
}: BackFlipCardLoginProps) {
  const { themeState } = useTheme();

  return (
    <>
      <div
        className="p-3 rounded-md back"
        style={{ backgroundColor: themeState.CardColor }}
      >
        <h2
          className="p-2 text-2xl font-semibold text-center "
          style={{ color: themeState.ContentColor }}
        >
          Iniciar Sesión
        </h2>
        <form
          onSubmit={handleSubmitForm}
          name="iniciar-sesion"
          className="flex flex-col gap-5 mt-3"
        >
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
                name="back_username"
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
                placeholder="******************"
                type="password"
                name="back_password"
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
              Iniciar sesión
            </button>
          )}
        </form>
        <p
          className="mt-4"
          style={{
            color: themeState.ContentColor,
          }}
        >
          ¿Todavía no tienes una cuenta?{" "}
          <button onClick={handleFlip} className="text-blue-500">
            Créala
          </button>
        </p>
      </div>
    </>
  );
}

export default BackFlipCardLogin;
