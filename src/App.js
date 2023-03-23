import CartProvider from "./components/Store/CartProvider";
import RegisterAndPage from "./RegisterAndPage";
import RegisterAll from "./components/Register/RegiserAll";
import React, { useContext, useEffect, useState } from "react";
import CartCtxTF from "./components/Store/auth-context";
import { auth } from "./Hooks/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const Ctx = useContext(CartCtxTF);
  const login = Ctx.pageLogin;

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
        {login && user ? <RegisterAndPage /> : <RegisterAll />}
      </div>
    </CartProvider>
  );
}

export default App;

