console.log("working on index.js");

const form = document.getElementById("form");
const userMsg = document.getElementById("user-messsage")!;

const postData = async (name: string) => {
  return await fetch("http://localhost:4444", { method: "post", body: name })
    .then((res) => {
      if (!res.ok) throw new Error("Not OK!");
      return res.json();
    })
    .catch(
      (error) => null
      // console.error("There has been error while fetching:", error)
    );
};

if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const fullNameElement = document.getElementById(
      "fullname"
    ) as HTMLFormElement;
    const fullNameValue = fullNameElement.value;
    userMsg.textContent = await postData(fullNameValue);

    // console.log(fullNameValue);

    // form.reset();
  });
}
