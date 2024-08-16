// Import the MenuItem type from the types file
import type {MenuItem} from "../types";
// Import Dispatch type from React
import {Dispatch} from "react";
// Import OrderActions type from the order-reducer file
import {OrderActions} from "../reducers/order-reducer";

// Define the props' type for the MenuItem component
type MenuItemProps = {
    item: MenuItem;
    dispatch: Dispatch<OrderActions>;
}

// MenuItem component that renders a button with the item's name and price
// When clicked, it dispatches the 'add-item' action to add the item to the order
export default function MenuItem({item, dispatch}: MenuItemProps) {
    return (
        <button
            className="border-2 border-teal-400 hover:bg-teal-200
            w-full p-3 flex justify-between"
            onClick={() => dispatch({type: 'add-item', payload: {item}})}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    );
}
