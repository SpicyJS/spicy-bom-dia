console.log("working on index.js");

const form = document.getElementById("form");
const userMsg = document.getElementById("user-messsage")!;

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const fullNameElement = document.getElementById(
      "fullname"
    ) as HTMLFormElement;
    const fullNameValue = fullNameElement.value;
    userMsg.textContent = `Bom dia ${fullNameValue}!`;
    console.log(fullNameValue);

    // form.reset();
  });
}
// fetch("http://localhost:4444")
//   .then((res) => {
//     if (!res.ok) throw new Error("Not OK!");

//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) =>
//     console.error("There has been error while fetching:", error)
//   );
