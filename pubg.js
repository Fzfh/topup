// Pencarian item
document.getElementById('search').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const text = item.querySelector('p').textContent.toLowerCase();
        if (text.includes(searchQuery)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
  });

// Cari ID Game dan Server
document.getElementById('search-id').addEventListener('click', function () {
    const gameId = document.getElementById('game-id').value.trim();
    const server = document.getElementById('server').value;

    if (!gameId) {
        alert('Masukkan ID Game terlebih dahulu!');
    } else {
        console.log(`ID Game: ${gameId}, Server: ${server}`);
        alert(`ID Game: ${gameId}\nServer: ${server}`);
    }
});

// Menambahkan event listener ke setiap item untuk memilih item yang dibayar
let selectedItem = null;

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function () {
        // Hapus highlight dari item yang sebelumnya dipilih
        if (selectedItem) {
            selectedItem.style.border = "1px solid #007BFF";
        }

        // Tandai item yang dipilih
        selectedItem = item;
        item.style.border = "2px solid #2C2546";

        // Tampilkan tombol bayar
        document.getElementById('pay-btn').style.display = 'block';
    });
});

// Tombol bayar untuk membuka form pembayaran
document.getElementById('pay-btn').addEventListener('click', function () {
    if (selectedItem) {
        document.getElementById('payment-form').style.display = 'block';
    } else {
        alert("Pilih item terlebih dahulu.");
    }
});