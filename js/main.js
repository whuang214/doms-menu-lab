console.log("main.js loaded");

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
let menuLinks = [
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

const subMenuEl = document.querySelector("#sub-menu"); // task 4.0
subMenuEl.style.height = "100%"; // task 4.1
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"; // task 4.2
subMenuEl.classList.add("flex-around") // task 4.3
subMenuEl.style.position = "absolute"; // task 4.4
subMenuEl.style.top = "0"; // task 4.5

// task 5.0
menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// task 5.1
const topMenuLinks = document.querySelectorAll("#top-menu a"); 
let showingSubMenu = false; 

// task 5.2
topMenuEl.addEventListener("click", function(e) { 
  e.preventDefault(); 
  if (e.target.tagName !== "A") return;
  console.log(e.target.textContent);

  // task 5.3
  if (e.target.classList.contains("active")) { // if we click again on the same link that is active
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  // task 5.4
  for (const link of topMenuLinks) { // if we click on a different link than the one that is active
    link.classList.remove("active");
  }

  // task 5.5
  e.target.classList.add("active"); // add active class to the link that was clicked

  // task 5.6
  showingSubMenu = menuLinks.find(link => link.text === e.target.textContent).subLinks ? true : false; // if the link that was clicked has sublinks, set showingSubMenu to true, otherwise set it to false (looking at you about page)
  
  // console.log(showingSubMenu);

  // task 5.7
  if (showingSubMenu) {
    buildSubMenu(menuLinks.find(link => link.text === e.target.textContent).subLinks); 
    subMenuEl.style.top = "100%"; // show the sub menu
  }
  else { // about page
    subMenuEl.style.top = "0"; // hide the sub menu
    mainEl.innerHTML = "<h1>about</h1>"; // show the about page
  }

});

// task 5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = ""; // clear the sub menu
  for (const link of subLinks) { 
    const linkEl = document.createElement("a"); 
    linkEl.setAttribute("href", link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  }
}

// task 6.0
subMenuEl.addEventListener("click", function(e) {
  e.preventDefault();
  if (e.target.tagName !== "A") return;
  // console.log(e.target.textContent);

  // task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  // task 6.2
  for (const link of topMenuLinks) {
    link.classList.remove("active");
  }

  // task 6.3
  mainEl.innerHTML = `<h1>${e.target.textContent}</h1>` 

});








