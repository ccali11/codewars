// ALL TESTS PASS
/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:
*/


let rgb = (r, g, b) => {
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
}

let convertToHex = (a) => {
  letterLib = ['A', 'B', 'C', 'D', 'E', 'F'];

  if (a < 0) {return '00';}
  if (a > 255) {return 'FF';}

  let base =  Math.floor(a / 16);
  let remainder = a % 16;

  if (base > 9) {
    base = letterLib[base - 10];
  } else if (base > 15) {
    base = 'F';
  }

  if (remainder > 9) {
    remainder = letterLib[remainder - 10];
  }

  base = base.toString();
  remainder = remainder.toString();

  return base + remainder;
}

// TEST SUITE
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3