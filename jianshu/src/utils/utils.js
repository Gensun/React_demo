export function randomArrByOut(arr) {
  let result = [];
  let arrTemp = [...arr]; // splice会影响原数组，复制一个新的数组，防止影响原数组
  while (arrTemp.length) {
    let index = Math.floor(Math.random() * arrTemp.length);
    result.push(arrTemp[index]);
    arrTemp.splice(index, 1);
  }
  return result;
}
