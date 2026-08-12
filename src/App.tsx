import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import BookingPage from "./pages/BookingPage";

function Layout({ children, showNavFooter = true }: { children: React.ReactNode; showNavFooter?: boolean }) {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {showNavFooter && <Navbar />}
      <main>{children}</main>
      {showNavFooter && <Footer />}
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <ServicesPage />
            </Layout>
          }
        />
        <Route
          path="/services/:serviceId"
          element={
            <Layout>
              <ServiceDetailPage />
            </Layout>
          }
        />
        <Route
          path="/booking"
          element={
            <Layout showNavFooter={false}>
              <BookingPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
