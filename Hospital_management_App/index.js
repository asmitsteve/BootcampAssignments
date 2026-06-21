let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = form.name.value;
    let doctorID = form.docID.value;
    let specialization = form.specialization.value;
    let experience = form.experience.value;
    let email = form.email.value;
    let mobile = form.mobile.value;

    let role = "";

    if (experience > 5) {
        role = "Senior";
    } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
    } else {
        role = "Trainee";
    }

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = name;

    let td2 = document.createElement("td");
    td2.innerText = doctorID;

    let td3 = document.createElement("td");
    td3.innerText = specialization;

    let td4 = document.createElement("td");
    td4.innerText = experience;

    let td5 = document.createElement("td");
    td5.innerText = email;

    let td6 = document.createElement("td");
    td6.innerText = mobile;

    let td7 = document.createElement("td");
    td7.innerText = role;

    let td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.style.color = "red";
    td8.style.cursor = "pointer";

    td8.addEventListener("click", function () {
        tr.remove();
    });

    tr.append(
        td1,
        td2,
        td3,
        td4,
        td5,
        td6,
        td7,
        td8
    );

    tbody.append(tr);

    form.reset();
});


