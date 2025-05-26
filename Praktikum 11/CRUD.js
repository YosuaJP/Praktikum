var produkList = JSON.parse(localStorage.getItem("produkList")) || [];

function generateId() {
  var max = 0;
  for (var i = 0; i < produkList.length; i++) {
    if (produkList[i].id > max) {
      max = produkList[i].id;
    }
  }
  return max + 1;
}

function renderTable() {
  var tabel = document.getElementById("tabelProduk");
  tabel.innerHTML = "";

  if (produkList.length === 0) {
    var kosong = document.createElement("tr");
    kosong.innerHTML = "<td colspan='6' class = \"noProduct\">Tidak ada produk</td>";
    tabel.appendChild(kosong);
    return;
  }

  for (var i = 0; i < produkList.length; i++) {
    var p = produkList[i];
    var baris = document.createElement("tr");

    baris.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nama}</td>
      <td>${formatRupiah(p.harga)}</td>
      <td>${p.stok}</td>
      <td>${p.deskripsi}</td>
      <td>
        <button class="edit" onclick="editProduct(${p.id})">Edit</button>
        <button class="hapus" onclick="deleteProduct(${p.id})">Hapus</button>
      </td>
    `;

    tabel.appendChild(baris);
  }
}

function formatRupiah(angka) {
  return parseInt(angka).toLocaleString("id-ID");
}

function resetForm() {
  document.getElementById("formProduk").reset();
  document.getElementById("id").value = "";
  document.getElementById("submitBtn").textContent = "Simpan Produk";
}

function saveData() {
  localStorage.setItem("produkList", JSON.stringify(produkList));
  renderTable();
  resetForm();
}

function addProduct(data) {
  produkList.push(data);
  saveData();
}

function updateProduct(data) {
  for (var i = 0; i < produkList.length; i++) {
    if (produkList[i].id === data.id) {
      produkList[i] = data;
      break;
    }
  }
  saveData();
}

function editProduct(id) {
  for (var i = 0; i < produkList.length; i++) {
    if (produkList[i].id === id) {
      var p = produkList[i];
      document.getElementById("id").value = p.id;
      document.getElementById("nama").value = p.nama;
      document.getElementById("harga").value = p.harga;
      document.getElementById("stok").value = p.stok;
      document.getElementById("deskripsi").value = p.deskripsi;
      document.getElementById("submitBtn").textContent = "Update Produk";
      break;
    }
  }
}

function deleteProduct(id) {
  var yakin = confirm("Apakah Anda yakin ingin menghapus produk ini?");
  if (yakin) {
    for (var i = 0; i < produkList.length; i++) {
      if (produkList[i].id === id) {
        produkList.splice(i, 1);
        break;
      }
    }
    saveData();
  }
}

document.getElementById("formProduk").onsubmit = function(e) {
  e.preventDefault();

  var id = document.getElementById("id").value;
  var nama = document.getElementById("nama").value;
  var harga = document.getElementById("harga").value;
  var stok = document.getElementById("stok").value;
  var deskripsi = document.getElementById("deskripsi").value;

  var produkBaru = {
    id: id === "" ? generateId() : parseInt(id),
    nama: nama,
    harga: harga,
    stok: stok,
    deskripsi: deskripsi
  };

  if (id === "") {
    addProduct(produkBaru);
  } else {
    updateProduct(produkBaru);
  }
};

renderTable();
