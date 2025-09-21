Razorpay Integration

This repository is a demo full-stack application demonstrating the integration of the Razorpay payment gateway. The backend is built with Node.js and Express, while the frontend uses React. Users can select products, make payments via Razorpay, and receive confirmation after successful payment.

Features

Product listing on the frontend with prices and images.

Checkout flow using Razorpay, with orders created via the backend.

Backend provides the Razorpay API key to the frontend.

Payment signature verification for security.

On successful payment, users are redirected to a success page showing a reference ID.

Project Structure

The project is organized as follows:

backend/: Node.js / Express backend

controllers/productController.js: Handles order creation, payment verification.

routes/productRoutes.js: Defines API endpoints for payments.

config/config.env: Environment variables including Razorpay API keys.

server.js: Initializes Razorpay instance and starts the server.

app.js: Configures Express app with routes and middleware.

frontend/: React frontend

components/Products.jsx: Displays products and handles checkout.

components/PaymentSuccess.jsx: Shows payment success confirmation.

data.js: Static product data.

App.jsx: Sets up React Router for navigation.

main.jsx: Application entry point.

Other files include .gitignore, package.json, and package-lock.json.

Prerequisites

Node.js v14 or higher

npm or yarn

Internet connection

Razorpay account to generate API keys

Setup Instructions

Clone the repository:

git clone https://github.com/sabeshraaj/razorpay-integration.git
cd razorpay-integration

Backend setup:

Navigate to the backend folder: cd backend

Install dependencies: npm install

Create a file backend/config/config.env with the following:

PORT=3000

RAZORPAY_API_KEY=your_test_key_id

RAZORPAY_API_SECRET=your_test_key_secret

Start the backend server: npm run dev (or node server.js if no dev script)

Frontend setup:

Navigate to the frontend folder: cd ../frontend

Install dependencies: npm install

Start the frontend: npm start

Make sure both backend and frontend are running. Update API base URLs if necessary (proxy, CORS, etc.).

How It Works

The frontend shows a list of products with a "Pay" button.

On clicking "Pay":

The frontend retrieves the Razorpay API key from the backend.

Sends the payment amount to the backend endpoint /api/v1/payment/process to create an order.

Receives the order details from the backend.

Opens the Razorpay checkout widget with the key, order ID, and other details.

After payment, Razorpay sends a signature back.

The backend verifies the signature using the secret key.

If valid, the user is redirected to a success page with a payment reference ID.

If invalid, the backend returns an error.

API Endpoints

POST /api/v1/payment/process – Creates a Razorpay order.

GET /api/v1/getKey – Returns Razorpay API key to frontend.

POST /api/v1/paymentVerification – Verifies payment signature and redirects on success.

Getting Razorpay API Keys

Sign up or log in to the Razorpay Dashboard (https://razorpay.com/
).

Switch to Test Mode.

Generate your API Key ID and API Secret.

Add these credentials to backend/config/config.env.

Results

Products are displayed on the frontend with images, titles, and prices.

Clicking "Pay" opens the Razorpay checkout window.

After completing payment (in test mode), the signature is verified.

On successful verification, users are redirected to a payment success page with a reference ID.

If verification fails, an error status (like 404) is returned.

Possible Improvements / Next Steps

Improve error handling and user feedback for failed payments.

Enhance UI/UX for better frontend experience.

Store orders and payment data in a database for persistence.

Add unit and integration tests.

Add different configurations for development and production environments.
