console.log(ifNotNull(1 + 1, (a) => ifNotNull(2 + 2, (b) => a + b)));
console.log(
  ifNotNull(7, function (e) {
    console.log(e);
    return ifNotNull(null, function (f) {
      console.log(f);
      return 8;
    });
  })
);

function ifNotNull(value, f) {
  if (value !== null) {
    return f(value);
  } else {
    return null;
  }
}
