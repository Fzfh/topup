document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("cari").value.toLowerCase();

  if (query.includes("free fire") || query.includes("ff") || query.includes("epep")) {
    window.location.href = "free-fire.html";
  } else if (query.includes("mobile legend") || query.includes("mlbb") || query.includes("emel")) {
    window.location.href = "Mobile-Legend.html";
  } 
  else if (query.includes("high domino") || query.includes("domino")) {
    window.location.href = "domino-menu.html";
  }
  else if (query.includes("valorant") || query.includes("valo")) {
    window.location.href = "valo.html";
  }
  else if (query.includes("pubg") || query.includes("pabji")) {
    window.location.href = "pubg.html";
  }
  else if (query.includes("genshin impact") || query.includes("genshin") || query.includes("game kikir") || query.includes("gi")) {
    window.location.href = "Genshin.html";
  }
  else if (query.includes("honor of kings") || query.includes("hok")) {
    window.location.href = "hok.html";
  }
  else if (query.includes("honkai star rail") || query.includes("hsr") || query.includes("honkai")) {
    window.location.href = "hsr.html";
  }else {
    alert("Game tidak ditemukan. Silakan coba lagi!");
  }
});

// Ngambil elemen yang ada di html id ngab
const slider = document.getElementById('home');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const choose1 = document.getElementById('choose_1');
const choose2 = document.getElementById('choose_2');
const choose3 = document.getElementById('choose_3');
const indikator = document.querySelectorAll('.indikator span');

// Ini Buat mengubah slide ngab
function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('aktif');
    indikator[i].classList.remove('aktif');
  }
  slides[0].classList.add('aktif');
  indikator[0].classList.add('aktif');
}

// Ini mengubah slide ke sebelumnya ngab
function prevSlide() {
  if (choose1.checked) {
    choose3.checked = true;
  } else if (choose2.checked) {
    choose1.checked = true;
  } else {
    choose2.checked = true;
  }
}


// Dan Ini Nerusin slide ke selanjutnya ngab ditombol
function nextSlide() {
  if (choose1.checked) {
    choose2.checked = true;
  } else if (choose2.checked) {
    choose3.checked = true;
  } else {
    choose1.checked = true;
  }
}

// Menambahkan event listener ngab
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

// Ini Mengatur interval waktu untuk mengubah slide ngab
setInterval(nextSlide, 5000);

// Mengubah slide secara otomatis ngab
changeSlide();