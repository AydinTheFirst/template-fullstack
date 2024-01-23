import "dotenv/config";
import "@/mongodb";

// Run server
import "@/server";

// Handle errors
process.on("unhandledRejection", (reason) => {
  console.log(reason);
});
