export interface ColorTheme {
  HeaderColor: HexaType;
  BackgroundColor: HexaType;
  TitleColor: HexaType;
  ContentColor: HexaType;
  PrimaryIconColor: HexaType;
  SecondaryIconColor: HexaType;
}

export type HexaType = `#${string}`;

export interface AvalibeColorsTheme {
  Verde: ColorTheme;
  Cyan: ColorTheme;
  Azul: ColorTheme;
  Teal: ColorTheme;
  Rosa: ColorTheme;
  Violeta: ColorTheme;
  Naranja: ColorTheme;
  Negro: ColorTheme;
}
