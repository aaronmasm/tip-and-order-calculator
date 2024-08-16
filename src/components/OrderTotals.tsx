// Import Dispatch and useCallback hooks from React
import {Dispatch, useCallback} from "react";
// Import OrderItem type from the types' file
import {OrderItem} from "../types";
// Import the formatCurrency helper function
import {formatCurrency} from "../helpers";
// Import OrderActions type from the order-reducer file
import {OrderActions} from "../reducers/order-reducer";

// Define the props' type for the OrderTotals component
type OrderTotalProps = {
    order: OrderItem[];
    tip: number;
    dispatch: Dispatch<OrderActions>;
}

// OrderTotals component that calculates and displays the order totals and tip
// It also provides a button to place the order
export default function OrderTotals({order, tip, dispatch}: OrderTotalProps) {
    // Calculate the subtotal amount of the order
    const subtotalAmount = useCallback(() => order.reduce((total, item) =>
        total + (item.quantity * item.price), 0), [order]);

    // Calculate the tip amount based on the subtotal and tip percentage
    const tipAmount = useCallback(() => subtotalAmount() * tip, [subtotalAmount, tip]);

    // Calculate the total amount to be paid (subtotal + tip)
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [subtotalAmount, tipAmount]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totals and Tip:</h2>

                <p>Subtotal to Pay: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
                </p>

                <p>Tip: {''}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
                </p>

                <p>Total to Pay: {''}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>
            </div>

            <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10"
                    onClick={() => dispatch({type: 'place-order'})}
            >
                Save Order
            </button>
        </>
    );
}
