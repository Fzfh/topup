const diamondMenu = document.getElementById('diamond');
        const membershipMenu = document.getElementById('membership');
        const nominalContainer = document.getElementById('nominalContainer');

        const diamondNominals = `
            <div class="denom-item" onclick="selectDenom(this, '60 Genesis', 'Rp 13.000')">
                <img src="https://i.imgur.com/dAJiXv4.png" alt="">
                <p>60 Genesis</p>
                <p>Rp 13.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '>330+30 Genesis', 'Rp 60.000')">
                <img src="https://i.imgur.com/dAJiXv4.png" alt="">
                <p>330+30 Genesis</p>
                <p>Rp 60.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '>980+110 Genesis', 'Rp 173.000')">
                <img src="https://i.imgur.com/dAJiXv4.png" alt="">
                <p>980+110 Genesis</p>
                <p>Rp 173.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '1980+260 Genesis', 'Rp 375.000')">
                <img src="https://i.imgur.com/dAJiXv4.png" alt="">
                <p>1980+260 Genesis</p>
                <p>Rp 375.000</p>
            </div>
            <div class="denom-item" onclick="selectDenom(this, '3280+600 Genesis', 'Rp 577.000')">
                <img src="https://i.imgur.com/dAJiXv4.png" alt="">
                <p>3280+600 Genesis</p>
                <p>Rp 577.000</p>
            </div>
        `;
        
        const membershipNominals = `
            <div class="denom-item" onclick="selectDenom(this, 'MLBB Weekly Diamond Pass', 'Rp 29.000')">
                <img src="https://i.imgur.com/PmJnFKp.png" alt="">
                <p>Blessing of the Welkin</p>
                <p>Rp 60.000</p>
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