<?php
$stok = 100;

if ($stok < 0) {
    echo "Tidak valid";
} elseif ($stok === 0) {
    echo "Habis";
} else {
    echo "Tersedia";
}