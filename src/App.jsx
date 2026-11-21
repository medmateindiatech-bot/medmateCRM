import { Route, Routes } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { ROUTES } from "./lib/routes";
import { AboutPage } from "./pages/about/AboutPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { HomeRoute } from "./pages/home/HomePage";
import { PrivacyPage } from "./pages/legal/PrivacyPage";
import { RefundPage } from "./pages/legal/RefundPage";
import { TermsPage } from "./pages/legal/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PharmacyOwnerPage } from "./pages/pharmacy-owner/PharmacyOwnerPage";
import { StoriesPage } from "./pages/stories/StoriesPage";

export function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path={ROUTES.home} element={<HomeRoute />} />
        <Route path={ROUTES.pharmacyOwner} element={<PharmacyOwnerPage />} />
        <Route path={ROUTES.stories} element={<StoriesPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        <Route path={ROUTES.privacy} element={<PrivacyPage />} />
        <Route path={ROUTES.terms} element={<TermsPage />} />
        <Route path={ROUTES.refund} element={<RefundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
