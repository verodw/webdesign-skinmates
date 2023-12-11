// product.js
import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
// Fungsi untuk mengambil data dari API
async function fetchData() {
  try {
    const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=3.5&rating_less_than=4.2&price_greater_than=7.5&price_less_than=9.5';
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Gagal mengambil data dari API');
    }

    const data = await response.json();
    displayData(data); // Panggil fungsi untuk menampilkan data
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Fungsi untuk menampilkan data ke dalam DOM
function displayData(data) {
  // Gantilah bagian ini sesuai dengan kebutuhan tampilan Anda
  // Contoh: Menampilkan judul produk ke dalam console
  data.forEach(product => {
    console.log('Judul Produk:', product.name);
  });
}

// Panggil fungsi fetchData untuk mendapatkan data dari API
fetchData();

const Product = () => {
  return(
    <div>
      <Navbar status='login' />
      <h2>Product Page</h2>
      {/* nanti masukin elemen" lain disini */}
      <Footer status='login' />
    </div>
  );
};

export default Product;
