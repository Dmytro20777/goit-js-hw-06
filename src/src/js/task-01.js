function quantity() {
  const list = document.querySelector("#categories");
  const items = list.querySelectorAll(".item");

  console.log(`Number of categories: ${items.length}`);

  items.forEach(categoryItem => {
    const title = categoryItem.querySelector("h2").textContent;
    const itemCount = categoryItem.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
  });
}

quantity(); 
