document.querySelector("#search").addEventListener("click", function () {
    const trip = {
      name: document.querySelector("#departure").value,
      email: document.querySelector("#arrival").value,
      password: document.querySelector("#selectDate").value,
    };
  
    fetch("http://localhost:3000/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trip),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          window.location.assign("index.html");
        }
      });
  });