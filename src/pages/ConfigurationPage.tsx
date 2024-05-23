import { usePreferenceStore } from "../store/preferencesStore";

function ConfigurationPage() {
  const { setAutomaticEmojis, setDrawerDirection, setColorTheme } =
    usePreferenceStore();

  return (
    <>
      <article className="flex items-center justify-center h-screen">
        <div className="bg-white"></div>
      </article>
    </>
  );
}

export default ConfigurationPage;
