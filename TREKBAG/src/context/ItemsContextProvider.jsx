import { createContext, useEffect, useState, useCallback } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  let itemsFromLocalStorage;
  try {
    itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  } catch (error) {
    console.error("Error parsing items from localStorage:", error);
    itemsFromLocalStorage = null;
  }

  const [items, setItems] = useState(itemsFromLocalStorage || initialItems);

  const handleAddItem = useCallback(
    (newItemText) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        packed: false,
      };

      const newItems = [...items, newItem];
      setItems(newItems);
    },
    [items]
  );

  const handleDeleteItem = useCallback(
    (id) => {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    },
    [items]
  );

  const handleToggleItem = useCallback(
    (id) => {
      const newItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            packed: !item.packed,
          };
        } else {
          return item;
        }
      });
      setItems(newItems);
    },
    [items]
  );

  const handleRemoveAllItems = useCallback(() => {
    setItems([]);
  }, []);

  const handleResetToInitial = useCallback(() => {
    setItems(initialItems);
  }, []);

  const handleMarkAllAsComplete = useCallback(() => {
    const newItems = items.map((item) => ({
      ...item,
      packed: true,
    }));

    setItems(newItems);
  }, [items]);

  const handleMarkAllAsIncomplete = useCallback(() => {
    const newItems = items.map((item) => ({
      ...item,
      packed: false,
    }));

    setItems(newItems);
  }, [items]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
