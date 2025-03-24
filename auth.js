const USERNAME = "pineapple";
const PASSWORD = "zeppelin";

const user = prompt("Username:");
const pass = prompt("Password:");

if (user !== USERNAME || pass !== PASSWORD) {
  document.write("❌ Access denied.");
  throw new Error("Not authorised");
}
