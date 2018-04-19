const tables = document.querySelectorAll(".flexbox");

tables.forEach(table => {
  console.log(table);
  const statusButton1 = table.querySelector(".statusButton1");
  statusButton1.addEventListener("click", event => {
    table.classList.remove("status2", "status3", "status4");
    table.classList.toggle("status1");
  });

  const statusButton2 = table.querySelector(".statusButton2");
  statusButton2.addEventListener("click", event => {
    table.classList.remove("status1", "status3", "status4");
    table.classList.toggle("status2");
  });

  const statusButton3 = table.querySelector(".statusButton3");
  statusButton3.addEventListener("click", event => {
    table.classList.remove("status1", "status2", "status4");
    table.classList.toggle("status3");
  });

  const statusButton4 = table.querySelector(".statusButton4");
  statusButton4.addEventListener("click", event => {
    table.classList.remove("status1", "status2", "status3");
    table.classList.toggle("status4");
  });
});
