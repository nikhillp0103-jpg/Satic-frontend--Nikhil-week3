// mobile menu toggle
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("navLinks").classList.toggle("active");
};

// modal handling
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
