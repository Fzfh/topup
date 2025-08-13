const diamondMenu = document.getElementById('diamond');
        const membershipMenu = document.getElementById('membership');
        const nominalContainer = document.getElementById('nominalContainer');

        const diamondNominals = `
            <div class="denom-item" onclick="selectDenom(this, '10 Diamond', 'Rp 3.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>10 Diamond</p>
                <p>Rp 3.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '50 Diamond', 'Rp 8.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>50 Diamond</p>
                <p>Rp 8.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '75 Diamond', 'Rp 11.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>75 Diamond</p>
                <p>Rp 11.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '140 Diamond', 'Rp 19.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>140 Diamond</p>
                <p>Rp 19.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '210 Diamond', 'Rp 27.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>210 Diamond</p>
                <p>Rp 27.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '355 Diamond', 'Rp 44.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>355 Diamond</p>
                <p>Rp 44.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '425 Diamond', 'Rp 53.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>425 Diamond</p>
                <p>Rp 53.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '515 Diamond', 'Rp 64.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>515 Diamond</p>
                <p>Rp 64.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '655 Diamond', 'Rp 80.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>655 Diamond</p>
                <p>Rp 80.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '720 Diamond', 'Rp 85.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>720 Diamond</p>
                <p>Rp 85.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '925 Diamond', 'Rp 110.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>925 Diamond</p>
                <p>Rp 110.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '1200 Diamond', 'Rp 143.000')">
                <img src="https://i.imgur.com/6VLiXvj.png" alt="">
                <p>1200 Diamond</p>
                <p>Rp 143.000</p>
            </div>
        `;
        
        const membershipNominals = `
            <div class="denom-item" onclick="selectDenom(this, 'Member Mingguan', 'Rp 27.000')">
                <img src="https://i.imgur.com/kvo6nDM.jpeg" alt="">
                <p>Member Mingguan</p>
                <p>Rp 27.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, 'Mingguan + 20dm', 'Rp 32.000')">
                <img src="https://i.imgur.com/kvo6nDM.jpeg" alt="">
                <p>Mingguan + 20dm</p>
                <p>Rp 32.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, 'Member Bulanan', 'Rp 77.000')">
                <img src="https://i.imgur.com/kvo6nDM.jpeg" alt="">
                <p>Member Bulanan</p>
                <p>Rp 77.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, 'Bulanan + 20dm', 'Rp 85.000')">
                <img src="https://i.imgur.com/kvo6nDM.jpeg" alt="">
                <p>Bulanan + 20dm</p>
                <p>Rp 85.000</p>
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