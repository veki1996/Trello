import Card from "./components/Card";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState, useContext } from "react";
import CartContext from "./components/Store/cart-context";
import CartCtxTF from "./components/Store/auth-context";
import CartForCard from "./components/Cart/CartForCard";
import UpdateCard from "./components/Cart/UpdateCard";
import HorizontalMenu from "./components/Menu/Menu";
function App() {
  const NewUpdateAddCard = useContext(CartCtxTF)
  const Ctx = useContext(CartContext)
  const [modal, setModal] = useState(false)
  const [modalcard, setModalCard] = useState(false)
  const UpdateModal = NewUpdateAddCard.isUpdateIlies
  const AddNewColumn = () => {
    setModal(true)
  }
  const updateClose = (newA) => {
    setModal(newA)
    NewUpdateAddCard.onLogout()
  }
  const openModal = (openClose) => {
    setModalCard(openClose)
  }
  return (
    <CartProvider>
        <HorizontalMenu/>
      <button onClick={AddNewColumn}>Add Column</button>
      <div className="app">
        {modalcard && <CartForCard showCard={openModal} />}
        {modal && <Cart updateClose={updateClose} />}
        {UpdateModal && <UpdateCard />}
        <Card openCard={openModal} OpenModal={AddNewColumn} />
      </div>
    </CartProvider>
  );
}

export default App;
