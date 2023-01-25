document.querySelector("#search").addEventListener("click", function () {
  const trip = {
    departure: document.querySelector("#departure").value,
    arrival: document.querySelector("#arrival").value,
    selectDate: document.querySelector("#selectDate").value,
  };

  fetch("http://localhost:3000/trips/departure", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(trip),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        document.querySelector("#data-result").innerHTML += `<div>
      <p>${data.trips.departure}</p>
                <p>${data.trips.arrival}</p>
                <p>${data.newDate}</p>
                <p>${data.newHour}</p>
                <p>${data.trips.price}</p>
            </div>`;
        console.log(data);
        document.querySelector("#departure").value = "";
        document.querySelector("#arrival").value = "";
        document.querySelector("#selectDate").value = "";
        /*if (data.result) {
        window.location.assign("index.html");
      }*/
      }
    });
});

