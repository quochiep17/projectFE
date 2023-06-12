import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './compontents/Header';
import { SHOP_ROUTER } from './constants/router';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import UserPage from './pages/UserPage';
import Footer from './compontents/Footer';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route path={SHOP_ROUTER.HOME_PAGE} element={<HomePage />} />
            <Route path={SHOP_ROUTER.SHOP_PAGE} element={<ShopPage />} />
            <Route path={SHOP_ROUTER.DETAIL_PAGE} element={<DetailPage />} />
            <Route path={SHOP_ROUTER.ABOUT_PAGE} element={<AboutPage />} />
            <Route path={SHOP_ROUTER.CONTACT_PAGE} element={<ContactPage />} />
            <Route path={SHOP_ROUTER.CART_PAGE} element={<CartPage />} />
            <Route path={SHOP_ROUTER.USER_PAGE} element={<UserPage />} />
            <Route path={SHOP_ROUTER.REGISTER_PAGE} element={<RegisterPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
