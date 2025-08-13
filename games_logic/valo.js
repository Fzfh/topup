const diamondMenu = document.getElementById('diamond');
const membershipMenu = document.getElementById('membership');
const nominalContainer = document.getElementById('nominalContainer');

const diamondNominals = `
    <div class="denom-item" onclick="selectDenom(this, '10 Diamond', 'Rp 3.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>10 Diamond</p>
        <p>Rp 3.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '44 Diamond', 'Rp 13.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>44 Diamond</p>
        <p>Rp 13.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '70 Diamond', 'Rp 22.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>70 Diamond</p>
        <p>Rp 22.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '86 Diamond', 'Rp 26.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>86 Diamond</p>
        <p>Rp 26.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '112 Diamond', 'Rp 33.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>112 Diamond</p>
        <p>Rp 33.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '185 Diamond', 'Rp 51.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>185 Diamond</p>
        <p>Rp 51.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '257 Diamond', 'Rp 69.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>257 Diamond</p>
        <p>Rp 69.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '284 Diamond', 'Rp 78.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>284 Diamond</p>
        <p>Rp 78.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '355 Diamond', 'Rp 96.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>355 Diamond</p>
        <p>Rp 95.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '429 Diamond', 'Rp 115.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>429 Diamond</p>
        <p>Rp 115.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '514 Diamond', 'Rp 135.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>514 Diamond</p>
        <p>Rp 135.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, '878 Diamond', 'Rp 225.000')">
        <img src="https://i.imgur.com/dAJiXv4.png" alt="">
        <p>878 Diamond</p>
        <p>Rp 225.000</p>
    </div>
`;

const membershipNominals = `
    <div class="denom-item" onclick="selectDenom(this, 'MLBB Weekly Diamond Pass', 'Rp 29.000')">
        <img src="https://i.imgur.com/PmJnFKp.png" alt="">
        <p>MLBB Weekly Diamond Pass</p>
        <p>Rp 29.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, 'MLBB Weekly Diamond Pass 2x', 'Rp 57.000')">
        <img src="https://i.imgur.com/PmJnFKp.png" alt="">
        <p>MLBB Weekly Diamond Pass 2x</p>
        <p>Rp 57.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, 'MLBB Weekly Diamond Pass 3x', 'Rp 85.000')">
        <img src="https://i.imgur.com/PmJnFKp.png" alt="">
        <p>MLBB Weekly Diamond Pass 3x</p>
        <p>Rp 85.000</p>
    </div>
    <div class="denom-item" onclick="selectDenom(this, 'TWILIGHT Member', 'Rp 147.000')">
        <img src="https://i.imgur.com/PmJnFKp.png" alt="">
        <p>TWILIGHT Member</p>
        <p>Rp 147.000</p>
    </div>
`;

let selectedDenom = "";
let selectedPrice = "";

function updateNominalList(menuType) {
    if (menuType === 'diamond') {
        nominalContainer.innerHTML = diamondNominals;
        diamondMenu.classList.add('selected');
        membershipMenu.classList.remove('selected');
    } else {
        nominalContainer.innerHTML = membershipNominals;
        membershipMenu.classList.add('selected');
        diamondMenu.classList.remove('selected');
    }
}

function selectDenom(element, denom, price) {
    selectedDenom = denom;
    selectedPrice = price;
    const items = document.querySelectorAll('.denom-item');
    items.forEach(item => item.classList.remove('selected'));
    element.classList.add('selected');
    alert(`Anda memilih: ${denom} - ${price}`);
}

function showPaymentForm() {
    if (selectedDenom && selectedPrice) {
        document.getElementById("selectedDenom").textContent = `Diamond: ${selectedDenom}`;
        document.getElementById("selectedPrice").textContent = `Harga: ${selectedPrice}`;
        document.getElementById("formPembayaran").style.display = "block"; 
    } else {
        alert("Pilih diamond terlebih dahulu.");
    }
}