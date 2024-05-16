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