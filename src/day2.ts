declare function printCar(car: {
  model: string;
  name: string;
  year: number;
  new: boolean;
}): void;

const myCar = {
  new: true,
  name: 'honda',
  model: '2021',
  year: 2021,
  color: 'Blue', //  <- useless property
};

printCar({
  new: true,
  name: 'honda',
  model: '2021',
  year: 2021,
  // color: 'Blue', <- useless property . printCar function gives if passed color property directly
});

printCar(myCar); // Here it is  completly find because of  structurely typed nature of typescript
// and  we cannot prove  whether color value is useless of not.typescript just structurely passed
// all of the required values to the printCar function and discard other values

let numPair: [number, number] = [3, 5];
numPair.pop(); // issue

// The most specific type that describes the entire content of the array
// There’s no major problem here, but it does mean that we need to explicitly state the type of a tuple whenever we declare one.

// const someTuple: [number, number] = [1, 2, 3];

// Union type

let val: number | string;
