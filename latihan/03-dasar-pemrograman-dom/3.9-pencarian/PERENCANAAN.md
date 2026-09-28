\# Perencanaan Pencarian Barang



\## IPO



\### Input

\- Kata pencarian dari pengguna.



\### Process

\- Hapus spasi di awal dan akhir input.

\- Jika input kosong, tampilkan pesan penolakan.

\- Bandingkan kata pencarian dengan nama barang tanpa membedakan huruf besar/kecil.

\- Jika ditemukan, tampilkan barang.

\- Jika tidak ditemukan, tampilkan pesan bahwa barang tidak ditemukan.



\### Output

\- Hasil pencarian barang.



\## Pseudocode



MULAI

&#x20; siapkan data barang

&#x20; baca kata pencarian

&#x20; hapus spasi awal dan akhir



&#x20; JIKA kata pencarian kosong

&#x20;   tampilkan "Kata pencarian tidak boleh kosong"

&#x20;   SELESAI



&#x20; ditemukan = false



&#x20; UNTUK setiap barang

&#x20;   JIKA nama barang sama dengan kata pencarian tanpa membedakan huruf

&#x20;     tampilkan barang

&#x20;     ditemukan = true

&#x20;   AKHIR JIKA

&#x20; SELESAI UNTUK



&#x20; JIKA ditemukan = false

&#x20;   tampilkan "Barang tidak ditemukan"

&#x20; AKHIR JIKA

SELESAI

