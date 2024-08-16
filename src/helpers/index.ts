// Function to format a number as currency in USD
export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(quantity);
}
