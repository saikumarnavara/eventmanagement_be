const express = require("express");
const dontEnv = require("dotenv");
const bodyparser = require("body-parser");
const UserRoutes = require("./src/routes/UserRoutes");
const dashboardRoutes = require("./src/routes/protected_routes/dashboardRoutes");
const DbConnection = require("./src/config/DB");

dontEnv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyparser.json());
DbConnection();

app.use("/user", UserRoutes);
app.use("/", dashboardRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
