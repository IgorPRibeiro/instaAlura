const lerFotos = async (callback) => {
  const fotoHTTP = await fetch("http://10.0.2.2:3030/feed");
  const fotoJSON = await fotoHTTP.json();
  callback(fotoJSON);
}

export default lerFotos;