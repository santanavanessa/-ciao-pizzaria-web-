import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";
import { ConfirmedOrderPage } from "./pages/ConfirmedOrder";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<ConfirmedOrderPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}