const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) => {
  const hasilIXX = await promiseTheaterIXX();
  const hasilVGC = await promiseTheaterVGC();

  const hasilSetelahMenonton = [...hasilIXX, ...hasilVGC];

  const hasil = hasilSetelahMenonton.filter((film) => film.hasil === emosi).length;

  return hasil;
};

module.exports = {
  promiseOutput,
};
