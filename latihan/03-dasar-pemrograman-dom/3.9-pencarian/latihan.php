<?php

$barang = [
    ['nama' => 'Buku', 'kategori' => 'Alat Tulis'],
    ['nama' => 'Pensil', 'kategori' => 'Alat Tulis'],
    ['nama' => 'Penghapus', 'kategori' => 'Alat Tulis'],
    ['nama' => 'Penggaris', 'kategori' => 'Alat Tulis'],
    ['nama' => 'Tas', 'kategori' => 'Perlengkapan'],
];$kata = trim(readline("Cari barang: "));

if ($kata === '') {
    echo "Kata pencarian tidak boleh kosong." . PHP_EOL;
    exit;
}

$ditemukan = false;

foreach ($barang as $item) {
    if (strtolower($item['nama']) === strtolower($kata)) {
        echo "Ditemukan: " . $item['nama'];
        echo " | Kategori: " . $item['kategori'] . PHP_EOL;
        $ditemukan = true;
    }
}

if (!$ditemukan) {
    echo "Barang tidak ditemukan." . PHP_EOL;
}