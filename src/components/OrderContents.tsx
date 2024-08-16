// Import the OrderItem type from the types file
import {OrderItem} from "../types";
// Import Dispatch type from React
import {Dispatch} from "react";
// Import the formatCurrency helper function
import {formatCurrency} from "../helpers";
// Import OrderActions type from the order-reducer file
import {OrderActions} from "../reducers/order-reducer";

// Define the props' type for the OrderContents component
type OrderContentsProps = {
    order: OrderItem[];
    dispatch: Dispatch<OrderActions>;
}

// OrderContents component that renders the current order with item details
// Each item displays its name, price, quantity, and total price
// There is a button to remove an item from the order by dispatching the 'remove-item' action
function OrderContents({order, dispatch}: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Order Contents</h2>
            <div className="space-y-3 mt-10">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <button
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderContents;
