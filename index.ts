import inquirer from "inquirer";
interface inquirerQuestions {
  name: string;
  type: string;
  message: string;
  [x: string]: string;
}

const questions: inquirerQuestions[] = [
  {
    name: "units",
    type: "number",
    message: "How many units did u consume? ",
  },
  {
    name: "employee",
    type: "confirm",
    message: "R u a wapda employee? "
  },
  {
    name: "discount",
    type: "number",
    message: "Enter the discount code: "
  }
];

const startAnswers = await inquirer.prompt(questions.slice(0,2))
const units = startAnswers.units
let charge: number;
let surcharge: number;

if (units < 200) {
    charge = units * 1.20 
} else if (units >= 200 && units < 400) {
    charge = units * 1.50
} else if (units >= 400 && units < 600) {
    charge = units * 1.80
} else {
    charge = units * 2
}

if (charge > 400) surcharge = charge * 1.15

if (startAnswers.employee === true) {
    let discountCode = await inquirer.prompt(questions.slice(2,3))
    if (discountCode.discount === 1234) charge *= 0.70
    else console.log(`Invalid Discount code`)
}

console.log(`Ur total electricity bill is Rs.${charge.toFixed(2)}`)