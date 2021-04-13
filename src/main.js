// 로고 클릭 시 전체 아이템을 보여준다.
function setClickedLogo(items) {
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    displayItems(items);
  });
}
// 클릭된 버튼과 동일한 key, value를 가진 아이템을 displayItems 함수를 통해 보여준다.
function onSelectBtn(dataSet, items) {
  const key = dataSet.key;
  const value = dataSet.value;
  const showItems = items.filter((item) => item[key] === value);
  if ((showItems == "") | (showItems == undefined)) {
    displayItems(items);
  } else {
    displayItems(showItems);
  }
}
// 클릭된 버튼을 구분하기 위해 데이터 셋을 가져와 onSelectBtn 함수로 넘긴다.
function setEventListeners(items) {
  const btn = document.querySelector(".buttons");
  btn.addEventListener("click", (event) => {
    const dataSet = event.target.dataset;
    onSelectBtn(dataSet, items);
  });
}
// 가져온 object를 string으로 변환하여 return한다.
function createString(item) {
  return `
  <li class="item">
      <img src=${item.img} alt=${item.type} class="item__thumbnail" />
      <span class="item__descrition">${item.gender}, ${item.size} Size</span>
  </li>
  `;
}
// 가져온 데이터를 html에 보여준다.
function displayItems(items) {
  const list = document.querySelector(".items");
  list.innerHTML = items.map((item) => createString(item)).join("");
}
// 데이터를 fetch()를 통해 가져온다.
function loadItems() {
  return fetch("../data/data.json") //
    .then((response) => response.json())
    .then((json) => json.items);
}

//main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
    setClickedLogo(items);
  })
  .catch(console.log);
