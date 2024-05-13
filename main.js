const products = document.querySelector(".products");
const baseURL = "https://fakestoreapi.com/products";

const fetchProducts = async () => {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
    displayProducts(data);
  } catch (error) {
    console.log(error);
  }
};

const displayProducts = (productsData) => {
  products.innerHTML = productsData
    .map(
      (product) => `
        <div class="product">
          <div class="image_container">
            <img class="image" src="${product.image}" alt="${product.title}">
          </div>
            <h3 class="title">${product.title.slice(0, 15)}...</h3>
            <p class="price">Price: $${product.price}</p>
            <p class="category">Category: ${product.category}</p>
        </div>
    `
    )
    .join("");
};

fetchProducts();
const productsButton = document.querySelector(".tabs button:nth-child(2)");

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("ticketForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(form);
    let tableRow = "<tr>";
    formData.forEach(function (value, key) {
      tableRow += "<td>" + value + "</td>";
    });
    tableRow += "</tr>";

    var tableBody = window.opener.document.getElementById("ticketTableBody");
    tableBody.innerHTML += tableRow;

    window.close();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("ticketForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(form);
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    let ticketData = {};
    formData.forEach(function (value, key) {
      ticketData[key] = value;
    });

    tickets.push(ticketData);
    localStorage.setItem("tickets", JSON.stringify(tickets));

    form.reset();
    alert("Ticket submitted successfully!");
    displayTickets();
  });

  function displayTickets() {
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    let table =
      '<table class="table" border="1"><thead><tr><th>First Name</th><th>Last Name</th><th>Phone Number</th><th>Ticket Type</th><th>From City</th><th>To City</th><th>Date</th></tr></thead><tbody>';

    tickets.forEach(function (ticket) {
      table += "<tr>";
      table += "<td>" + ticket.firstname + "</td>";
      table += "<td>" + ticket.lastname + "</td>";
      table += "<td>" + ticket.phone + "</td>";
      table += "<td>" + ticket.ticketType + "</td>";
      table += "<td>" + ticket.fromCity + "</td>";
      table += "<td>" + ticket.toCity + "</td>";
      table += "<td>" + ticket.date + "</td>";
      table += "</tr>";
    });

    table += "</tbody></table>";

    document.getElementById("ticketTable").innerHTML = table;
  }

  displayTickets();
});
document.addEventListener("DOMContentLoaded", function () {
  let ticketTab = document.getElementById("ticketTab");
  let productsTab = document.getElementById("productsTab");
  let ticketContent = document.getElementById("ticketContent");
  let productsContent = document.getElementById("productsContent");
});

ticketTab.addEventListener("click", function () {
  ticketTab.classList.add("active");
  productsTab.classList.remove("active");
  ticketContent.style.display = "block";
  productsContent.style.display = "none";
});

productsTab.addEventListener("click", function () {
  ticketTab.classList.remove("active");
  productsTab.classList.add("active");
  ticketContent.style.display = "none";
  productsContent.style.display = "block";
});
