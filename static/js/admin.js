// Admin login functionality
const adminForm = document.getElementById("admin-form");

adminForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    alert(`Logged in as ${username}`);
});
