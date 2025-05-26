var tombol = document.getElementById('tombol');
var kontainer = document.getElementById('tempat');
var judulNow = document.getElementById('judul');

tombol.onclick = function () {
  fetch("Datamovie.json")
    .then(hasil=>hasil.json()
).then((j_obj)=>{

      for (var i = 0; i < j_obj.length; i++) {
        var film = j_obj[i];

        var kotak = document.createElement('div');
        kotak.className = 'kartu';

        var gambar = document.createElement('img');
        gambar.src = film.img;
        gambar.alt = film.title;

        var judul = document.createElement('h3');
        judul.innerText = film.title;

        var genre = document.createElement('p');
        genre.innerText = film.genre;

        kotak.appendChild(gambar);
        kotak.appendChild(judul);
        kotak.appendChild(genre);

        kontainer.appendChild(kotak);
      }

      tombol.style.display = 'none';
    });
};
