const randomColor = () => {
  hexaCharacter = ["A", "B", 1, "D", 6, "E", "F"];
  function getC(x) {
    return hexaCharacter[x];
  }
  let code = "#";
  for (let i = 0; i < 6; i++) {
    let position = Math.floor(Math.random() * hexaCharacter.length);
    code += getC(position);
  }
  return code;
};
const Randomposition = () => {
  const list = [5, 10, 16, 20, 28, 36];
  const value = Math.floor(Math.random() * list.length);

  return list[value];
};
module.exports = { randomColor, Randomposition };
// export default { randomColor };
