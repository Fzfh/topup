// 🔍 Fitur Pencarian Item (fitur filter live)
document.getElementById('search').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const text = item.querySelector('p').textContent.toLowerCase();
        item.style.display = text.includes(searchQuery) ? 'flex' : 'none';
    });
});

// 🔎 Cek Validitas ID Game via BACKEND (AMAN!)
document.getElementById('search-id').addEventListener('click', async function () {
    const gameId = document.getElementById('uid').value.trim();
    const server = document.getElementById('server').value.trim();

    if (!gameId || !server) {
        return alert('Masukkan ID dan Server terlebih dahulu!');
    }

    const url = `/cek-username?uid=${encodeURIComponent(gameId)}&server=${encodeURIComponent(server)}`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        if (result?.data?.username) {
            alert(`✅ ID Valid!\nNickname: ${result.data.username}\nUID: ${gameId}\nServer: ${server}`);
        } else {
            alert("❌ Data tidak ditemukan. Periksa kembali ID & server kamu.");
        }
    } catch (err) {
        console.error("🚨 Gagal fetch:", err);
        alert("Terjadi kesalahan saat cek ID. Coba lagi nanti.");
    }
});

// 🧾 Fitur Pilih Item Topup
let selectedItem = null;

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function () {
        if (selectedItem) {
            selectedItem.style.border = "1px solid #007BFF";
        }

        selectedItem = item;
        item.style.border = "2px solid #2C2546";

        document.getElementById('pay-btn').style.display = 'block';
    });
});

// 💳 Tombol Bayar Muncul Setelah Item Dipilih
document.getElementById('pay-btn').addEventListener('click', function () {
    if (selectedItem) {
        document.getElementById('payment-form').style.display = 'block';
    } else {
        alert("⚠️ Pilih item terlebih dahulu.");
    }
});
