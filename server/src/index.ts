import "dotenv/config";
import "./helpers/mongodb";

// Run server
import "./server";

// Run websocket
import "./websocket";

// Handle errors
process.on("unhandledRejection", (reason) => {
  console.log(reason);
});
