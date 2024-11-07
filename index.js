const express = require("express");
const createUser = require("./app/create-user");
const sendMoney = require("./app/send-money");
const userRetrieveActivity = require("./app/user-retrieve-activity");

const app = express();
const port = 3000;

app.use(express.json()); // Parse incoming request body as JSON

// Middleware for authentication and authorization
function authenticateUser(req, res, next) {
  // TODO: Implement authentication logic - JWT token for example
  req.user = { id: "1" }; // Mock user ID
}

function authorizeUser(req, res, next) {
  const userId = req.params.id;
  if (req.user && req.user.id === userId) {
    next(); // User is authorized to access their activity
  } else {
    res.status(403).json({
      message: "Forbidden: You are not allowed to access this resource",
    });
  }
}

// CREATE USER
app.use("/create-user", createUser);

// Send money operation
app.use("/send-money", sendMoney);

// Retrieve user activity
// Only authenticated and authorized users can access this route
app.use(
  "/user/retrieve-activity/:id",
  authenticateUser,
  authorizeUser,
  userRetrieveActivity // controller
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
