console.log("working on index.js");

fetch("http://localhost:4444")
  .then((res) => {
    if (!res.ok) throw new Error("Not OK!");

    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("There has been error while fetching:", error));
