let currentLocation = "";

function getLocation() {
  navigator.geolocation.getCurrentPosition(
    pos => {
      currentLocation =
        pos.coords.latitude.toFixed(4) +
        ", " +
        pos.coords.longitude.toFixed(4);

      document.getElementById("location").innerText =
        "■ Latitude & Longitude: " + currentLocation;
    },
    () => {
      alert("Location permission denied");
    }
  );
}

function submitReport() {
  let severity = document.getElementById("severity").value;
  let photoInput = document.getElementById("photo");

  let photoName =
    photoInput.files.length > 0
      ? photoInput.files[0].name
      : "No photo uploaded";

  // Show authority dashboard
  document.getElementById("authority").style.display = "block";

  // Update authority data
  document.getElementById("authPhoto").innerText =
    "■ Photo: " + photoName;

  document.getElementById("authLocation").innerText =
    "■ Location: " + (currentLocation || "Not captured");

  document.getElementById("authSeverity").innerText =
    "■ Severity: " + severity;

  alert("Report successfully sent to authority!");
}

function resolve() {
  document.getElementById("authSeverity").innerText =
    "■ Status: Cleaned Successfully";
}
