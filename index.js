async function loadData() {
  let data = await fetch("./info.json");
  data = await data.json();
  return data;
}

async function main() {
  const container = document.getElementById("container");
  let data = await loadData();
  data = data["Files"];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element);
    container.appendChild(createElement(element.name, element.info, element.url));
  }
}

function createElement(name, info, url) {
  const element = document.createElement("div");
  element.innerHTML = `
    <h2>${name}</h2>
    <p>${info}</p>
    <a href="${url}" target="_blank">Download</a>
  `;
  return element;
}

main();
