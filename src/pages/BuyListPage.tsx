import { useTheme } from "../hooks/useTheme";

function BuyListPage() {
  const { themeState } = useTheme();

  return (
    <>
      <div
        style={{
          color: themeState.ContentColor,
          backgroundColor: themeState.BackgroundColor,
        }}
        className="h-screen transition-colors"
      >
        <div className="w-full flex flex-col items-center">
          <header
            className=" transition-colors w-full text-center p-4 font-semibold text-3xl"
            style={{
              color: themeState.TitleColor,
              backgroundColor: themeState.HeaderColor,
            }}
          >
            Lista de la Compra
          </header>
          <main
            className="transition-colors"
            style={{
              color: themeState.ContentColor,
            }}
          >
            <p>buscador</p>
            <p>No hay productos en la lista</p>
            <span>
              {" "}
              <span style={{ color: themeState.PrimaryIconColor }}>
                icono 1
              </span>{" "}
              hola{" "}
              <span style={{ color: themeState.SecondaryIconColor }}>
                icono 2
              </span>
            </span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
            <span>hola</span>
          </main>
        </div>
      </div>
    </>
  );
}

export default BuyListPage;
