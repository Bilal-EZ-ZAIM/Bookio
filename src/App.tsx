import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { OrdersPage } from "./pages/OrdersPage";
import { UsersPage } from "./pages/UsersPage";
import AuthApplication from "./components/auth/AuthApplication";
import Home from "./pages/Home";
import { BooksPage } from "./pages/BooksPage";
import { Navigation } from "./components/layout/Navigation";
import { Layout } from "./components/layout/Layout";
import { BookDetailsPage } from "./pages/BookDetailsPage";
import { CartPage } from "./pages/CartPage";
import { BooksPagess } from "./pages/BooksPagess";

function App() {
  const [currentPage, setCurrentPage] = React.useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      case "books/dashboard":
        return <BooksPage />;
      case "orders":
        return <OrdersPage />;
      case "users":
        return <UsersPage />;
      default:
        return <DashboardPage />;
    }
  };

  const ConditionalNavigation = () => {
    const location = useLocation();

    if (location.pathname === "/dashboard") {
      return null;
    }

    return <Navigation />;
  };

  return (
    <Router>
      <ConditionalNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthApplication />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout onNavigate={setCurrentPage}>
              {renderPage()}
            </DashboardLayout>
          }
        />

        <Route
          path="/books"
          element={
              <BooksPagess />
          }
        />
        <Route
          path="/books/:id"
          element={
            <Layout>
              <BookDetailsPage />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
