function logout() {
    sessionStorage.removeItem("authenticated");
    location.reload(); // Refresh page to trigger login screen again
}
