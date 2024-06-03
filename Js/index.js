$(".services").click(function (event) {
  let x = $(this);

  $(".services").each(function (index, element) {
    let y = $(this);

    y.css("background-color", "rgb(253, 247, 247)");
    y.children().css({ color: "black" });
  });

  x.css("background-color", "#ff3147");
  x.children().css({ color: "white" });
});

async function contactUs() {
  let email = document.getElementById("email").value;
  let firstName = document.getElementById("First-name").value;
  let lastName = document.getElementById("last-name").value;
  let consent = document.getElementById("check").value == "on" ? true : false;

  let response = await fetch("https://getform.io/f/lbjkwyza", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      firstName: firstName,
      lastName: lastName,
      consent: consent,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await response.body;

  $("#contactUsModel").modal("hide");
  console.log(data);
}
