const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");
const cartoona = document.getElementById("cartoona");
const overlay = document.getElementById("overlay");
const mainPageSection = document.getElementById("main");
const descPageSection = document.getElementById("description");
const detailedSection = document.getElementById("detailed");

const CATEGORY = window.location.search.split("=")[1] || "mmorpg";

navCollapse.addEventListener("click", (e) => {
  activateNavLink(e);
});

function activateNavLink() {
  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].id === CATEGORY) navLinks[i].classList.add("current");
    else navLinks[i].classList.remove("current");
  }
}

activateNavLink();

const showData = async () => {
  const data = await fetchGames(CATEGORY);
  overlay.classList.add("d-none");
  let cartona = "";
  for (let i = 0; i < data.length; i++) {
    cartona += `<a class="col-lg-3 col-sm-6" href='/desc.html?id=${data[i].id}'>
        <div>
          <div class="card text-center">
            <header class="list-group-item p-3">
              <img src="${data[i].thumbnail}" alt="${data[i].title}" class="w-100 mb-3" />
              <div class="upper d-flex justify-content-between mb-3">
                <h6 class="text-light">${data[i].title}</h6>
                <div class="badge bg-primary footerbadge">Free</div>
              </div>
              <p class="m-0 desc" title="${data[i].short_description}">${data[i].short_description}</p>
            </header>
            <footer class="list-group-item d-flex justify-content-between p-2">
              <span class="badge bg-primary">${data[i].genre}</span>
              <span class="badge bg-primary">${data[i].platform}</span>
            </footer>
          </div>
        </div>
    </a>`;
  }
  cartoona.innerHTML = cartona;
};

showData();