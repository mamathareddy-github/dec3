//1. Scenario: Online Library Membership
// Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:
// Basic Membership: Access to only free books.
// Standard Membership: Access to free books and discounted paid books.
// Premium Membership: Access to free books and discounted paid books.
// Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.
var membership='standard';
if(membership==='basic'){
    console.log("Access to only free books");
}
else if(membership==='standard'){
    console.log("Access to free books and discounted paid books");
}
else if(membership==='premium'){
    console.log("Access to free books and discounted paid books");
}
else{
    console.log("invalid membership");
}
console.log("---------------------------------------------------------------");


// 2. Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:
// Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.
// VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.
// Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.

var membership='VI';
var purchases=-590;
if(membership==='regular' && purchases>0 && purchases <100){
    console.log(`for regular customer no discount for below $100 totalamount: ${purchases}`);
}
else if(membership==='regular' && purchases >=100 && purchases<=500){
    console.log(`for regular customer 5% discount for purcheses between $100 and $500 totalamount: ${purchases-purchases*0.05}`)
}
else if(membership==='regular' && purchases>500){
    console.log(`for regular customer 10% discount over purchases of $500 totalamount: ${purchases-purchases*0.1}`)
}
else if(membership==='VIP' && purchases>0 && purchases<100){
    console.log(`for VIP customer 10% discount for below $100 totalamount: ${purchases-purchases*0.1}`)
}
else if(membership==='VIP' && purchases>=100 && purchases<=500){
    console.log(`for VIP customer 15% discount for purcheses between $100 and $500 totalamount: ${purchases-purchases*0.15}`);
}
else if(membership==='VIP' && purchases>500){
    console.log(`for VIP customer 20% discount for purcheses between $100 and $500 totalamount: ${purchases-purchases*0.2}`);
}
else{
    console.log("invalid membership or negative purchases given")
}
console.log("--------------------------------------------------")
// console.clear();
// 3. Scenario: Academic Scholarship Eligibility
// ----------------------------------------------
// Context: A university offers scholarships to students based on their GPA and extracurricular involvement:
// Merit-Based Scholarship: Requires a GPA of 3.5 or higher.
// Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.
// Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.
// Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.
var GPA=3.0;
var extracurricularActivities=2;
var communityServiceHours=200;
if(GPA>=3.5 && extracurricularActivities>0 && communityServiceHours>0){
    console.log("eligible for merit-based scholarship");
}
else if(GPA>=3.0 && extracurricularActivities>=2 && communityServiceHours>0){
    console.log("eligible for leadership scholarship");
}
else if(GPA>=2.5 && extracurricularActivities>0 && communityServiceHours>=100){
    console.log("eligible for Community Service scholarship");
}
else{
    console.log("not eligible for any scholarship");
}
console.log("-----------------------------------------------------------------");
// console.clear()

// 4. Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:
// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.
// Weekends: Standard price of $15. Seniors and children receive a 30% discount.
// Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.
var day='monday';
var age=-20;
if((day==='monday'||day==='tuesday'||day==='wenesday'||day==='thursday'||day==='friday') && (age>=65 || age<=12 && age>=0)){
    console.log(`ticketprice: ${12-12/2}`)
}
else if((day==='monday'||day==='tuesday'||day==='wenesday'||day==='thursday'||day==='friday') && (age>=12 && age<=65)){
    console.log(`ticketprice: 12`)
}
else if((day==='saturday'||day==='sunday') && (age>=65 || age<=12 && age>=0)){
    console.log(`ticketprice: ${15-15*0.3}`);
}
else if((day==='saturday'||day==='sunday') && (age>=12 && age<=65)){
    console.log(`ticketprice: 15`);
}
else{
    console.log("invalid age or day")
}
console.log("--------------------------------------------------------");
// console.clear();
// 5. Scenario: Event Registration Validation
// -------------------------------------------
// Context: An event registration system needs to validate user inputs before confirming their registration:
// The user must be 18 years or older to register.
// The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.
// The user must provide a valid email address.
// Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.
var age=199;
var alreadyRegisteredParticipants=101;
var emailAddress='xyz@gmail.com';
if(age>=18 && alreadyRegisteredParticipants<=100 && emailAddress==='xyz@gmail.com'){
    console.log("eligible for registration");
}
else{
    console.log("not eligible");
}