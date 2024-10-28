// Check if maintenance mode is active on page load
function checkMaintenanceMode() {
    const isMaintenance = localStorage.getItem("maintenanceMode") === "true";
    if (isMaintenance && !window.location.href.includes("maintence/index.html")) {
        window.location.href = "https://seraphremake.vercel.app/maintence/index.html";
    }
}

// Set maintenance mode and redirect if needed
function setMaintenanceMode(enable) {
    localStorage.setItem("maintenanceMode", enable);
    if (enable) {
        window.location.href = "https://seraphremake.vercel.app/maintence/index.html";
    } else {
        window.location.href = "index.html";
    }
}
