import {create} from "zustand";
import {initialItems} from "../lib/constants"

create(() => ({
   items: initialItems,
   removeAllItems: () => {
    Set(() => ({items : []}));
   }, 
   
}))