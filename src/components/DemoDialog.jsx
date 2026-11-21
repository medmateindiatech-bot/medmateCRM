import * as React from "react";
import { DemoForm } from "./DemoForm";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

export const DemoDialogContext = React.createContext(null);
export function DemoDialogProvider({ children }) {
  const [s, i] = React.useState(false),
    l = React.useCallback(() => i(true), []),
    c = React.useCallback(() => i(false), []),
    d = React.useMemo(
      () => ({
        open: s,
        openDemo: l,
        closeDemo: c,
        setOpen: i,
      }),
      [s, l, c],
    );
  return <DemoDialogContext.Provider value={d}>{children}</DemoDialogContext.Provider>;
}
export function useDemoDialog() {
  const n = React.useContext(DemoDialogContext);
  if (!n) throw new Error("useDemoDialog must be used within DemoDialogProvider");
  return n;
}
export function DemoDialog() {
  const { open, setOpen } = useDemoDialog();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg" data-testid="demo-dialog">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Book a free demo</DialogTitle>
          <DialogDescription>
            A short walkthrough of the pharmacy console and neighbourhood network. We will map your shop,
            stock, and billing needs.
          </DialogDescription>
        </DialogHeader>
        <DemoForm idPrefix="dialog-demo" onSubmitted={() => {}} />
      </DialogContent>
    </Dialog>
  );
}
