const mainEl = document.querySelector("main"); // task 1.0
mainEl.style.setProperty("background-color", "var(--main-bg)"); // task 1.1

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"; // task 1.2
mainEl.classList.add("flex-ctr"); // task 1.3

const topMenuEl = document.querySelector("#top-menu"); // task 2.0
topMenuEl.style.height = "100%"; // task 2.1
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"; // task 2.2
topMenuEl.classList.add("flex-around") // task 2.3

// task 3.0
// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// task 3.1
for (const link of menuLinks) { // Iterate over the entire menuLinks array and for each "link" object:
  const linkEl = document.createElement("a"); // Create an <a> element
  linkEl.setAttribute("href", link.href); // On the new element, add an href attribute with its value set to the href property of the "link" object.
  linkEl.textContent = link.text; // Set the new element's content to the value of the text property of the "link" object.
  topMenuEl.appendChild(linkEl); //Append the new element to the topMenuEl element.
}
