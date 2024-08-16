import { useCartStore } from "../store/CartStore";

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Remover do carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
