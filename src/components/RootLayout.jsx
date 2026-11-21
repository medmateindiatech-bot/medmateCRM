import { Outlet } from "react-router";
import { DemoDialog, DemoDialogProvider } from "./DemoDialog";
import { ScrollToHash } from "./ScrollToHash";

export function RootLayout() {
  return (
    <DemoDialogProvider>
      <ScrollToHash />
      <Outlet />
      <DemoDialog />
    </DemoDialogProvider>
  );
}
