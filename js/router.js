const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.value);
    handleLocation();
};

const routes = {
    404:"/pages/404.js",
    "/": "/pages/home.js",
    "/elumin": "/pages/elumin.js",
    "/firestage": "/pages/firestage.js",
    "/about": "/pages/about.js",
    "/showreel-2024": "/pages/showreel-2024.js",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
