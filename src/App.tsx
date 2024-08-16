import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import {menuItems} from "./data/db";
import {useReducer} from "react";
import {initialState, orderReducer} from "./reducers/order-reducer";

function App() {
    // Initialize state and dispatch using useReducer with the orderReducer and initialState
    const [state, dispatch] = useReducer(orderReducer, initialState);

    return (
        <>
            {/* Header section */}
            <header className="bg-teal-400 py-5">
                <h1 className="text-center text-4xl font-black">Tip and Consumption Calculator</h1>
            </header>

            {/* Main content section */}
            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                {/* Menu section */}
                <div className="p-5">
                    <h2 className="text-4xl font-black">Menu</h2>

                    {/* List of menu items */}
                    <div className="mt-10 space-y-3">
                        {menuItems.map(item => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                dispatch={dispatch}
                            />
                        ))}
                    </div>
                </div>

                {/* Order details and tip section */}
                <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
                    {state.order.length ? (
                        <>
                            {/* Display order contents */}
                            <OrderContents
                                order={state.order}
                                dispatch={dispatch}
                            />
                            {/* Form to set tip percentage */}
                            <TipPercentageForm
                                dispatch={dispatch}
                                tip={state.tip}
                            />
                            {/* Display order totals including tip */}
                            <OrderTotals
                                order={state.order}
                                tip={state.tip}
                                dispatch={dispatch}
                            />
                        </>
                    ) : (
                        <p className="text-center">The order is empty.</p>
                    )}
                </div>
            </main>
        </>
    );
}

export default App;
