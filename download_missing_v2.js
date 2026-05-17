const fs = require('fs');
const https = require('https');

const files = [
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/04/dentist-icon-white-6.png", dest: "assets/iconos-color/odontopediatria.png" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Implantolog%C3%ADa-Gales.png", dest: "assets/iconos-color/implantologia.png" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Reabilitaci%C3%B3n-Odontolog%C3%ADa-Gales.png", dest: "assets/iconos-color/rehabilitacion-oral.png" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Est%C3%A9tica-Facial-1.png", dest: "assets/iconos-color/estetica-facial.png" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Cirug%C3%ADa-Bucal-Gales.png", dest: "assets/iconos-color/cirugia-bucal.png" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Prevenci%C3%B3n.png", dest: "assets/iconos-color/prevencion.png" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Dr.-Oscar-Oviedo-Mu%C3%B1oz.jpg", dest: "assets/equipo/oscar-oviedo.jpg" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Dra.-Alejandra-Gonz%C3%A1lez-Saavedra.jpeg", dest: "assets/equipo/alejandra-gonzalez.jpeg" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Dra.-Mar%C3%ADa-Soledad-Fortu%C3%B1o.jpg", dest: "assets/equipo/maria-fortuno.jpg" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/05/Dr.-Pablo-Andr%C3%A9s-Santiba%C3%B1ez-Piana.jpg", dest: "assets/equipo/pablo-santibanez.jpg" },
  { url: "https://odontologiadegales.cl/wp-content/uploads/2021/07/Dra.-Camila-Lavin-Odontolog%C3%ADa-de-Gales-1.jpeg", dest: "assets/equipo/camila-lavin.jpeg" }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://odontologiadegales.cl/',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
      }
    };
    https.get(url, options, (response) => {
      if (response.statusCode === 200 || response.statusCode === 304) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${dest}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${dest}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(`Error downloading ${dest}: ${err.message}`);
    });
  });
};

async function run() {
  for (const item of files) {
    try {
      await download(item.url, item.dest);
    } catch (err) {
      console.error(err);
    }
  }
}

run();
