const dataBarang = [
    { nama: "Buku", kategori: "Alat Tulis" },
    { nama: "Pensil", kategori: "Alat Tulis" },
    { nama: "Penghapus", kategori: "Alat Tulis" },
    { nama: "Penggaris", kategori: "Alat Tulis" },
    { nama: "Tas", kategori: "Perlengkapan" }
];

const formPencarian = document.getElementById("formPencarian");
const inputPencarian = document.getElementById("inputPencarian");
const hasilPencarian = document.getElementById("hasilPencarian");
const pesan = document.getElementById("pesan");

formPencarian.addEventListener("submit", function (event) {
    event.preventDefault();

    const kata = inputPencarian.value.trim();

    hasilPencarian.innerHTML = "";
    pesan.textContent = "";

    if (kata === "") {
        pesan.textContent = "Kata pencarian tidak boleh kosong.";
        inputPencarian.focus();
        return;
    }

    const hasil = dataBarang.filter(function (barang) {
        return barang.nama.toLowerCase().includes(kata.toLowerCase());
    });

    if (hasil.length === 0) {
        pesan.textContent = "Barang tidak ditemukan.";
        return;
    }

    for (const barang of hasil) {
        const item = document.createElement("li");
        item.textContent = barang.nama + " - " + barang.kategori;
        hasilPencarian.appendChild(item);
    }
});