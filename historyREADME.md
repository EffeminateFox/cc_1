1678Third-party cookie will be blocked. Learn more in the Issues tab.Understand this warning
function calculateTip(value) {
    // Calculate 20% tip
    var tip = value * 0.2;
    return tip;
}
var billAmount = 50; // Example bill amount
var tipAmount = calculateTip(billAmount);
undefined
function calculateTip(value) {
    // Calculate 20% tip
    var tip = value * 0.2;
    return tip;
    var billAmount = 50; // Example bill amount
var tipAmount = calculateTip(billAmount);
}
undefined
console.log('Hello World'"
VM314:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
console.log('Hello World'";
VM324:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
console.log('Hello World'" ;
VM328:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
console.log('Hello World') ;
VM345:1 Hello World
undefined
2+2
4
6 + 2
8
// Calculate the tip
const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
  return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// Output Details
const displayOutput = (bill, tip) => {
  const total = bill + tip;
  console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${total}`);
};

console.log("Add output functionality to display bill, tip, and total.");

// Test calcTip function
console.log("Create and test calcTip function:");
console.log("Tip for $100 bill:", calcTip(100));

// Utilize Arrays
const billsDataSet1 = [275, 40, 430];
const billsDataSet2 = [125, 555, 44];

const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));

const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);

console.log("Implement and populate arrays for bills, tips, and totals:");
console.log("Data Set 1 - Bills:", billsDataSet1);
console.log("Data Set 1 - Tips:", tipsDataSet1);
console.log("Data Set 1 - Totals:", totalsDataSet1);

console.log("Data Set 2 - Bills:", billsDataSet2);
console.log("Data Set 2 - Tips:", tipsDataSet2);
console.log("Data Set 2 - Totals:", totalsDataSet2);

VM406:7 Initial logic for calculating tip using ternary operator.
VM406:15 Add output functionality to display bill, tip, and total.
VM406:18 Create and test calcTip function:
VM406:19 Tip for $100 bill: 15
VM406:31 Implement and populate arrays for bills, tips, and totals:
VM406:32 Data Set 1 - Bills: (3) [275, 40, 430]
VM406:33 Data Set 1 - Tips: (3) [41.25, 8, 86]
VM406:34 Data Set 1 - Totals: (3) [316.25, 48, 516]
VM406:36 Data Set 2 - Bills: (3) [125, 555, 44]
VM406:37 Data Set 2 - Tips: (3) [18.75, 111, 8.8]
VM406:38 Data Set 2 - Totals: (3) [143.75, 666, 52.8]
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const displayOutput = (bill, tip) => {
    const total = bill + tip;
    console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${total}`);
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function:");
  console.log("Tip for $100 bill:", calcTip(100));
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM410:7 Initial logic for calculating tip using ternary operator.
VM410:15 Add output functionality to display bill, tip, and total.
VM410:18 Create and test calcTip function:
VM410:19 Tip for $100 bill: 15
VM410:31 Implement and populate arrays for bills, tips, and totals:
VM410:32 Data Set 1 - Bills: (3) [275, 40, 430]
VM410:33 Data Set 1 - Tips: (3) [41.25, 8, 86]
VM410:34 Data Set 1 - Totals: (3) [316.25, 48, 516]
VM410:36 Data Set 2 - Bills: (3) [125, 555, 44]
VM410:37 Data Set 2 - Tips: (3) [18.75, 111, 8.8]
VM410:38 Data Set 2 - Totals: (3) [143.75, 666, 52.8]
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const displayOutput = (bill, tip) => {
    const total = bill + tip;
    console.log(`The Bil for the meal was $${bill}, in the end the Tip was $${tip}, and the total cost of the meal was $${total}`);
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function:");
  console.log("Tip for $100 bill:", calcTip(100));
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM414:7 Initial logic for calculating tip using ternary operator.
VM414:15 Add output functionality to display bill, tip, and total.
VM414:18 Create and test calcTip function:
VM414:19 Tip for $100 bill: 15
VM414:31 Implement and populate arrays for bills, tips, and totals:
VM414:32 Data Set 1 - Bills: (3) [275, 40, 430]
VM414:33 Data Set 1 - Tips: (3) [41.25, 8, 86]
VM414:34 Data Set 1 - Totals: (3) [316.25, 48, 516]
VM414:36 Data Set 2 - Bills: (3) [125, 555, 44]
VM414:37 Data Set 2 - Tips: (3) [18.75, 111, 8.8]
VM414:38 Data Set 2 - Totals: (3) [143.75, 666, 52.8]
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const displayOutput = (bill, tip) => {
    const total = bill + tip;
    console.log(`The Bill for the meal was $${bill}, in the end the Tip was $${tip}, and the total cost of the meal was $${total}`);
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function:");
  console.log(displayOutput, calcTip(100));
  console.log("Create and test calcTip function a second time:");
  console.log(displayOutput, calcTip(10);
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM492:21 Uncaught SyntaxError: missing ) after argument listUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const displayOutput = (bill, tip) => {
    const total = bill + tip;
    console.log(`The Bill for the meal was $${bill}, in the end the Tip was $${tip}, and the total cost of the meal was $${total}`);
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function:");
  console.log(displayOutput, calcTip(100));
  console.log("Create and test calcTip function a second time:");
  console.log(displayOutput, calcTip(10);
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  // 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const formatOutput = (bill, tip) => {
    const total = bill + tip;
    console.log(`The Bill for the meal was $${bill}, in the end the Tip was $${tip}, and the total cost of the meal was $${total}`);
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function:");
  console.log(formatOutputOutput, calcTip(100));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput, calcTip(10);
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM498:21 Uncaught SyntaxError: missing ) after argument listUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const formatOutput = (bill, tip) => {
    const total = bill + tip;
    console.log(`The Bill for the meal was $${bill}, in the end the Tip was $${tip}, and the total cost of the meal was $${total}`);
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function:");
  console.log(formatOutputOutput, calcTip(100));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput, calcTip(10);
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM502:21 Uncaught SyntaxError: missing ) after argument listUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const formatOutput = (bill, tip) => {
    const total = bill + tip;
    console.log(`The Bill for the meal was $${bill}, in the end the Tip was $${tip}, and the total cost of the meal was $${total}`);
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function for a first time:");
  console.log(formatOutputOutput(calcTip(100)));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput(calcTip(10)));
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM506:7 Initial logic for calculating tip using ternary operator.
VM506:15 Add output functionality to display bill, tip, and total.
VM506:18 Create and test calcTip function for a first time:
VM506:19 Uncaught ReferenceError: formatOutputOutput is not defined
    at <anonymous>:19:11
(anonymous) @ VM506:19Understand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const formatOutput = (bill, tip) => {
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
    console.log(`The Bill for the meal was $${bill}, in the end the Tip was $${tip}, and the total cost of the meal was $${total}`);
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function for a first time:");
  console.log(formatOutputOutput(calcTip(100)));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput(calcTip(10)));
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM510:7 Initial logic for calculating tip using ternary operator.
VM510:16 Add output functionality to display bill, tip, and total.
VM510:19 Create and test calcTip function for a first time:
VM510:20 Uncaught ReferenceError: formatOutputOutput is not defined
    at <anonymous>:20:11
(anonymous) @ VM510:20Understand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  const formatOutput = `The Bill for the meal was $${bill}, in the end the Tip was $${tip}, and the total cost of the meal was $${total}` => {
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
  };
  
  console.log("Add output functionality to display bill, tip, and total.");
  
  // 3
  console.log("Create and test calcTip function for a first time:");
  console.log(formatOutputcalcTip(100)));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput(calcTip(10)));
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM514:10 Uncaught SyntaxError: Malformed arrow function parameter listUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  // Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// Test the calcTipAndTotal function
const billAmount = 100;
const { bill, tip, total } = calcTipAndTotal(billAmount);

console.log("Create and test calcTip function:");
console.log(formatOutput({ bill, tip, total }));
  
  // 3
  console.log("Create and test calcTip function for a first time:");
  console.log(formatOutputcalcTip(100)));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput(calcTip(10)));
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM518:31 Uncaught SyntaxError: Unexpected token ')'Understand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  // Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// Test the calcTipAndTotal function
const billAmount = 100;
const { bill, tip, total } = calcTipAndTotal(billAmount);

console.log("Create and test calcTip function:");
console.log(formatOutput({ bill, tip, total }));
  
  // 3
  console.log("Create and test calcTip function for a first time:");
  console.log(formatOutputcalcTip(100)));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput(calcTip(10)));
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  // 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  // Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// Test the calcTipAndTotal function
const billAmount = 100;
const { bill, tip, total } = calcTipAndTotal(billAmount);

console.log("Create and test calcTip function:");
console.log(formatOutput({ bill, tip, total }));
  
  // 3
  console.log("Create and test calcTip function for a first time:");
  console.log(formatOutputcalcTip(100));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput(calcTip(10)));
 
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM524:31 Uncaught SyntaxError: Unexpected token ')'Understand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  // Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// Test the calcTipAndTotal function
const billAmount = 100;
const { bill, tip, total } = calcTipAndTotal(billAmount);

console.log("Create and test calcTip function:");
console.log(formatOutput({ bill, tip, total }));
  
  // 3
  console.log("Create and test calcTip function for a first time:");
  console.log(formatOutput(calcTip(100)));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput(calcTip(10)));
VM528:1 Uncaught SyntaxError: Identifier 'billAmount' has already been declaredUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// Test the calcTipAndTotal function
const billAmount1 = 100; // Change variable name to billAmount1
const { bill, tip, total } = calcTipAndTotal(billAmount1); // Change variable name to billAmount1

console.log("Create and test calcTip function:");
console.log(formatOutput({ bill, tip, total }));

// 3
console.log("Create and test calcTip function for a first time:");
console.log(formatOutput(calcTipAndTotal(100)));
console.log("Create and test calcTip function a second time:");
console.log(formatOutput(calcTipAndTotal(10)));
VM532:7 Initial logic for calculating tip using ternary operator.
VM532:26 Create and test calcTip function:
VM532:27 The bill was $100, the tip was $15, and the total value $115
VM532:30 Create and test calcTip function for a first time:
VM532:31 The bill was $100, the tip was $15, and the total value $115
VM532:32 Create and test calcTip function a second time:
VM532:33 The bill was $10, the tip was $2, and the total value $12
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log("Create and test calcTip function:");
const billAmount1 = 100; // Change variable name to billAmount1
const { bill: bill1, tip: tip1, total: total1 } = calcTipAndTotal(billAmount1); // Change variable name to billAmount1
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function for a first time:");
console.log(formatOutput(calcTipAndTotal(100)));

console.log("Create and test calcTip function a second time:");
console.log(formatOutput(calcTipAndTotal(10)));
VM536:7 Initial logic for calculating tip using ternary operator.
VM536:19 Create and test calcTip function:
VM536:22 The bill was $100, the tip was $15, and the total value $115
VM536:24 Create and test calcTip function for a first time:
VM536:25 The bill was $100, the tip was $15, and the total value $115
VM536:27 Create and test calcTip function a second time:
VM536:28 The bill was $10, the tip was $2, and the total value $12
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function for a first time:");
console.log(formatOutput(calcTipAndTotal(100)));

console.log("Create and test calcTip function a second time:");
console.log(formatOutput(calcTipAndTotal(10)));
VM540:7 Initial logic for calculating tip using ternary operator.
VM540:19 The bill was $100, the tip was $15, and the total value $115
VM540:21 Create and test calcTip function for a first time:
VM540:22 The bill was $100, the tip was $15, and the total value $115
VM540:24 Create and test calcTip function a second time:
VM540:25 The bill was $10, the tip was $2, and the total value $12
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function for a first time:");
console.log(formatOutput(calcTipAndTotal(200)));

console.log("Create and test calcTip function a second time:");
console.log(formatOutput(calcTipAndTotal(10)));
VM544:7 Initial logic for calculating tip using ternary operator.
VM544:19 The bill was $100, the tip was $15, and the total value $115
VM544:21 Create and test calcTip function for a first time:
VM544:22 The bill was $200, the tip was $30, and the total value $230
VM544:24 Create and test calcTip function a second time:
VM544:25 The bill was $10, the tip was $2, and the total value $12
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function another first time:");
console.log(formatOutput(calcTipAndTotal(200)));

console.log("Create and test calcTip function a final time:");
console.log(formatOutput(calcTipAndTotal(10)));
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM548:7 Initial logic for calculating tip using ternary operator.
VM548:19 The bill was $100, the tip was $15, and the total value $115
VM548:21 Create and test calcTip function another first time:
VM548:22 The bill was $200, the tip was $30, and the total value $230
VM548:24 Create and test calcTip function a final time:
VM548:25 The bill was $10, the tip was $2, and the total value $12
VM548:37 Implement and populate arrays for bills, tips, and totals:
VM548:38 Data Set 1 - Bills: (3) [275, 40, 430]
VM548:39 Data Set 1 - Tips: (3) [41.25, 8, 86]
VM548:40 Data Set 1 - Totals: (3) [316.25, 48, 516]
VM548:42 Data Set 2 - Bills: (3) [125, 555, 44]
VM548:43 Data Set 2 - Tips: (3) [18.75, 111, 8.8]
VM548:44 Data Set 2 - Totals: (3) [143.75, 666, 52.8]
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function another first time:");
console.log(formatOutput(calcTipAndTotal(200)));

console.log("Create and test calcTip function a final time:");
console.log(formatOutput(calcTipAndTotal(10)));
  
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function another first time:");
console.log(formatOutput(calcTipAndTotal(200)));

console.log("Create and test calcTip function a final time:");
console.log(formatOutput(calcTipAndTotal(10)));
  
VM552:28 Uncaught SyntaxError: Identifier 'calcTip' has already been declaredUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function another first time:");
console.log(formatOutput(calcTipAndTotal(200)));

console.log("Create and test calcTip function a final time:");
console.log(formatOutput(calcTipAndTotal(10)));
  
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function another first time:");
console.log(formatOutput(calcTipAndTotal(200)));

console.log("Create and test calcTip function a final time:");
console.log(formatOutput(calcTipAndTotal(10)));

VM559:28 Uncaught SyntaxError: Identifier 'calcTip' has already been declaredUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};


// 3
// Test the calcTipAndTotal function with different bill amounts
console.log("Create and test calcTip function:");
const billAmount1 = 100; // Change variable name to billAmount1
const { bill: bill1, tip: tip1, total: total1 } = calcTipAndTotal(billAmount1); // Change variable name to billAmount1
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function for a first time:");
console.log(formatOutput(calcTipAndTotal(100)));

console.log("Create and test calcTip function a second time:");
console.log(formatOutput(calcTipAndTotal(10)));

console.log("Create and test calcTip function:");
const billAmount1 = 100; // Change variable name to billAmount1
const { bill: bill1, tip: tip1, total: total1 } = calcTipAndTotal(billAmount1); // Change variable name to billAmount1
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function for a first time:");
console.log(formatOutput(calcTipAndTotal(100)));

console.log("Create and test calcTip function a second time:");
console.log(formatOutput(calcTipAndTotal(10)));
VM563:32 Uncaught SyntaxError: Identifier 'billAmount1' has already been declaredUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
  };
  
  console.log("Initial logic for calculating tip using ternary operator.");
  
  // 2
  // Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// Test the calcTipAndTotal function
const billAmount = 100;
const { bill, tip, total } = calcTipAndTotal(billAmount);

console.log("Create and test calcTip function:");
console.log(formatOutput({ bill, tip, total }));
  
  // 3
  console.log("Create and test calcTip function for a first time:");
  console.log(formatOutput(calcTip(100)));
  console.log("Create and test calcTip function a second time:");
  console.log(formatOutput(calcTip(10)));
VM567:1 Uncaught SyntaxError: Identifier 'billAmount' has already been declaredUnderstand this error
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// 3
// test the calcTipAndTotal function with different bill amounts
console.log(formatOutput({ bill: bill1, tip: tip1, total: total1 }));

console.log("Create and test calcTip function another first time:");
console.log(formatOutput(calcTipAndTotal(200)));

console.log("Create and test calcTip function a final time:");
console.log(formatOutput(calcTipAndTotal(10)));
  
  // 4
  const billsDataSet1 = [275, 40, 430];
  const billsDataSet2 = [125, 555, 44];
  
  const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
  const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));
  
  const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
  const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);
  
  console.log("Implement and populate arrays for bills, tips, and totals:");
  console.log("Data Set 1 - Bills:", billsDataSet1);
  console.log("Data Set 1 - Tips:", tipsDataSet1);
  console.log("Data Set 1 - Totals:", totalsDataSet1);
  
  console.log("Data Set 2 - Bills:", billsDataSet2);
  console.log("Data Set 2 - Tips:", tipsDataSet2);
  console.log("Data Set 2 - Totals:", totalsDataSet2);
VM571:7 Initial logic for calculating tip using ternary operator.
VM571:19 The bill was $100, the tip was $15, and the total value $115
VM571:21 Create and test calcTip function another first time:
VM571:22 The bill was $200, the tip was $30, and the total value $230
VM571:24 Create and test calcTip function a final time:
VM571:25 The bill was $10, the tip was $2, and the total value $12
VM571:37 Implement and populate arrays for bills, tips, and totals:
VM571:38 Data Set 1 - Bills: (3) [275, 40, 430]
VM571:39 Data Set 1 - Tips: (3) [41.25, 8, 86]
VM571:40 Data Set 1 - Totals: (3) [316.25, 48, 516]
VM571:42 Data Set 2 - Bills: (3) [125, 555, 44]
VM571:43 Data Set 2 - Tips: (3) [18.75, 111, 8.8]
VM571:44 Data Set 2 - Totals: (3) [143.75, 666, 52.8]
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// 3
console.log("Create and test calcTip function another first time:");
console.log(formatOutput(calcTipAndTotal(200)));

console.log("Create and test calcTip function a final time:");
console.log(formatOutput(calcTipAndTotal(10)));

// 4
const billsDataSet1 = [275, 40, 430];
const billsDataSet2 = [125, 555, 44];

const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));

const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);

console.log("Implement and populate arrays for bills, tips, and totals:");
console.log("Data Set 1 - Bills:", billsDataSet1);
console.log("Data Set 1 - Tips:", tipsDataSet1);
console.log("Data Set 1 - Totals:", totalsDataSet1);

console.log("Data Set 2 - Bills:", billsDataSet2);
console.log("Data Set 2 - Tips:", tipsDataSet2);
console.log("Data Set 2 - Totals:", totalsDataSet2);
VM575:7 Initial logic for calculating tip using ternary operator.
VM575:23 Create and test calcTip function another first time:
VM575:24 The bill was $200, the tip was $30, and the total value $230
VM575:26 Create and test calcTip function a final time:
VM575:27 The bill was $10, the tip was $2, and the total value $12
VM575:39 Implement and populate arrays for bills, tips, and totals:
VM575:40 Data Set 1 - Bills: (3) [275, 40, 430]
VM575:41 Data Set 1 - Tips: (3) [41.25, 8, 86]
VM575:42 Data Set 1 - Totals: (3) [316.25, 48, 516]
VM575:44 Data Set 2 - Bills: (3) [125, 555, 44]
VM575:45 Data Set 2 - Tips: (3) [18.75, 111, 8.8]
VM575:46 Data Set 2 - Totals: (3) [143.75, 666, 52.8]
undefined
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// 3
console.log("Create and test calcTip function another time:");
console.log(formatOutput(calcTipAndTotal(100)));

console.log("Create and test calcTip function a final time:");
console.log(formatOutput(calcTipAndTotal(10)));

// 4
const billsDataSet1 = [275, 40, 430];
const billsDataSet2 = [125, 555, 44];

const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));

const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);

console.log("Implement and populate arrays for bills, tips, and totals:");
console.log("Data Set 1 - Bills:", billsDataSet1);
console.log("Data Set 1 - Tips:", tipsDataSet1);
console.log("Data Set 1 - Totals:", totalsDataSet1);

console.log("Data Set 2 - Bills:", billsDataSet2);
console.log("Data Set 2 - Tips:", tipsDataSet2);
console.log("Data Set 2 - Totals:", totalsDataSet2);
  
VM579:7 Initial logic for calculating tip using ternary operator.
VM579:23 Create and test calcTip function another time:
VM579:24 The bill was $100, the tip was $15, and the total value $115
VM579:26 Create and test calcTip function a final time:
VM579:27 The bill was $10, the tip was $2, and the total value $12
VM579:39 Implement and populate arrays for bills, tips, and totals:
VM579:40 Data Set 1 - Bills: (3) [275, 40, 430]
VM579:41 Data Set 1 - Tips: (3) [41.25, 8, 86]
VM579:42 Data Set 1 - Totals: (3) [316.25, 48, 516]
VM579:44 Data Set 2 - Bills: (3) [125, 555, 44]
VM579:45 Data Set 2 - Tips: (3) [18.75, 111, 8.8]
VM579:46 Data Set 2 - Totals: (3) [143.75, 666, 52.8]
undefined
Error with Permissions-Policy header: Unrecognized feature: 'ch-ua-form-factor'.Understand this warning
// 1
const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};

console.log("Initial logic for calculating tip using ternary operator.");

// 2
// Define a function to calculate tip and total amount
const calcTipAndTotal = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const total = bill + tip;
    return { bill, tip, total }; // Return an object with bill, tip, and total
};

// Define a function to format output message
const formatOutput = ({ bill, tip, total }) => {
    return `The bill was $${bill}, the tip was $${tip}, and the total value $${total}`;
};

// 3
console.log("Create and test calcTip function:");
console.log(formatOutput(calcTipAndTotal(100)));

console.log("Create and test calcTip function another time:");
console.log(formatOutput(calcTipAndTotal(10)));

// 4
const billsDataSet1 = [275, 40, 430];
const billsDataSet2 = [125, 555, 44];

const tipsDataSet1 = billsDataSet1.map(bill => calcTip(bill));
const tipsDataSet2 = billsDataSet2.map(bill => calcTip(bill));

const totalsDataSet1 = billsDataSet1.map((bill, index) => bill + tipsDataSet1[index]);
const totalsDataSet2 = billsDataSet2.map((bill, index) => bill + tipsDataSet2[index]);

console.log("Implement and populate arrays for bills, tips, and totals:");
console.log("Data Set 1 - Bills:", billsDataSet1);
console.log("Data Set 1 - Tips:", tipsDataSet1);
console.log("Data Set 1 - Totals:", totalsDataSet1);

console.log("Data Set 2 - Bills:", billsDataSet2);
console.log("Data Set 2 - Tips:", tipsDataSet2);
console.log("Data Set 2 - Totals:", totalsDataSet2);
  
// 4.5
const formatDataSetOutput = (bills, tips, totals) => {
    const output = bills.map((bill, index) => {
        return formatOutput({ bill, tip: tips[index], total: totals[index] });
    });
    return output.join('\n');
};

console.log("Format dataset information into similar format output:");
console.log("Data Set 1:");
console.log(formatDataSetOutput(billsDataSet1, tipsDataSet1, totalsDataSet1));
console.log("Data Set 2:");
console.log(formatDataSetOutput(billsDataSet2, tipsDataSet2, totalsDataSet2));
VM582:7 Initial logic for calculating tip using ternary operator.
VM582:23 Create and test calcTip function:
VM582:24 The bill was $100, the tip was $15, and the total value $115
VM582:26 Create and test calcTip function another time:
VM582:27 The bill was $10, the tip was $2, and the total value $12
VM582:39 Implement and populate arrays for bills, tips, and totals:
VM582:40 Data Set 1 - Bills: (3) [275, 40, 430]
VM582:41 Data Set 1 - Tips: (3) [41.25, 8, 86]
VM582:42 Data Set 1 - Totals: (3) [316.25, 48, 516]
VM582:44 Data Set 2 - Bills: (3) [125, 555, 44]
VM582:45 Data Set 2 - Tips: (3) [18.75, 111, 8.8]
VM582:46 Data Set 2 - Totals: (3) [143.75, 666, 52.8]
VM582:56 Format dataset information into similar format output:
VM582:57 Data Set 1:
VM582:58 The bill was $275, the tip was $41.25, and the total value $316.25
The bill was $40, the tip was $8, and the total value $48
The bill was $430, the tip was $86, and the total value $516
VM582:59 Data Set 2:
VM582:60 The bill was $125, the tip was $18.75, and the total value $143.75
The bill was $555, the tip was $111, and the total value $666
The bill was $44, the tip was $8.8, and the total value $52.8
