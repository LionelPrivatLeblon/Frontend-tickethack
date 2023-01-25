function ajoutpanier() {
  const panier = {
    departure: "toto",
    arrival: "toto",
    date: 2012 - 01,
    hour: 12.0,
    price: 15,
  };
  for (let i = 0; i < document.querySelectorAll(".achat").length; i++) {
    document
      .querySelectorAll(".achat")
      [i].addEventListener("click", function () {
        fetch(`http://localhost:3000/checkings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(panier),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.result) {
              window.location.assign("index.html");
              //this.parentNode.remove();
            }
          });
      });
  }
}

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
        document.querySelector("#data-result").textContent = "";
        document.querySelector("#data-result").innerHTML += `
			<div>
        <div class="one-trip-container">
        <p>${data.trips.departure} / ${data.trips.arrival} le ${data.newDate} à ${data.newHour} ${data.trips.price}€<p>
        <button id="${data.trips._id}" type="submit" value="Send Request" class="achat">book</button>
        </div>
        </div>`;
        console.log(data);
        document.querySelector("#departure").value = "";
        document.querySelector("#arrival").value = "";
        document.querySelector("#selectDate").value = "";
        /*if (data.result) {
        window.location.assign("index.html");
      }*/
        ajoutpanier();
      } else {
        document
          .querySelector("#data-result")
          .classList.add("no-result-trip-container");
        document
          .querySelector("#data-result")
          .classList.remove("result-trip-container");
        document.querySelector("#data-result").textContent = "No trip found";
      }
    });
});
