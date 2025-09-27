# Modern E-commerce Project

This is a modern full-stack e-commerce application built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Zustand for cart management, and Prisma with PostgreSQL. The application features both user and admin dashboards, providing a seamless shopping experience and robust management tools.

## Features

### User Features
- **Authentication**: Users can log in and register using email and OAuth with Google.
- **Product Catalog**: Browse products by category, search, filter, and sort.
- **Wishlist**: Save favorite products for later.
- **Cart Management**: Add, remove, and update product quantities in the cart. Apply promo codes and calculate shipping costs.
- **Checkout Process**: A multi-step checkout flow that includes address entry, shipping options, payment processing, and order summary.
- **Order History**: View past orders and account details.

### Admin Features
- **Dashboard**: Access an overview of store performance and metrics.
- **Product Management**: Create, read, update, and delete products and categories.
- **Order Management**: View and manage customer orders.
- **Stock Management**: Manage inventory and product variants (size, color).
- **Coupon Management**: Create and manage discount coupons.
- **Sales Analytics**: Visualize sales data with charts.

## Technologies Used
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **State Management**: Zustand
- **Backend**: Prisma with PostgreSQL
- **Payment Processing**: Stripe (test mode with webhooks)

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- PostgreSQL database

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd modern-ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

4. Set up the database:
   ```bash
   npx prisma db push
   ```

5. Seed the database with initial data:
   ```bash
   npx prisma db seed
   ```

### Running the Application
- Start the development server:
  ```bash
  npm run dev
  ```

Visit `http://localhost:3000` in your browser to view the application.

## Testing
- Run unit tests:
  ```bash
  npm run test
  ```

- Run end-to-end tests:
  ```bash
  npm run test:e2e
  ```

## License
This project is licensed under the MIT License. See the LICENSE file for details.