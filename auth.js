document.addEventListener('DOMContentLoaded', () => {
  const isAuthenticated = sessionStorage.getItem('authenticated');

  if (!isAuthenticated) {
    // Replace the body with the login form
    document.body.innerHTML = `
      <div class="login-overlay">
        <div class="login-card">
          <h2>🔐 Private Access</h2>
          <input type="text" id="username" placeholder="Username">
          <input type="password" id="password" placeholder="Password">
          <button onclick="validateLogin()">Login</button>
          <div id="login-error" class="error"></div>
        </div>
      </div>
    `;
  }
});

function validateLogin() {
  const USERNAME = "pineapple";
  const PASSWORD = "zeppelin";

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === USERNAME && pass === PASSWORD) {
    sessionStorage.setItem("authenticated", "true");
    location.reload();
  } else {
    document.getElementById("login-error").innerText = "Invalid credentials. Please try again.";
  }
}