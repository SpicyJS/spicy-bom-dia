console.log("working on index.js");

const form = document.getElementById("form");
const userMsg = document.getElementById("user-messsage")!;

const postData = (name: string) => {
  fetch("http://localhost:4444", { method: "post", body: name })
    .then((res) => {
      if (!res.ok) throw new Error("Not OK!");

      return res;
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("There has been error while fetching:", error));
};

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const fullNameElement = document.getElementById("fullname") as HTMLFormElement;
    const fullNameValue = fullNameElement.value;
    userMsg.textContent = `Bom dia ${fullNameValue}!`;
    console.log(fullNameValue);
    postData(fullNameValue);
    // form.reset();
  });
}
