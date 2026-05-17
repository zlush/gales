const https = require('https');

const testUrls = [
  "https://odontologiadegales.cl/wp-content/uploads/2021/05/Implantologia-Gales.png",
  "https://odontologiadegales.cl/wp-content/uploads/2021/05/Implantolog%C3%ADa-Gales.png",
  "https://odontologiadegales.cl/wp-content/uploads/2021/05/Reabilitacion-Odontologia-Gales.png",
  "https://odontologiadegales.cl/wp-content/uploads/2021/05/Dr.-Oscar-Oviedo-Munoz.jpg",
  "https://odontologiadegales.cl/wp-content/uploads/2021/05/Dra.-Alejandra-Gonzalez-Saavedra.jpeg",
  "https://odontologiadegales.cl/wp-content/uploads/2021/05/Dra.-Maria-Soledad-Fortuno.jpg",
  "https://odontologiadegales.cl/wp-content/uploads/2021/05/Dr.-Pablo-Andres-Santibanez-Piana.jpg",
  "https://odontologiadegales.cl/wp-content/uploads/2021/07/Dra.-Camila-Lavin-Odontologia-de-Gales-1.jpeg"
];

const checkUrl = (url) => {
  return new Promise((resolve) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://odontologiadegales.cl/'
      }
    };
    https.get(url, options, (res) => {
      console.log(`[${res.statusCode}] ${url}`);
      resolve();
    }).on('error', () => resolve());
  });
};

async function run() {
  for (const url of testUrls) {
    await checkUrl(url);
  }
}

run();
