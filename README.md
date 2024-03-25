## Altimetrik

## 

`# Telecom Customer Management System  This project is a Telecom Customer Management System (TCMS) built with Node.js, Express.js, and MongoDB. It provides endpoints for managing customers, handling user authentication, and retrieving customer plan details.  ## Features  - **Customer Management**: Create, read, update, and delete customer records. - **User Authentication**: Secure user login endpoint with validation. - **Customer Plan Details**: Retrieve customer plan details based on customer ID. - **MongoDB Integration**: Data storage and retrieval using MongoDB. - **Environment Variables**: Configuration via environment variables using dotenv.  ## Prerequisites  Before running this project locally, ensure you have the following installed:  - Node.js and npm - MongoDB - Any code editor of your choice  ## Installation  1. Clone this repository:     ```bash    git clone <repository_url>`

2. Navigate to the project directory:
   
   bash code
   
   `cd telecom-customer-management-system`

3. Install dependencies:
   
   bash  code
   
   `npm install`

4. Set up environment variables:
   
   Create a `.env` file in the root directory and define the following variables:
   
   plaintextCopy code
   
   `PORT=5000 MONGODB_URI=<mongodb_connection_string>`

## Usage

1. Start the server:
   
   bash  code
   
   `npm start`

2. Access the API endpoints using a REST client or test them using tools like Postman or curl.

## API Endpoints

### Customer Routes

- GET /api/customers - Retrieve all customers
- POST /api/customers/register - Register a new customer
- POST /api/customers/change-plan - Change a customer's plan

### User Authentication

- POST /api/login - User login endpoint

### Customer Plan Details

- POST /api/user/plan - Retrieve customer plan details

### Customer Routes

#### 1. GET /api/customers

- **Description**: Retrieves all customers stored in the database.
- **Request Method**: GET
- **Request Body**: None
- **Response**:
  - Status Code: 200 (OK)
  - Body: Array of customer objects

#### 2. POST /api/customers/register

- **Description**: Registers a new customer in the database.

- **Request Method**: POST

- **Request Body**:
  
  - `name` (String): Name of the customer.
  - `dob` (Date): Date of birth of the customer.
  - `email` (String): Email address of the customer.
  - `adharNumber` (String): Aadhar number of the customer.
  - `assignedMobileNumber` (String): Assigned mobile number of the customer.
  - `plan` (Object):
    - `name` (String): Name of the plan.
    - `cost` (Number): Cost of the plan.
    - `validity` (Number): Validity period of the plan.
    - `status` (String): Status of the plan.

- **Response**:
  
  - Status Code: 201 (Created)
  
  - Body:
    
    jsonCopy code
    
    `{   "customer": { /* Newly created customer object */ },   "success": true }`

#### 3. POST /api/customers/change-plan

- **Description**: Changes the plan of a customer.
- **Request Method**: POST
- **Request Body**:
  - `customerId` (String): ID of the customer whose plan is to be changed.
  - `newPlan` (Object):
    - `name` (String): Name of the new plan.
    - `cost` (Number): Cost of the new plan.
    - `validity` (Number): Validity period of the new plan.
    - `status` (String): Status of the new plan.
- **Response**:
  - Status Code: 200 (OK)
  - Body: Updated customer object with the new plan details.

### User Authentication

#### 4. POST /api/login

- **Description**: Authenticates a user.
- **Request Method**: POST
- **Request Body**:
  - `name` (String): Name of the user.
  - `email` (String): Email address of the user.
- **Response**:
  - Status Code:
    - 200 (OK) if authentication is successful.
    - 401 (Unauthorized) if authentication fails.
  - Body:
    - `{ "message": "Login successful", "user": { /* User object */ } }` if authentication is successful.
    - `{ "error": "Invalid credentials" }` if authentication fails.

### Customer Plan Details

#### 5. POST /api/user/plan

- **Description**: Retrieves plan details of a customer.
- **Request Method**: POST
- **Request Body**:
  - `customerId` (String): ID of the customer.
- **Response**:
  - Status Code: 200 (OK)
  - Body: Customer object with plan details.

These endpoints provide functionalities for managing customers, handling user authentication, and retrieving customer plan details within the Telecom Customer Management System.
