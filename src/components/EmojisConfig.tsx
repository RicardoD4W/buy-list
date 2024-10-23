import { useTheme } from "../hooks/useTheme";
import { usePreferenceStore } from "../store/preferencesStore";

function EmojisConfig() {
  const { themeState } = useTheme();
  const { automaticEmojis, setAutomaticEmojis } = usePreferenceStore();

  const handleChangeAutoEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutomaticEmojis(e.target.checked);
  };

  return (
    <section>
      <label className="flex items-center justify-center m-2 gap-x-2">
        <h2 className="italic">Emojis automáticos</h2>
        <input
          type="checkbox"
          name="autoemojis"
          onChange={handleChangeAutoEmoji}
          checked={automaticEmojis}
          className="w-5 h-5"
          style={{ accentColor: themeState.HeaderColor }}
        />
      </label>
    </section>
  );
}

export default EmojisConfig;
