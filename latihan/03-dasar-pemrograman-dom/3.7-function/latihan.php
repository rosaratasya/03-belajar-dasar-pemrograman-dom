<?php

function totalBelanja(string $nama, int $harga, int $jumlah): int
{
    $total = $harga * $jumlah;
    echo $nama . ': ' . $total . PHP_EOL;

    return $total;
}

totalBelanja('Buku', 5000, 2);
totalBelanja('Pensil', 2000, 3);