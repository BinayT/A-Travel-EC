# React + TypeScript + Vite

# E-commerce Product Dashboard

## Challenge Overview

The E-commerce Product Dashboard is a responsive and interactive tool designed for an e-commerce platform's marketing team. It provides insights into product performance through various data visualizations, allowing users to monitor and analyze the performance of individual company.

You can check all the progress on the project's commit section, how it evolved and took shape.

## Features

- **Product Selector**: Dropdown or search bar to select different companies, displaying data specific to the selected company.
- **Key Metrics**:
  - **Current Inventory**: Shows the current number of items in stock.
  - **Sales Over Time**: Line chart showing company sales over the last 12 months, with options to toggle between 12, 6, 3, and 1-month views.
  - **Conversion Rate Over Time**: Line chart showing the conversion rate over the last 12 months, with similar time frame toggle options.
  - **Customer Reviews Trend**: Trend graph displaying the average rating of customer reviews over the last 12 months.
  - **Latest Comments**: List of the most recent customer comments/reviews.
- **Data Interaction**:
  - **Time Frame Toggle**: Allows users to switch between viewing data for the last 12, 6, 3, and 1 months for all charts.
  - **Report Generation**: Button to generate a downloadable PDF report summarizing the current view of the company’s performance.

## Technical Requirements

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Libraries**:
  - **`jspdf`** and **`jspdf-autotable`**: For PDF generation.
  - **`react-chartjs-2`** and **`chart.js`**: For rendering charts.
- **Mock Data**: All data is mocked and included in the project.

## Project Structure

- **`src/`**: Main source directory.
  - **`components/`**: Contains all React components.
    - Each component folder includes:
      - `index.tsx` for the component logic.
      - `styles.css` for component-specific styling.
  - **`data/`**: Contains mock data file called `sampleData.ts`.
  - **`types/`**: Contains TypeScript type definitions within `datatypes` folder.
  - **`App.tsx`**: Entry point that renders all components.

## Installation

To set up the project, follow these steps:

1. **Clone the repository**:
```bash
git clone <repository-url>
cd <repository-folder>
```

2. **Install the dependencies**:
```bash
yarn install
```
or
```bash
npm install
```

  
3. **Run the project**:
```bash
yarn run dev
```
or
```bash
npm run dev
```

## Challanges faced
- **Setting up the test**: I am not very into testing, all the testing I have done are basic ones, hence wanted to test the app using jest, but setting up the test for me alone have been impossible, there are too many errors everywhere and even though I wrote test, I couldn't run it.

- **Setting up the chart**: I also had difficulties running the react-chartjs-2, hence had to ask help to the internet as well as ChatGPT to setup more native way to build the chart.

 ## Future Improvements
- **Tests**: Learning to setup the testing libraries correctly and properly testing the application.