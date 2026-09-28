const formTugas = document.getElementById("formTugas");
const inputTugas = document.getElementById("inputTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesan = document.getElementById("pesan");

formTugas.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaTugas = inputTugas.value.trim();

    if (namaTugas === "") {
        pesan.textContent = "Tugas tidak boleh kosong.";
        inputTugas.focus();
        return;
    }

    pesan.textContent = "";

    const item = document.createElement("li");
    item.textContent = namaTugas;

    const tombolSelesai = document.createElement("button");
    tombolSelesai.textContent = "Selesai";

    tombolSelesai.addEventListener("click", function () {
        item.style.textDecoration = "line-through";
    });

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";

    tombolHapus.addEventListener("click", function () {
        item.remove();
    });

    item.append(" ", tombolSelesai, " ", tombolHapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    inputTugas.focus();
});