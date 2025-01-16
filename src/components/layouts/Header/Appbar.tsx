import { AppProvider } from "@toolpad/core";
import { BRANDING, demoTheme, NAVIGATION } from "./Appbar.mock";
import { Outlet } from "react-router-dom";

export default function DashboardLayoutBasic() {
  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={demoTheme}
      branding={BRANDING}
    >
      <Outlet />
    </AppProvider>
  );
}
