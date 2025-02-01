const photos = document.querySelectorAll(".photo img");
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");

    modal.style.display = "flex";
    modalImg.src = photos[currentIndex].src;
    modalCaption.innerText = photos[currentIndex].parentElement.querySelector('.caption').innerText;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeImage(step) {
    currentIndex = (currentIndex + step + photos.length) % photos.length;
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");

    modalImg.src = photos[currentIndex].src;
    modalCaption.innerText = photos[currentIndex].parentElement.querySelector('.caption').innerText;
}
