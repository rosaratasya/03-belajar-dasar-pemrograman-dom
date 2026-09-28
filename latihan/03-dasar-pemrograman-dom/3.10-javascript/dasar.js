let nama = "Rosa";
let umur = 17;
let aktif = true;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Aktif:", aktif);
function kategoriNilai(nilai) {
    if (nilai < 0 || nilai > 100) {
        return "Nilai tidak valid";
    }

    if (nilai >= 90) {
        return "Sangat baik";
    }

    if (nilai >= 75) {
        return "Baik";
    }

    return "Perlu belajar lagi";
}

console.log(kategoriNilai(74));
console.log(kategoriNilai(75));
console.log(kategoriNilai(89));
console.log(kategoriNilai(90));
console.log(kategoriNilai(101));
const tugas = [
    { nama: "Mengerjakan laporan", selesai: true },
    { nama: "Belajar JavaScript", selesai: false },
    { nama: "Push ke GitHub", selesai: true }
];

for (const item of tugas) {
    console.log(item.nama, "-", item.selesai ? "Selesai" : "Belum selesai");
}
let jumlahBelumSelesai = 0;

for (const item of tugas) {
    if (!item.selesai) {
        jumlahBelumSelesai++;
    }
}

console.log("Jumlah tugas belum selesai:", jumlahBelumSelesai);