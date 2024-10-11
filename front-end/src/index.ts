console.log("working on index.js");

const form = document.getElementById("form");
const userMsg = document.getElementById("user-messsage")!;

const postData = async (name: string) => {
  const fetchData = await fetch("http://localhost:4444", {
    method: "post",
    body: name,
  });
  const data = await fetchData.json();
  return data;

  // .catch(
  //   (error) => null
  //   // console.error("There has been error while fetching:", error)
  // );
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
