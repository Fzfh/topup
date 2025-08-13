// server.js
const express = require('express');
const axios = require('axios');
const md5 = require('md5');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // biar frontend bisa akses backend ini

// GANTI dengan punyamu
const merchant_id = "M250804TMXM1976KP";
const api_key     = "db7df82b0e7339388a72c49f2c6a6218187c3a70af12f679723444095d6a36e7";
const game_code   = "mlbb";

// Endpoint cek username
app.get('/cek-username', async (req, res) => {
  const { uid, server } = req.query;

  if (!uid || !server) {
    return res.status(400).json({ error: 'UID dan server wajib diisi.' });
  }

  const user_id = `${uid}(${server})`;
  const signature = md5(merchant_id + api_key + user_id);
  const url = `https://v1.apigames.id/merchant/${merchant_id}/cek-username/${game_code}?user_id=${encodeURIComponent(user_id)}&signature=${signature}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error saat fetch:', error.message);
    res.status(500).json({ error: 'Gagal menghubungi server Apigames.' });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server jalan di http://localhost:${PORT}`);
});
