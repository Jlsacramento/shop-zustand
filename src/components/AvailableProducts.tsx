import { useCartStore } from "../store/CartStore";

export const AvailableProducts = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);

  return (
    <div>
      <h1>Escolha seus produtos</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
