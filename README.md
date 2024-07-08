## Overview

This project is a to-do list application built using React and Zustand for state management. The app allows users to add, delete, and toggle items as packed or unpacked. It also includes sorting functionality to view items based on their packed status.

## Features

- **Add Items**: Add new items to the list.
- **Delete Items**: Remove items from the list.
- **Toggle Items**: Mark items as packed or unpacked.
- **Sort Items**: Sort items by default, packed, or unpacked status.
- **Persist State**: State is persisted across sessions using Zustand's middleware.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App](#app)
  - [Sidebar](#sidebar)
  - [AddItemForm](#additemform)
  - [ButtonGroup](#buttongroup)
  - [ItemList](#itemlist)
  - [Item](#item)
  - [EmptyView](#emptyview)
- [Store](#store)
  - [useItemsStore](#useitemsstore)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm start
   ```

## Usage

After starting the development server, you can view the application in your browser by navigating to `http://localhost:3000`.

### App Structure

```jsx
import ItemsContextProvider from "./context/ItemsContextProvider";
import BackgroundHearing from "./components/BackgroundHearing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <BackgroundHearing />

      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
```

## Components

### App

The main component that sets up the overall structure of the application.

### Sidebar

```jsx
import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  console.log("Sidebar rendering...");

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
```

### AddItemForm

Handles the form submission to add a new item to the list.

### ButtonGroup

```jsx
import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    { text: "Mark all as complete", onClick: markAllAsComplete },
    { text: "Mark all as incomplete", onClick: markAllAsIncomplete },
    { text: "Reset to initial", onClick: resetToInitial },
    { text: "Remove all items", onClick: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          text={button.text}
          onClick={button.onClick}
          buttonType="secondary"
        />
      ))}
    </section>
  );
}
```

### ItemList

```jsx
import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return 0;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />{" "}
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
```

### EmptyView

Displays a message when there are no items in the list.

## Store

### useItemsStore

The `useItemsStore` hook manages the state of the items using Zustand.

```javascript
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = { id: new Date().getTime(), name: newItemText, packed: false };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
      },
      toggleItem: (id) => {
        set((state) => ({
          items: state.items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item),
        }));
      },
      removeAllItems: () => set(() => ({ items: [] })),
      resetToInitial: () => set(() => ({ items: initialItems })),
      markAllAsComplete: () => {
        set((state) => ({ items: state.items.map((item) => ({ ...item, packed: true })) }));
      },
      markAllAsIncomplete: () => {
        set((state) => ({ items: state.items.map((item) => ({ ...item, packed: false })) }));
      },
    }),
    { name: "items" }
  )
);
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to this project by opening issues or submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.

Happy coding!
