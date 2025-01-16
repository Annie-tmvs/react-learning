import "./App.css";
import { AppProvider } from "@toolpad/core/react-router-dom";
import {
  BRANDING,
  demoTheme,
  NAVIGATION,
} from "./components/layouts/Header/Appbar.mock";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme} branding={BRANDING}>
      <Outlet />
    </AppProvider>
  );
}

export default App;
