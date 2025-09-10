// Step 1: Variables
// Declare variables for your name, course, and year level.
const studentName = "Jhonlord Dagasuan";
const course = "Bachelor of Science in Information Technology";
const yearLevel = "2nd Year";

// Print them in the console.
console.log("Name:", studentName);
console.log("Course:", course);
console.log("Year Level:", yearLevel);

console.log("\n"); // Adds a break


// Step 2: Operators
const hoursOfSleep = 8;
const hoursOfStudy = 2;

const totalHours = hoursOfSleep + hoursOfStudy;
console.log("Total Hours of Sleep:", hoursOfSleep);
console.log("Total Hours of Study:", hoursOfStudy);
console.log("Total Hours:", totalHours);

console.log("\n"); // Adds a break

// Step 3: Conditions
if (hoursOfStudy >= 5) {
  console.log("Great! You studied enough today.");
} else {
  console.log("You need to study more.");
}

console.log("\n"); // Adds a break

// Step 4: Loops
const subjects = [
  "Web System",
  "Event-Driven",
  "OOP"
];

// Use a for loop to display them
console.log("List of my Subject this sem:");
for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}

console.log("\n"); // Adds a break

// Step 5: Functions
function studentSummary() {
  return `My name is ${studentName}, a ${yearLevel} Year from ${course}`;
}

// Call the function and print the result.
console.log(studentSummary());