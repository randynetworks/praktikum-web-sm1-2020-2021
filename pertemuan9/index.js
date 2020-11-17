import {axios} from './node_modules/axios'
axios.get(`https://blog-randynetworks.ayoboga.com/api/notes`).then((res) => {
  const notes = res.data["notes"];
  const projects = res.data["projects"];
  const podcasts = res.data["podcasts"];
  console.log(notes);
  console.log(projects);
  console.log(podcasts);
});

function ubahText(text) {
  return (document.getElementById("hsatu").innerHTML = text);
}
// 1. HTML Selector -> mirip selector pada css
// 2. Event -> aksi yang digunakan terhadap elemen HTML. Contoh : juka tezt diketik, mouse digerakan dll
// 3. Pemrograman Javascript -> mirip c, c++ dll
// 4. Komunikasi eksternal -> menghubungi resource/file/alamat diluar halaman tersebut. COntoh : WEB API. memanggil gambar, fike json, CSV dll
// 5. Konsep OOP

// Paul.makan("buah") <- method
// Paul.umur <- property

// Contoh Queryselector
const p1 = document.querySelector(".p1"); // Fungsi querySelector, punya output list element HTML
console.log(p1);

// Contoh getElementById
let name = document.getElementById("nama_input");
name.value = "narutooooooo";
console.log(name);

// contoh getElementByName
const inputNama = document.getElementsByName("name");
console.log(inputNama);