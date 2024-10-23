import { useTheme } from "../hooks/useTheme";
import { usePreferenceStore } from "../store/preferencesStore";

function NotificationConfig() {
  const { notifications, setNotifications } = usePreferenceStore();
  const { themeState } = useTheme();

  const handleChangeNotifications = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotifications(e.target.checked);
  };

  return (
    <section>
      <label className="flex items-center justify-center m-2 gap-x-2">
        <h2 className="italic">Notificaciones en tiras</h2>
        <input
          type="checkbox"
          name="notifications"
          onChange={handleChangeNotifications}
          checked={notifications}
          className="w-5 h-5"
          style={{ accentColor: themeState.HeaderColor }}
        />
      </label>
    </section>
  );
}

export default NotificationConfig;
