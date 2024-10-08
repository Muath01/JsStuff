# ReserverIt - E-Commerce App for Digital Goods

**ReserverIt** is an E-Commerce platform designed for selling digital products, including logos, icons, and UI designs. Built using **Next.js**, **TypeScript**, **PostgreSQL**, **Prisma**, and **Resend**, it offers a streamlined process for digital purchases, secure transactions, and automatic product delivery, optimized for both users and administrators.

![image](https://github.com/user-attachments/assets/5910f9b0-1468-4cfe-b00f-4f86047ce962)
![image](https://github.com/user-attachments/assets/12093e4d-5ff5-4c1e-b142-e62fbe275581)


## Features

- **Admin Dashboard**: Manage product listings with the ability to add, update, or remove products via a dedicated admin page powered by Next.js server actions.
- **Secure Payments with Stripe**: Integrated Stripe Custom Accounts for handling secure payments and managing vendor payouts.
- **Automatic Digital Delivery**: Stripe webhooks ensure customers automatically receive an email with download links for their purchased digital products upon successful payment.
- **Dynamic Data Handling**: Next.js server routes manage API requests and handle real-time data fetching for a responsive experience.
- **Enhanced Security**: Utilizes session-based logins, permission-based routing, and temporary download links for secure and reliable user access.

## Technology Stack

- **Next.js**: Framework for a performant, server-rendered application.
- **TypeScript**: Ensures type safety and reduces runtime errors.
- **PostgreSQL**: Database for reliable storage of product and user information.
- **Prisma**: Simplifies database management and provides an efficient ORM.
- **Stripe**: Secure payment processing and vendor payout management.
- **Resend**: Automated email service for sending purchased digital products to customers.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/muathcs/ReserverIt.git
   cd ReserverIt
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory and set the following variables:
    ```
    # Kinde Authentication
    KINDE_CLIENT_ID=your_kinde_client_id
    KINDE_CLIENT_SECRET=your_kinde_client_secret
    KINDE_ISSUER_URL=your_kinde_issuer_url
    KINDE_SITE_URL=http://localhost:3000
    KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
    KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/api/auth/creation
    
    # UploadThing
    UPLOADTHING_SECRET=your_uploadthing_secret_key
    UPLOADTHING_APP_ID=your_uploadthing_app_id
    
    # PostgreSQL Database
    DATABASE_URL="your_postgresql_database_url"
    DIRECT_URL="your_direct_database_url"
    
    # Supabase JWT Keys
    SUPABASE_SERVICE_KEY=your_supabase_service_key
    SUPABASE_ANON_KEY=your_supabase_anon_key
    
    # Stripe
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_CONNECT_WEBHOOK_SECRET=your_stripe_connect_webhook_secret
    STRIPE_SECRET_WEBHOOK=your_stripe_secret_webhook
    
    # Resend
    RESEND_API_KEY=your_resend_api_key
    
    ```

4. **Run Database Migrations**:
   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server**:
   ```bash
   npm run dev
   ```

## Usage

1. **Admin Interface**: Log in as an admin to access the dashboard. Manage product listings, including the ability to add new products, update existing ones, and remove items as needed.
   
2. **Customer Experience**:
   - Users can browse available digital products, add items to their cart, and complete purchases securely via Stripe.
   - After a successful payment, customers receive an email (powered by Resend) with a secure link to download their purchased digital products.
   - Temporary download links enhance security, while session-based logins and permission-based routing prevent unauthorized access.

3. **Security & Permissions**:
   - Routes are protected with session-based authentication, enforcing access permissions based on user roles.
   - Admins have access to management functions, while general users can only view and purchase products.

## Project Structure

```plaintext
- /components             # Reusable React components for UI
- /pages
   ├── /api               # API routes for payments, webhooks, and data management
   └── /admin             # Admin dashboard for product management
- /lib                    # Utility functions and configurations
- /prisma                 # Prisma schema and database configuration
- /public                 # Static assets
- /styles                 # Global styles
```

## Key Functionalities

- **Product Management**: Through the admin dashboard, admins can add, edit, or delete digital products.
- **Payment Processing**: Stripe Custom Accounts ensure secure payment handling, vendor payouts, and transaction integrity.
- **Automated Digital Delivery**: After a purchase, Resend sends automated emails with temporary download links for secure access to digital products.
- **Real-Time Data Handling**: Server-side routes handle dynamic data fetching and ensure the app remains responsive and up-to-date.
- **User Authentication & Access Control**: Session-based logins and permission-based routing restrict access to sensitive pages.

## Future Enhancements

- **Vendor-Specific Dashboards**: Provide vendors with access to sales data, payout history, and product management tools.
- **Customer Reviews**: Enable users to leave feedback and rate products, fostering a sense of community and trust.
- **Analytics Dashboard**: Allow admins to view data on sales trends, popular products, and customer behavior insights.

## License
This project is licensed under the MIT License.
