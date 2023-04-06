import CartProvider from "./components/Store/CartProvider";
import RegisterAndPage from "./components/RegisterToPage/RegisterAndPage";
import React, { useEffect, useState } from "react";
import { auth } from "./Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (

    <CartProvider>
      <div className="app">
        <Routes>
          {user && <Route path="/*" element={<RegisterAndPage />} />}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Routes>


      </div>
    </CartProvider>

  );
}

export default App;

