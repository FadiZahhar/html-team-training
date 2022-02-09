// logical operators
// (|| - or)   , (&&  - and)

const name = "Ali";
const age = 30;

if (name === "Ali" && age === 30) {
    console.log("Name and age matches");
}
else if (name === "Ali" || age === 30) {
    console.log("Some value matches");
}
else {
    console.log("wrong values");
}