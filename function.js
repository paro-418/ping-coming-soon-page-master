let submit = document.querySelector("#submit-button");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let storeEmail = document.getElementsByTagName("input")[0].value;

  document.getElementById("error-msg").textContent = "";
  document.getElementsByClassName("error-msg")[0].textContent = "";

  if (storeEmail == "") {
    let mobile = document.getElementById("error-msg");
    mobile.appendChild(
      document.createTextNode(
        "Whoops! It looks like you forgot to add your email"
      )
    );
    let desktop = document.getElementsByClassName("error-msg")[0];
    desktop.appendChild(
      document.createTextNode(
        "Whoops! It looks like you forgot to add your email"
      )
    );

    document.getElementsByTagName("input")[0].style.borderColor = "red";
    return;
  } else if (!ValidateEmail(storeEmail)) {
    let mobile = document.getElementById("error-msg");
    mobile.appendChild(
      document.createTextNode("Please provide a valid email address")
      );

      let desktop = document.getElementsByClassName("error-msg")[0];
    desktop.appendChild(
      document.createTextNode(
        "Please provide a valid email address"
      )
    );
      document.getElementsByTagName("input")[0].style.borderColor = "red";
      return;
    }
    if (ValidateEmail(storeEmail)) {
      document.getElementsByTagName("input")[0].style.borderColor = "hsla(0, 0%, 59%, 0.445)";
      document.getElementById("form-data").submit();
    return;
  }
});

function ValidateEmail(mail) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
  return regex.test(mail);
}
