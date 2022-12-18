const random = (arr) => {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

module.exports = random;
