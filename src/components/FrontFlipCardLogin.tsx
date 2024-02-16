import { useTheme } from "../hooks/useTheme";

function FrontFlipCardLogin({ handleFlip }: { handleFlip: () => void }) {
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
        <form className="flex flex-col gap-5 mt-3">
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
                name="username"
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
                type="password"
                name="password"
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
                name="password"
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
