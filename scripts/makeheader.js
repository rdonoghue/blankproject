"use strict";
const pageHeader = document.querySelector("header");

const headerContent = ` 
<div class="overlay"></div>
<div class="hamburger">
<img src="img/menu.png" class="menuburger" />
</div>

<ul id="navigator">
<li><a href="">About</a></li>
<li><a href="">Stuff</a></li>
<li><a href="">Stuff</a></li>
<li><a href="">Stuff</a></li>
<li><a href="">Stuff</a></li>
<li><a href="">Stuff</a></li>


`;

makeHeader();
function makeHeader() {
  pageHeader.innerHTML = headerContent;
  console.log("Header updated");
}
