export function generateUniqueId() {
  const a = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".split("");
  let b = "";
  let f = "";
  let g = "";
  for (let c = 0; c <= 4; c++) {
    let d = Math.floor(Math.random() * (a.length - 1));
    let e = Math.floor(Math.random() * (a.length - 1));
    let l = Math.floor(Math.random() * (a.length - 1));
    b += a[d];
    f += a[e];
    g += a[l];
  }
  return b + "-" + f + "-" + g;
}
