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
        document
          .querySelector("#data-result")
          .classList.add("result-trip-container");
        document
          .querySelector("#data-result")
          .classList.remove("no-result-trip-container");
        document.querySelector("#data-result").innerHTML += `
			<div>
        <div class="one-trip-container">
        <p>${data.trips.departure} / ${data.trips.arrival} le ${data.newDate} à ${data.newHour} ${data.trips.price}€<p>
        <button id="book">book</button>
        </div>
        </div>`;
        console.log(data);
        document.querySelector("#departure").value = "";
        document.querySelector("#arrival").value = "";
        document.querySelector("#selectDate").value = "";
        /*if (data.result) {
        window.location.assign("index.html");
      }*/
      } else {
        document
          .querySelector("#data-result")
          .classList.add("no-result-trip-container");
        document
          .querySelector("#data-result")
          .classList.remove("result-trip-container");
      }
    });
});
