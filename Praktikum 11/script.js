

let container = document.getElementById('catalogue');

fetch("./data.json")
    .then(hasil=>hasil.json()
).then((j_obj)=>{
    for (let i = 0; i < j_obj.length; i++) {
      let minuman = j_obj[i];

      let kartu = document.createElement('div');
      kartu.className = 'kartu';

      let gambar = document.createElement('img');
      gambar.src = minuman.gambar;

      let nama = document.createElement('h3');
      nama.className = 'nama';
      nama.innerText = minuman.judul;

      let deskripsi = document.createElement('p');
      deskripsi.className = 'deskripsi';
      deskripsi.innerText = minuman.detail;

      let harga = document.createElement('div');
      harga.className = 'harga';
      harga.innerText = minuman.harga;

      kartu.appendChild(gambar);
      kartu.appendChild(nama);
      kartu.appendChild(deskripsi);
      kartu.appendChild(harga);

      container.appendChild(kartu);
    }
  });
