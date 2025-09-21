# Razorpay Integration Demo

This repository is a demo full-stack application demonstrating the integration of the Razorpay payment gateway. The backend is built with Node.js and Express, while the frontend uses React. Users can select products, make payments via Razorpay, and receive confirmation after successful payment.

## Features

- **Product Listing**: Display products on the frontend with prices and images
- **Checkout Flow**: Seamless checkout experience using Razorpay
- **Order Management**: Backend order creation and management
- **API Key Integration**: Backend provides Razorpay API key to the frontend
- **Security**: Payment signature verification for secure transactions
- **Success Page**: Redirect to success page with reference ID after payment completion

## Project Structure

```
razorpay-integration/
├── backend/
│   ├── controllers/
│   │   └── productController.js      # Handles order creation, payment verification
│   ├── routes/
│   │   └── productRoutes.js          # Defines API endpoints for payments
│   ├── config/
│   │   └── config.env                # Environment variables including Razorpay API keys
│   ├── server.js                     # Initializes Razorpay instance and starts server
│   ├── app.js                        # Configures Express app with routes and middleware
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── components/
│   │   ├── Products.jsx              # Displays products and handles checkout
│   │   └── PaymentSuccess.jsx        # Shows payment success confirmation
│   ├── data.js                       # Static product data
│   ├── App.jsx                       # Sets up React Router for navigation
│   ├── main.jsx                      # Application entry point
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

## Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn**
- **Internet connection**
- **Razorpay account** to generate API keys

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sabeshraaj/razorpay-integration.git
cd razorpay-integration
```

### 2. Backend Setup

Navigate to the backend folder:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create environment configuration file `backend/config/config.env`:
```env
PORT=3000
RAZORPAY_API_KEY=your_test_key_id
RAZORPAY_API_SECRET=your_test_key_secret
```

Start the backend server:
```bash
npm run dev
# or
node server.js
```

### 3. Frontend Setup

Navigate to the frontend folder:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

Start the frontend:
```bash
npm start
```

> **Note**: Make sure both backend and frontend are running. Update API base URLs if necessary (proxy, CORS, etc.).

## How It Works

1. **Product Display**: The frontend shows a list of products with a "Pay" button
2. **Payment Initiation**: On clicking "Pay":
   - Frontend retrieves the Razorpay API key from the backend
   - Sends the payment amount to backend endpoint `/api/v1/payment/process` to create an order
   - Receives order details from the backend
   - Opens the Razorpay checkout widget with the key, order ID, and other details
3. **Payment Processing**: After payment, Razorpay sends a signature back
4. **Verification**: The backend verifies the signature using the secret key
5. **Success/Failure**: 
   - If valid: User is redirected to success page with payment reference ID
   - If invalid: Backend returns an error

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/payment/process` | Creates a Razorpay order |
| `GET` | `/api/v1/getKey` | Returns Razorpay API key to frontend |
| `POST` | `/api/v1/paymentVerification` | Verifies payment signature and redirects on success |

## Getting Razorpay API Keys

1. Sign up or log in to the [Razorpay Dashboard](https://razorpay.com/)
2. Switch to **Test Mode**
3. Navigate to **Settings** → **API Keys**
4. Generate your **API Key ID** and **API Secret**
5. Add these credentials to `backend/config/config.env`

## Results

-  Products are displayed on the frontend with images, titles, and prices
-  Clicking "Pay" opens the Razorpay checkout window
-  Payment completion triggers signature verification (in test mode)
-  Successful verification redirects users to payment success page with reference ID

## Possible Improvements / Next Steps

- **Error Handling**: Improve error handling and user feedback for failed payments
- **UI/UX Enhancement**: Better frontend experience and design
- **Database Integration**: Store orders and payment data for persistence
- **Testing**: Add unit and integration tests
- **Environment Configuration**: Different configurations for development and production
- **Logging**: Implement comprehensive logging system
- **Webhooks**: Add webhook handling for payment status updates
- **Authentication**: User authentication and order history


**Happy Coding!** 🎉
