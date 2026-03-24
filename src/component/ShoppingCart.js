import { useReducer } from "react";

const cartStyles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },
  title: { textAlign: "center", color: "#1a1a1a", marginBottom: "20px" },
  addBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "25px",
    transition: "0.3s",
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    marginBottom: "12px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    border: "1px solid #eee",
  },
  itemInfo: { display: "flex", flexDirection: "column", gap: "4px" },
  itemName: { fontWeight: "bold", color: "#333" },
  itemQty: { fontSize: "14px", color: "#666" },
  buttonGroup: { display: "flex", gap: "8px", alignItems: "center" },
  actionBtn: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  removeBtn: {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#fff0f0",
    color: "#ff4d4d",
    fontSize: "13px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  emptyText: { textAlign: "center", color: "#999", marginTop: "20px" },
};

const initialCartState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "Add_item":
      return [...state, { id: action.id, name: action.name, quantity: 1 }];
    case "Increase_item":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    case "Decrease_item":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    case "Remove_item":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export default function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = () => {
    const id = Date.now();
    dispatch({
      type: "Add_item",
      id,
      name: `Product ${id.toString().slice(-3)}`,
    });
  };

  return (
    <div style={cartStyles.wrapper}>
      <div style={cartStyles.card}>
        <h2 style={cartStyles.title}>Shopping Cart</h2>

        <button onClick={addItem} style={cartStyles.addBtn}>
          + Add New Product
        </button>

        <ul style={cartStyles.list}>
          {cart.map((item) => (
            <li key={item.id} style={cartStyles.listItem}>
              <div style={cartStyles.itemInfo}>
                <span style={cartStyles.itemName}>{item.name}</span>
              </div>

              <div style={cartStyles.buttonGroup}>
                <button
                  style={cartStyles.actionBtn}
                  onClick={() =>
                    dispatch({ type: "Decrease_item", id: item.id })
                  }
                >
                  -
                </button>
                <span style={cartStyles.itemQty}>{item.quantity}</span>
                <button
                  style={cartStyles.actionBtn}
                  onClick={() =>
                    dispatch({ type: "Increase_item", id: item.id })
                  }
                >
                  +
                </button>

                <button
                  style={cartStyles.removeBtn}
                  onClick={() => dispatch({ type: "Remove_item", id: item.id })}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        {cart.length === 0 && (
          <p style={cartStyles.emptyText}>Cart is Empty!</p>
        )}
      </div>
    </div>
  );
}
