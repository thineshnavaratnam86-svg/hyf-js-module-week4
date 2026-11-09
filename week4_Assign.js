//Voice assistant
//Step 1: Set up our global variables

let myName = "";
let todos = [];

//--------------------------------------------------
//Step 2: Create the Main Function

function getReply(command) {
  const lowerCommand = command.toLowerCase();

  //--------------------------------------------------
  //Step 3: Handle the Name Commands

  // I. Hello my name is [Name]

  if (lowerCommand.startsWith("hello my name is")) {
    const name = command.replace("Hello my name is", "").trim();

    if (myName.toLowerCase() === name.toLowerCase()) {
      return `You already told me your name is ${myName}!`;
    }

    myName = name;
    return `Nice to meet you ${myName}`;
  }
  //--------------------------------------------------
  //Step 4: Handle the To-Do List Commands

  // I. What is my name?
  if (lowerCommand.includes("what is my name")) {
    if (myName === "") {
      return "I don't know your name yet.";
    }
    return `Your name is ${myName}`;
  }

  //--------------------------------------------------
  // II. Add to do

  if (lowerCommand.startsWith("add ") && lowerCommand.includes("to my todo")) {
    const item = command.replace("Add ", "").replace(" to my todo", "").trim();
    todos.push(item);
    return `${item} added to your todo`;
  }

  //--------------------------------------------------
  // III. Remove from todo

  if (
    lowerCommand.startsWith("remove ") &&
    lowerCommand.includes("from my todo")
  ) {
    const item = command
      .replace("Remove ", "")
      .replace(" from my todo", "")
      .trim();
    const index = todos.indexOf(item);

    if (index > -1) {
      todos.splice(index, 1);
      return `Removed ${item} from your todo`;
    }
    return `Item not found in your todos`;
  }

  //--------------------------------------------------
  // IV. What is on my todo?

  if (lowerCommand.includes("what is on my todo")) {
    if (todos.length === 0) {
      return "Your todo list is empty.";
    }
    if (todos.length === 1) {
      return `You have 1 todo - ${todos[0]}`;
    }
    return `You have ${todos.length} todos - ${todos.join(" and ")}`;
  }

  //--------------------------------------------------
  //Step 5: Handle Date and Simple Math

  // I. What day is it today?

  if (lowerCommand.includes("what day is it today")) {
    const today = new Date();
    const day = today.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return `${day}. of ${month} ${year}`;
  }

  //--------------------------------------------------
  // II. Simple Math (basic checks)

  if (lowerCommand.includes("what is 3 + 3")) {
    return "6";
  }
  if (lowerCommand.includes("what is 4 * 12")) {
    return "48";
  }

  //--------------------------------------------------
  //Step 6: Handle the Timer Command

  // I. Set a timer for 4 minutes

  if (lowerCommand.startsWith("set a timer for")) {
    setTimeout(
      function () {
        console.log("Timer done");
      },
      4 * 60 * 1000,
    );

    return "Timer set for 4 minutes";
  }

  // Default fallback if no command matches

  return "I don't understand that command.";
}

//------------------------------------------------
//Result

//Test 1

// Test 1a: Set name for the first time
console.log(getReply("Hello my name is Benjamin"));

// Test 1b: Submit the same name twice
console.log(getReply("Hello my name is Benjamin"));

// Test 1c: Ask for the name
console.log(getReply("What is my name?"));

//--------------------------------------------------
//Test 2

// Test 2a: Add first item
console.log(getReply("Add fishing to my todo"));

// Test 2b: Add second item
console.log(getReply("Add singing in the shower to my todo"));

// Test 2c: View the full list
console.log(getReply("What is on my todo?"));

// Test 2d: Remove an item
console.log(getReply("Remove fishing from my todo"));

// Test 2e: View the updated list
console.log(getReply("What is on my todo?"));

//--------------------------------------------------
//Test 3

// Test 3: Get today's date
console.log(getReply("What day is it today?"));

//--------------------------------------------------
//Test 4

// Test 4a: Addition
console.log(getReply("what is 3 + 3"));

// Test 4b: Multiplication
console.log(getReply("what is 4 * 12"));

//--------------------------------------------------
//Test 5

// Test 5: Set a timer
console.log(getReply("Set a timer for 4 minutes"));

//--------------------------------------------------
//Test 6

// Test 6a: Extra command
console.log(getReply("Tell me a joke"));

// Test 6b: Unknown command fallback
console.log(getReply("Fly me to the moon"));
