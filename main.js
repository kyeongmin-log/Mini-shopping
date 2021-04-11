// 버튼 및 아이템들
const itemBtn = document.querySelector(".item-list .item-btn");
const items = document.querySelector(".item-list .items");

// t button
const t_Btn = itemBtn.querySelector(".t-shirt");
const t_items = items.querySelectorAll("li:not(.t)");

t_Btn.addEventListener("click", () => {
  t_items.forEach((t_item) => {
    t_item.classList.toggle("hidden");
  });
});

// p button
const p_Btn = itemBtn.querySelector(".pants");
const p_items = items.querySelectorAll("li:not(.p)");

p_Btn.addEventListener("click", () => {
  items.classList.remove("hidden");
  p_items.forEach((p_item) => {
    p_item.classList.toggle("hidden");
  });
});

// s button
const s_Btn = itemBtn.querySelector(".skirt");
const s_items = items.querySelectorAll("li:not(.s)");

s_Btn.addEventListener("click", () => {
  s_items.forEach((s_item) => {
    s_item.classList.toggle("hidden");
  });
});

// blue button
const blue_Btn = itemBtn.querySelector(".blue");
const blue_items = items.querySelectorAll("li:not(.blue)");

blue_Btn.addEventListener("click", () => {
  blue_items.forEach((blue_item) => {
    blue_item.classList.toggle("hidden");
  });
});

// yellow button
const yellow_Btn = itemBtn.querySelector(".yellow");
const yellow_items = items.querySelectorAll("li:not(.yellow)");

yellow_Btn.addEventListener("click", () => {
  yellow_items.forEach((yellow_item) => {
    yellow_item.classList.toggle("hidden");
  });
});

// pink button
const pink_Btn = itemBtn.querySelector(".pink");
const pink_items = items.querySelectorAll("li:not(.pink)");

pink_Btn.addEventListener("click", () => {
  pink_items.forEach((pink_item) => {
    pink_item.classList.toggle("hidden");
  });
});
