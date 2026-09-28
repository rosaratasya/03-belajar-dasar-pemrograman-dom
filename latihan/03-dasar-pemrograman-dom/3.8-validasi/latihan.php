<?php

function diskonValid(string $input): bool
{
    $teks = trim($input);

    if ($teks === '' || !ctype_digit($teks)) {
        return false;
    }

    $diskon = (int) $teks;

    return $diskon >= 0 && $diskon <= 100;
}

foreach (['', 'abc', '0', '50', '100', '101'] as $input) {
    echo $input . ': ' . (diskonValid($input) ? 'valid' : 'ditolak');
    echo PHP_EOL;
}