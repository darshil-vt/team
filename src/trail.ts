// const hex = '3fe2da2f8bdec5f4';
// const result = Buffer.from(hex, 'hex').readDoubleBE(0);
// console.log(result);

// const data = 255 - 0x30;
// console.log(data);

var { Buffer } = require("node:buffer");

// // // let pkg;

// const buf = Buffer.alloc(6);
// buf.writeIntLE('0x304545', 3, 3, 'hex');
// console.log(buf);

// const hexNum = 0x81;

// // Convert the hex number to binary
// const binaryNum = hexNum.toString(2);
// console.log(binaryNum);

// // Calculate the one's complement of the binary number
// const onesComplement = binaryNum.split('').map(bit => bit === '0' ? '1' : '0').join('');
// console.log(onesComplement);
// // Convert the one's complement back to hex
// const hexOnesComplement = parseInt(onesComplement, 2);

// console.log("Original hex number:", hexNum);
// console.log("One's complement in hex:", hexOnesComplement);



// const hexNum = "7A3F";

// // Convert the hex number to binary
// const binaryNum = parseInt(hexNum, 8).toString(2);
// console.log(binaryNum);


// // Calculate the one's complement of the binary number
// const onesComplement = binaryNum.split('').map(bit => bit === '0' ? '1' : '0').join('');

// // Convert the one's complement back to hex
// const hexOnesComplement = parseInt(onesComplement, 2).toString(16).toUpperCase();

// console.log("Original hex number:", hexNum);
// console.log("One's complement in hex:", hexOnesComplement);

// const data = parseInt("54A4D4", 16);
// console.log(data);
// const pkg = 255 - (data & 0xff);
// console.log(pkg);
// const pkg1 = 255 - ((data >> 8) & 0xff);
// console.log(pkg1);
// const pkg2 = 255 - ((data >> 16) & 0xff);
// console.log(pkg2);

// const test = data >> 8;
// console.log(test);

// const test1 = data >> 16;
// console.log(test1);

// const test2 = data & 0xff;
// console.log(test2);

const buf = Buffer.alloc(4);
// const buf2 = Buffer.alloc();
const buf1 = Buffer.alloc(4);
buf.write('18', 0, "hex");
buf.write("01", 1, "hex");
buf.write("91", 2, "hex");

// console.log(buf, "hex");

// const data = 0x12;
// const data1 = data.toString(16).slice(-2);
// const data2 = data.toString(16).padStart(2, "0");
// console.log(data1);
// console.log(data2);

// const data = (2 | 0xf0).toString(16);
// // const data1 = data.toString(16);
// console.log(data);
// buf.write(data, 1, "hex");
// console.log(buf, "hex");
// let sum = 0;
// let i = 0;
// for (const value of buf.values()) {
//     sum += value;
//     // 255 - value;
//     const data123 = ((255 - value).toString(16)).padStart(2, "0");
//     console.log(data123, i);
//     buf.write(data123, i, "hex");
//     buf1.write('a', 1, "hex");
//     console.log(buf, '2222');
//     i++;
// }
// buf1.write('d', 1, "hex");
// const hex = sum.toString(16);
// console.log(hex);
// console.log(buf1, "hex");

// const sum1 = buf.reduce((acc, curr) => acc + curr, 0);
// console.log(sum1);

// let ind = 0;
// for (const value of buf.values()) {
//     console.log(value);

//     const inv_data = ((255 - value).toString(16)).padStart(2, '0');
//     console.log(inv_data, ind);
//     buf1.write(inv_data, ind, 'hex');
//     if (ind == 2)
//         break;

//     ind++;
// };


// const array = [
//     { id: 0x01, name: 'CTRL_MOVE ' },
//     { id: 0x02, name: 'CTRL_STOP ' },
//     { id: 0x03, name: 'CTRL_MOVETO ' },
//     { id: 0x04, name: 'CTRL_MOVEOF ' },
//     { id: 0x05, name: 'CTRL_WINK ' }];
// const key = 'id';
// for (const value of array) {
//     if (value[key] == 0x03) {
//         console.log(value.name);
//     }
// }

console.log(buf1, 'hex');
console.log(buf1.length);
// buf1.write('0d', 1, "hex");
// console.log(buf1, 'hex');

const msglen = 255 - 0xf4 & 0x3f;
console.log(msglen, '----------------------------------');
console.log(buf.slice(0, 2));
console.log(buf);
const data = (buf[buf.length - 3] << 8);
console.log(buf[0] >> 4);
console.log(data);
console.log(buf[0].toString(16));

const bufeer = Buffer.from([0x03, 0x8f, 0xf8, 0x00, 0x00, 0x01, 0x03, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x01, 0x91]);
console.log(bufeer);

const rec_data = Buffer.from([0x60, 0x0b, 0x6f, 0x00, 0x7f, 0x20, 0x00, 0x00, 0x01, 0xf8, 0x82]);


let inverted = Buffer.alloc(11);
let ind = 0;
for (const value of rec_data.values()) {
    const inv_data = ((255 - value).toString(16)).padStart(2, '0');
    inverted.write(inv_data, ind, 'hex');
    if (ind == (rec_data.length - 3)) {
        break;
    }
    ind += 1;
};

console.log(inverted, 'inverted');