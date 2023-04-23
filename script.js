chrome.storage.local.get("info", function (data) {
  // document.getElementById("content").innerHTML = data.info;
  const ids = data.info;
  console.log("ids", ids);
  fetch("http://localhost:8000/api/query", {
    method: "POST",
    body: JSON.stringify({
      asins: ids,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) {
        console.log("Response received");
        return response.json();
      } else {
        console.warn("Something went wrong", response);
      }
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("product-container").innerHTML = data.map(item => `<p class="content">${item.sus}</p>`);
    });
});

//document.getElementById("content").innerHTML = data.sus;

//document.getElementById("product-container").innerHTML = data.map(item => `<p class="content">${item.sus}</p>`).join('');