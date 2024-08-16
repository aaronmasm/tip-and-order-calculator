import {MenuItem, OrderItem} from "../types";

// Define action types for the orderReducer
export type OrderActions =
    { type: 'add-item'; payload: { item: MenuItem }; } |
    { type: 'remove-item'; payload: { id: MenuItem['id'] }; } |
    { type: 'place-order'; } |
    { type: 'add-tip'; payload: { value: number }; }

// Define the initial state type
export type OrderState = {
    order: OrderItem[];
    tip: number;
};

// Initialize the state with an empty order and no tip
export const initialState: OrderState = {
    order: [],
    tip: 0
};

// Reducer function to handle state changes based on actions
export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {
    switch (action.type) {
        case "add-item": {
            // Check if the item already exists in the order
            const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id);
            let order: OrderItem[] = [];

            // If the item exists, increase its quantity, otherwise add it to the order
            if (itemExist) {
                order = state.order.map(orderItem => orderItem.id === action.payload.item.id ?
                    {...orderItem, quantity: orderItem.quantity + 1} :
                    orderItem
                );
            } else {
                const newItem: OrderItem = {...action.payload.item, quantity: 1};
                order = [...state.order, newItem];
            }

            return {
                ...state,
                order
            };
        }

        case "remove-item": {
            // Remove the item from the order
            const order = state.order.filter(item => item.id !== action.payload.id);

            return {
                ...state,
                order
            };
        }

        case "place-order":
            // Clear the order and reset the tip
            return {
                ...state,
                order: [],
                tip: 0
            };

        case "add-tip": {
            // Update the tip amount
            const tip = action.payload.value;

            return {
                ...state,
                tip
            };
        }

        default:
            return state;
    }
};
