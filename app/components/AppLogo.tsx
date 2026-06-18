import { APP_LOGO_SRC } from "../lib/constants";

type AppLogoProps = {
  size?: number;
};

export function AppLogo({ size = 96 }: AppLogoProps) {
  return (
    <img
      src={APP_LOGO_SRC}
      alt="KeepPushing"
      width={size}
      height={size}
      style={{
        display: "block",
        width: size,
        height: size,
        borderRadius: "22%",
        objectFit: "cover",
      }}
    />
  );
}
