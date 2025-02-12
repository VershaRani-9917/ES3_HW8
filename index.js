// 1. Display weather forecast using template literals
const displayWeather = (city, temperature) =>
  `The weather in ${city} is ${temperature} degrees Celsius.`;

console.log(displayWeather("New York", 20));
console.log(displayWeather("London", 15));

// 2. Format currency using template literals
const formatCurrency = (amount, currency) => `You have ${amount} ${currency}.`;

console.log(formatCurrency(50.5, "USD"));
console.log(formatCurrency(100, "EUR"));

// 3. Display book summary using template literals
const displayBookSummary = (title, author, genre) =>
  `The book "${title}" written by ${author} belongs to the ${genre} genre.`;

console.log(
  displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction")
);

// 4. Display movie info using template literals
const displayMovieInfo = (title, year, director) =>
  `The movie "${title}" was released in ${year} and directed by ${director}.`;

console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"));

// 5. Construct email using template literals
const constructEmail = (recipient, subject) =>
  `To: ${recipient}\nSubject: ${subject}\n\nDear ${recipient},\n\n...`;

console.log(constructEmail("alice@example.com", "Meeting Reminder"));

// 6. Assess grade using template literals and ternary operator
const assessGrade = (score) =>
  `You are ${score >= 60 ? "passing" : "failing"}.`;

console.log(assessGrade(75));
console.log(assessGrade(60));
console.log(assessGrade(45));

// 7. Show message with numeric values
const showMessage = (item, quantity) =>
  `You have ${quantity} ${item}${quantity > 1 ? "s" : ""}.`;

console.log(showMessage("bangle", 10));
console.log(showMessage("lipstick", 1));

// 8. Assess marks with grade condition
const assessMarks = (score, grade) =>
  `You are ${score >= 60 && grade === "A" ? "passing" : "failing"}.`;

console.log(assessMarks(95, "A"));
console.log(assessMarks(62, "C"));
console.log(assessMarks(45, "D"));

// 9. Check collection quality
const showMsg = (bangleCount, lipstickCount) =>
  `You ${
    bangleCount > 10 && lipstickCount > 5
      ? "have a good collection"
      : "need to update your collection"
  }.`;

console.log(showMsg(11, 6));
console.log(showMsg(5, 1));
console.log(showMsg(12, 4));

// 10. Share stationery message
const shareStationeryMessage = (pencils, erasers) =>
  `Please ${
    (pencils > 10 && erasers > 5) || (erasers > 10 && pencils > 5)
      ? "share stationery with friends"
      : "ask your friends for stationery"
  }.`;

console.log(shareStationeryMessage(12, 8));
console.log(shareStationeryMessage(7, 15));
console.log(shareStationeryMessage(5, 3));
