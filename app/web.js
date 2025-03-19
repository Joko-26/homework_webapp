document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://localhost:4004/browse/Homeworks"; // Replace with your API URL
  const username = "Student"; // Replace with actual username
  const password = "schule"; // Replace with actual password

  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));

  fetch(apiUrl, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let parent = document.getElementById("apiData")
      parent.innerText = "Data loaded"
      data.value.map((homework) => {
        console.log(homework);
        let new_label = document.createElement("div");
        new_label.textContent =
          " -> " + homework["status"] + " | " + homework["subject"] + " | " + homework["date"];
        parent.appendChild(new_label)
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      document.getElementById("apiData").textContent = "Failed to load data.";
    });
});
