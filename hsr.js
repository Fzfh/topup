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

document.getElementById('pay-btn').addEventListener('click', function () {
    if (selectedItem) {
        document.getElementById('payment-form').style.display = 'block';
    } else {
        alert("Pilih item terlebih dahulu.");
    }
});