function getLocation() {
navigator.geolocation.getCurrentPosition(pos => {
document.getElementById("location").innerText =
"■ Latitude: " + pos.coords.latitude.toFixed(4) +
" | Longitude: " + pos.coords.longitude.toFixed(4);
}, () => {
alert("Location permission denied");
});
}
function submitReport() {
let sev = document.getElementById("severity").value;
document.getElementById("status").innerText =
"■ Report Received | AI Severity: " + sev;
alert("Report submitted successfully!");
}
function resolve() {
document.getElementById("status").innerText =
"■ Status: Cleaned Successfully";
}
