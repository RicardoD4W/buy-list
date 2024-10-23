import {
  DrawerConfig,
  EmojisConfig,
  NotificationConfig,
  SeparatorConfig,
  ThemeConfig,
} from "../components/configItemsBarrel.ts";

import { withSeparators } from "../helpers/functions.ts";
import { useTheme } from "../hooks/useTheme";

function ConfigurationPage() {
  const { themeState } = useTheme();

  const configComponents = [
    <ThemeConfig />,
    <EmojisConfig />,
    <NotificationConfig />,
    <DrawerConfig />,
  ];

  const CONFIG_OPTIONS = withSeparators(configComponents, SeparatorConfig);

  return (
    <>
      <article
        className="flex justify-center pt-32 transition-colors duration-300 ease-out "
        style={{
          backgroundColor: themeState.BackgroundColor,
        }}
      >
        <div
          className="flex flex-col items-center justify-around w-11/12 p-4 transition-colors duration-300 ease-out rounded gap-y-6 h-[60%]"
          style={{
            backgroundColor: themeState.CardColor,
            color: themeState.ContentColor,
          }}
        >
          {CONFIG_OPTIONS}
        </div>
      </article>
    </>
  );
}

export default ConfigurationPage;
