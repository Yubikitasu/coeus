export function generateUniqueId() {
  const a = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".split("");
  let b = "";
  let f = "";
  let g = "";
  let d = 0;
  let e = 0;
  let l = 0;
  for (let c = 0; c <= 4; c++) {
    d = Math.floor(Math.random() * (a.length - 1));
    e = Math.floor(Math.random() * (a.length - 1));
    l = Math.floor(Math.random() * (a.length - 1));
    b += a[d];
    f += a[e];
    g += a[l];
  }
  return b + "-" + f + "-" + g;
}
