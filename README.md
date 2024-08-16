# Tip and Consumption Calculator

A React application for calculating tips and managing orders. This project demonstrates the use of React components,
`useReducer` for state management, and TypeScript for type safety.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [License](#license)

## Project Overview

The Tip and Order Calculator application allows users to manage their food and drink orders, calculate tips, and view
the total cost. Users can add items to their order, specify a tip percentage, and see the updated totals. The
application is built with React, TypeScript, and uses `useReducer` for state management.

## Features

- **Add Item:** Add items to your order from a predefined menu.
- **Remove Item:** Remove items from your order.
- **Add Tip:** Choose a tip percentage to apply to the subtotal.
- **View Totals:** See the subtotal, tip amount, and total amount to be paid.
- **Save Order:** Save the current order and reset the order and tip values.
- **Responsive Design:** Adaptable to various screen sizes.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Next-generation frontend tool for fast builds and optimized development experience.
- **TypeScript:** Superset of JavaScript with static types.
- **React `useReducer`:** For state management with complex state logic.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Installation

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aaronmasm/tip-and-order-calculator.git

2. **Navigate to the project directory:**

   ```bash
   cd tip-and-order-calculator

3. **Install the dependencies:**

   ```bash
   npm install

4. **Start the development server:**

   ```bash
   npm run dev

## Usage

1. **Add Item:**
    - Click on any menu item to add it to your order. The item will appear in the order summary.

2. **Remove Item:**
    - Click the "X" button next to an item in the order summary to remove it from the order.

3. **Add Tip:**
    - Select a tip percentage from the options to apply it to the subtotal. The tip amount and total will update
      accordingly.

4. **View Totals:**
    - The totals section will show the subtotal, tip amount, and total amount to be paid.

5. **Save Order:**
    - Click the "Save Order" button to finalize the order. This will clear the order list and reset the tip value.

## Project Structure

The project structure is organized as follows:

- `src/`
    - `components/` - Contains React components used in the application.
        - `MenuItem.tsx` - Component for displaying menu items and adding them to the order.
        - `OrderContents.tsx` - Component for displaying the current order and allowing item removal.
        - `OrderTotals.tsx` - Component for displaying the totals and save button.
        - `TipPercentageForm.tsx` - Component for selecting a tip percentage.
    - `data/` - Contains menu item data.
        - `db.ts` - Menu item data used in the application.
    - `helpers/` - Contains utility functions.
        - `index.ts` - Helper functions for formatting currency.
    - `reducer/` - Contains state management logic.
        - `order-reducer.ts` - Reducer function for managing order and tip state.
    - `types/` - TypeScript type definitions.
        - `index.ts` - Defines types for menu items and order items.
    - `App.tsx` - Main application component.
    - `main.tsx` - Entry point for the React application.
    - `index.css` - Global styles.

## Components

- **MenuItem:** Displays menu items and allows them to be added to the order.
- **OrderContents:** Shows the current order with the ability to remove items.
- **OrderTotals:** Displays the subtotal, tip amount, and total, and includes the "Save Order" button.
- **TipPercentageForm:** Provides options for selecting a tip percentage.

## Styling

The application uses Tailwind CSS for styling. The utility-first approach ensures a clean and responsive design,
allowing for rapid development and a consistent look and feel across different devices.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

© 2024 Aarón Más Murro
