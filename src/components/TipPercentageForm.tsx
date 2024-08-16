// Import Dispatch from React to type the dispatch function
import {Dispatch} from "react";
// Import OrderActions type from the order-reducer file
import {OrderActions} from "../reducers/order-reducer";

// Array of tip options with id, value, and label
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
];

// Define the props type for the TipPercentageForm component
type TipPercentageFormProps = {
    dispatch: Dispatch<OrderActions>;
    tip: number;
}

// TipPercentageForm component that renders radio buttons for selecting the tip percentage
export default function TipPercentageForm({dispatch, tip}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Tip:</h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={e => dispatch({
                                type: 'add-tip',
                                payload: {value: +e.target.value}
                            })}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    );
}
