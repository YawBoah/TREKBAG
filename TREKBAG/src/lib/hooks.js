import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";


export function useItemsContext() {
    const context = useContext(ItemsContext);
  return context
}

