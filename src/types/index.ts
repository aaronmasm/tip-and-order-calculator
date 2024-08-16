// Define the type for a menu item
export type MenuItem = {
    id: number;
    name: string;
    price: number;
};

// Define the type for an order item, which extends the menu item type
// by adding a quantity property
export type OrderItem = MenuItem & {
    quantity: number;
};
