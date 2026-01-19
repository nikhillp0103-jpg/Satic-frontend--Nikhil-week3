const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");

menuBtn.onclick = () => {
  sidebar.classList.add("open");
};

closeSidebar.onclick = () => {
  sidebar.classList.remove("open");
};
