# 🛒 Follow Along E-Commerce Website  

## 🚀 Key Features  

### 1. REST API  
- Implements **RESTful** principles for efficient client-server communication.  
- Endpoints for managing **products**, **users**, and **orders**.  

### 2. MERN Stack  
- Built with **MongoDB**, **Express.js**, **React**, and **Node.js**.  
- Ensures scalability, performance, and a seamless full-stack experience.  

### 3. Order Handling  
- Streamlined order processing from **cart to checkout**.  
- Real-time updates for **order status** and **inventory management**.  

### 4. Product Listing & Management  
- Features for **adding**, **editing**, and **removing** products.  
- **Search** and **filter** functionality for an optimized user experience.  

### 5. User Authentication  
- Secure authentication with **JWT**.  
- **Role-based access control** for users and admins.  

---

## 📊 Milestone Progress  

### Milestone 2: Project Setup 🚀  
✅ **Project Setup**  
- Structured the project with separate frontend and backend directories.  
- Initialized a **React** app for the frontend and a **Node.js** server for the backend.  

✅ **Tooling & Configuration**  
- Configured **Tailwind CSS** for modern and responsive styling.  
- Added useful extensions to improve development efficiency.  

✅ **Login Page Implementation**  
- Designed and developed a fully functional **Login Page**.  
- Ensured proper UI styling using **Tailwind CSS**.  
- Set up basic authentication logic to handle user login.  

---

### Milestone 3: Backend Setup 🚀  
✅ **Backend Folder Structure**  
- Organized backend code with separate folders for routes, controllers, models, and middleware.  

✅ **Server Setup**  
- Created a backend server using **Node.js** and **Express**.  

✅ **Database Connection**  
- Integrated **MongoDB** to store and manage data.  

✅ **Error Handling**  
- Implemented a global error handler for better debugging.  

---

### Milestone 4: Creating User Model and Controller 🚀  
✅ **User Model Implementation**  
- Defined a **User Schema** using **Mongoose**.  
- Integrated **bcrypt** for secure password hashing.  

✅ **User Controller Setup**  
- Developed controller functions for **user management**.  

✅ **Multer File Upload Integration**  
- Configured **Multer** to handle file uploads (e.g., profile pictures).  

---

### Milestone 5: Creating the Signup Page 🚀  
✅ **Sign-Up Page UI Development**  
- Designed the **Sign-Up page** using **Tailwind CSS**.  
- Implemented client-side form validation.  

---

### Milestone 6: Backend Signup Endpoint and Password Encryption 🚀  
✅ **Signup Endpoint Implementation**  
- Created a new route to handle user registration.  
- Used **bcrypt** to hash passwords securely.  

---

### Milestone 7: Backend Login Endpoint and Password Validation 🚀  
✅ **Login Endpoint Implementation**  
- Created a backend route for **user login**.  
- Implemented **password validation** using **bcrypt.compare**.  

---

### Milestone 8: Product Card Component and Homepage Layout 🚀  
✅ **Frontend Product Card Component**  
- Designed and implemented a reusable **Product Card** component.  
- Created a responsive homepage to display multiple Product Cards.  

---

### Milestone 9: Product Input Form 🚀  
✅ **Product Form Implementation**  
- Designed a form for adding **product details**.  
- Integrated backend database storage with validation.  

---

### Milestone 10: Product Schema and API Endpoint 🚀  
✅ **Product Schema Implementation**  
- Defined a **Product Schema** in **Mongoose**.  
- Implemented validation for fields like **name**, **price**, and **image URL**.  

✅ **API Endpoint for Adding Products**  
- Created a **POST endpoint** to store product details in MongoDB.  
- Ensured proper validation before saving the data.  

---

### Milestone 11: Dynamic Product Display 🚀  
✅ **Fetching Product Data**  
- Created an endpoint to retrieve all stored products from **MongoDB**.  
- Implemented API call logic in the frontend to fetch data dynamically.  

✅ **Displaying Products**  
- Passed fetched product data to the **Product Card** component.  
- Rendered product information dynamically on the homepage.  

---

### Milestone 12: My Products Page 🚀  
✅ **Filtering Products by User Email**  
- Created a backend endpoint to retrieve products associated with the logged-in user's email.  
- Queried the **MongoDB** database to fetch only those products matching the user's email.  

✅ **Fetching Data on the Frontend**  
- Implemented an API call to request user-specific product data from the backend.  
- Stored the retrieved data in the application state for dynamic rendering.  

✅ **Displaying User's Products**  
- Passed the fetched data to the **Product Card** component.  
- Rendered the products dynamically on the **"My Products"** page.  

---

### Milestone 13: Editing Uploaded Products 🚀  
✅ **Backend Update Endpoint**  
- Created an endpoint to receive and update product details in **MongoDB**.  
- Implemented logic to find the product by its ID and modify the existing data.  

✅ **Frontend Edit Button**  
- Added an **Edit** button to each product card.  
- When clicked, it fetches the product details and auto-fills the form.  

✅ **Updating Product Data**  
- Allowed users to modify product details directly within the form.  
- Implemented a **Save Changes** feature to update product details in the database.  

---

### Milestone 14: Deleting Products 🚀  
✅ **Backend Delete Endpoint**  
- Created an endpoint to delete a product by its ID from **MongoDB**.  
- Implemented logic to find the product and remove it from the database.  

✅ **Frontend Delete Button**  
- Added a **Delete** button to each product card.  
- When clicked, it sends the product ID to the server endpoint for deletion.  

✅ **Updating UI After Deletion**  
- Ensured the product is removed from the frontend dynamically after successful deletion.  
- Implemented **confirmation prompts** before deletion for better user experience.  

---

### Milestone 15: Navbar Component 🚀  
✅ **Creating the Navbar Component**  
- Designed a **Nav** component with links to key pages:  
  - Home  
  - My Products  
  - Add Product  
  - Cart  

✅ **Making the Navbar Responsive**  
- Ensured the Navbar adapts to all screen sizes.  
- Implemented a mobile-friendly design with a collapsible menu.  

✅ **Reusing the Navbar Across Pages**  
- Added the **Nav** component to all application pages.  
- Ensured smooth and intuitive navigation between different sections.  

---

### Milestone 16: Product Info Page 🚀  
✅ **Creating the Product Info Page**  
- Designed a **Product Info** page to display detailed product information.  

✅ **Adding Quantity Selection and Cart Button**  
- Implemented a **Quantity Selector** to allow users to choose the desired quantity.  
- Added an **Add to Cart** button to facilitate easy product purchase.  

✅ **Dynamic Data Rendering**  
- Integrated backend API calls to fetch and display product details dynamically.  
- Ensured the page updates based on the selected product.  

---
 
### **Milestone 17: Adding Products to Cart**  
- ✅ **Updating User Schema**  
  - Modified the User Schema to include a `cart` field for storing added products.  
- ✅ **Cart Schema Implementation**  
  - Created a Cart Schema in Mongoose to store cart product details.  
- ✅ **Backend Cart Endpoint**  
  - Developed an API endpoint to receive product details and store them in the cart collection in MongoDB.  
- ✅ **API Integration**  
  - Ensured that product details are properly received from the frontend and stored in the cart.  
- ✅ **Testing and Validation**  
  - Implemented input validation to ensure correct product details are stored.  
  - Tested API responses to confirm successful cart storage.  

---  
### **Milestone 18: Fetching Cart Products 🚀**
- ✅ **Backend Cart Retrieval Endpoint**
  - Created an endpoint to fetch all products inside a user's cart.
- ✅ **User-Based Filtering**
  - Implemented logic to retrieve cart products based on the logged-in user's email.
- ✅ **API Integration with Frontend**
  - Integrated the frontend cart page with the backend to fetch and display cart items.
- ✅ **Testing and Validation**
  - Ensured that the cart data retrieval process is working correctly.
Tested API responses for accuracy and efficiency.

### **Milestone 19: Cart Page UI & Quantity Management 🚀**
- ✅ **Frontend Cart Page**
  - Created a dedicated Cart Page UI to display products inside the cart.
Integrated the frontend with the backend endpoint from Milestone 18 to fetch cart items.
- ✅ **Quantity Management**
  - Implemented + (increase) and - (decrease) buttons for each cart product.
Users can modify product quantities dynamically.
- ✅ **Backend Endpoints for Quantity Update**
  - Created API endpoints to handle incrementing and decrementing the product quantity inside the cart.
Integrated these endpoints with the frontend.
- ✅ **Testing and Validation**
Ensured smooth UI interaction for increasing and decreasing quantities.
Tested API responses to validate quantity updates.

### **Milestone 20: Profile Page & User Data Endpoint 🚀**
- **✅ Backend Endpoint for User Data**
  - Created a GET endpoint to fetch user details based on their email.
  - Implemented secure user authentication to ensure only authorized users can access their data.
  - Integrated error handling to manage invalid or missing user records.

### **Milestone 21: Address Form Page 🚀**
- ✅ Frontend Address Form Created a responsive address input form using HTML, CSS, and JavaScript/React. Designed a user-friendly UI with fields for country, city, address1, address2, zip code, and address type.

- ✅ State Management for Address Data Implemented a state to store user input dynamically. Ensured real-time updates as users type in the form fields.

- ✅ Navigation from Profile Page Integrated an "Add Address" button in the Profile Page. Enabled navigation to the address form page when the button is clicked.

- ✅ Form Validation & User Experience Added basic validation for required fields to ensure accurate input. Provided clear error messages and user feedback for invalid inputs.

- ✅ Testing & Debugging Verified smooth form submission and state updates. Ensured seamless navigation between Profile Page and Address Form.

### **Milestone 22: Save Address to User Profile 🚀**
- ✅ Backend Endpoint for Address Storage Created a POST endpoint to receive address data from the frontend form. Validated incoming address details to ensure data integrity.

- ✅ Storing Address in Database Updated the user collection by adding the address to the address array inside the user profile. Ensured that multiple addresses can be stored for a single user.

- ✅ API Integration with Frontend Connected the address form submission to the backend API. Handled API responses and provided user feedback upon successful address storage.

- ✅ Error Handling & Security Implemented proper authentication to ensure only logged-in users can add addresses. Added error handling to manage invalid data or database issues.

- ✅ Testing & Debugging Verified that addresses are successfully stored in the database. Ensured seamless data flow from the frontend to the backend.

### **Milestone 23: Place Order Functionality🚀**

- ✅ "Place Order" Button Added a functional "Place Order" button inside the cart page, allowing users to proceed with their purchases seamlessly.

- ✅ Address Selection Implemented a select address page displaying all available addresses stored in the user profile. Users can choose their preferred shipping address before placing an order.

- ✅ Order Confirmation & API Integration Connected the order placement functionality with the backend API. Once an order is placed, it is stored in the database with relevant user details.

- ✅ Error Handling & Security Ensured only authenticated users can place orders. Implemented error handling for invalid or missing address selections and order submission failures.

- ✅ Testing & Debugging Verified that orders are stored correctly in the database. Ensured smooth data flow between the frontend and backend.

### **Milestone 24: Order Summary Page 🛍️**

✅ Display Ordered Products
•⁠  ⁠Listed all products the user is ordering.

✅ Address Confirmation
•⁠  ⁠Displayed the selected delivery address.

✅ Cart Value Calculation
•⁠  ⁠Showed the total value of the cart.

✅ Place Order Button
•⁠  ⁠Added a "Place Order" button at the bottom for final confirmation.


### **Milestone 25: Order Processing Backend ⚙️**

✅ Order API Implementation

•⁠  ⁠Created an endpoint to receive products, user, and address details.
•⁠  ⁠Retrieved the _id of the user using their email.

✅ Order Storage

•⁠  ⁠Stored each product as a separate order with the same address.
•⁠  ⁠Used the existing Order schema to save order details in MongoDB.


### **Milestone 26: Fetch User Orders API 📦**

✅ Order Retrieval Endpoint
•⁠  ⁠Created an endpoint to receive the user’s email.
•⁠  ⁠Retrieved the ⁠ _id ⁠ of the user using their email.

✅ Fetch & Response
•⁠  ⁠Used the ⁠ _id ⁠ to fetch all orders of the user from the database.
•⁠  ⁠Sent all user orders in the API response.


### **Milestone 27: My Orders Page 🛍️**

✅ My Orders Page
•⁠  ⁠Created a "My Orders" page to display all user orders.

✅ API Integration
•⁠  ⁠Sent a GET request to the ⁠ my-orders ⁠ endpoint.
•⁠  ⁠Passed the user's email to fetch all orders.

✅ UI & Navigation
•⁠  ⁠Displayed all user orders on the page.
•⁠  ⁠Added "My Orders" to the navbar for easy access.


### **Milestone 28: Order Cancellation Feature**

### **Milestone 28: Order Cancellation Feature** 


✅ My Orders Page
•⁠  ⁠Added a Cancel Order button for active orders.
•⁠  ⁠Hidden the button for canceled orders.
  
✅ API Implementation
•⁠  ⁠Created an endpoint to cancel orders.
•⁠  ⁠Updated order status to canceled in the database.

✅ UI Integration
•⁠  ⁠Sent API request on button click.
•⁠  ⁠Updated UI after successful cancellation.

### **Milestone 29: PayPal Integration for Online Payments 💳**

✅ PayPal Developer Setup
•⁠  ⁠Created a PayPal Developer account.
•⁠  ⁠Accessed the PayPal Developer Dashboard.
•⁠  ⁠Created a Sandbox account for testing transactions.
•⁠  ⁠Copied and saved the Sandbox UserID for future reference.
•⁠  ⁠Retrieved and stored the Client ID from the Sandbox account.


✅ Payment Options on Order Confirmation Page
•⁠  ⁠Added two payment options: Cash on Delivery (COD) and Online Payment.
•⁠  ⁠Implemented radio buttons to allow users to select their preferred payment method.
•⁠  ⁠When "Online Payment" is selected, PayPal buttons will be displayed dynamically.

### **Milestone 30: Online Payment Integration with PayPal 💳**
✅ Key Features
1. PayPal API Integration
* Implemented PayPal API to enable secure online payments.
* Utilized the PayPal Client Key created from the Sandbox Account.
2. React PayPal SDK
* Installed the react-paypal-js NPM package for seamless integration.
* Used the PayPalScriptProvider component to display payment options.
3. Payment Flow Implementation
* Integrated credit/debit card payment methods for checkout.
* Implemented real-time order status updates based on payment confirmation.
4. Backend Payment Processing
* Created a secure backend API endpoint to handle PayPal transactions.
* Verified payment details before updating order status.
5. Error Handling & Security
* Implemented proper authentication to ensure only authorized users can make payments.
* Added error handling mechanisms for failed transactions.

### **Milestone 31: JWT Auth & Member CRUD 🔐**

✅ JWT Authentication

Implemented secure login and signup using JWT tokens.
Stored token in localStorage and protected member routes with auth middleware.
✅ Member CRUD + UI Enhancements

Added full Create, Read, Update, Delete features for gym members.
Enhanced UI with field icons, top banner, and improved layout for better experience.