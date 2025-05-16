// Build a Simple To-Do List Application (Console Based)
// Requirements:
// - The application should allow a user to add, view, delete, and mark tasks as complete.
// - Each task should have a title and a status (pending or completed).
// - The tasks should be stored in a list, and the application should keep running until the user chooses
// to exit.
// - Include proper error handling for invalid inputs.
// Example Console Interaction:
// Welcome to the To-Do List App!
// 1. Add a Task
// 2. View All Tasks
// 3. Mark Task as Complete
// 4. Delete a Task
// 5. Exit
// Choose an option: 1
// Enter the task title: Buy groceries
// Choose an option: 2
// Tasks:
// 1. [ ] Buy groceries
// Choose an option: 3
// Enter task number to mark as complete: 1
// Task marked as complete!
// Choose an option: 2
// Tasks:
// 1. [X] Buy groceries
// Choose an option: 5
// Goodbye!

import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = () => {
  console.log("\n");
  console.log("Welcome to the To-Do List App!");
  console.log("1. Add a Task");
  console.log("2. View All Tasks");
  console.log("3. Mark Task as Complete");
  console.log("4. Delete a Task");
  console.log("5. Exit");
  rl.question("Choose an option: ", handleMenuOption);
};
const handleMenuOption = (option) => {
  switch (option) {
    case "1":
      addTask();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      markTaskAsComplete();
      break;
    case "4":
      deleteTask();
      break;
    case "5":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please try again.");
      menu();
  }
};

let tasks = [];
let taskId = 1;

const addTask = () => {
  rl.question("Enter the task title: ", (title) => {
    if (title.trim() === "") {
      console.log("Task title cannot be empty.");
      menu();
    } else {
      tasks.push({ id: taskId++, title, completed: false });
      console.log(`Task "${title}" added!`);
      rl.question("Press Enter to return to menu...", () => {
        menu();
      });
    }
  });
};
const viewTasks = (returnToMenu = true) => {
  if (tasks.length === 0) {
    console.log("No tasks available.");
    if (returnToMenu) {
      menu();
    }
  } else {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. [${task.completed ? "X" : " "}] ${task.title}`
      );
    });

    if (returnToMenu) {
      rl.question("Press Enter to return to menu...", () => {
        menu();
      });
    }
  }
};

const markTaskAsComplete = () => {
  viewTasks(false);
  rl.question("Enter task number to mark as complete: ", (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log(`Task "${tasks[index].title}" marked as complete!`);
      menu();
    } else {
      console.log("Invalid task number.");
      rl.question("Press Enter to continue...", () => {
        menu();
      });
    }
  });
};

const deleteTask = () => {
  viewTasks(false);
  rl.question("Enter task number to delete: ", (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < tasks.length) {
      console.log(`Task "${tasks[index].title}" deleted!`);
      tasks.splice(index, 1);
      menu();
    } else {
      console.log("Invalid task number.");
      rl.question("Press Enter to continue...", () => {
        menu();
      });
    }
  });
};
menu();
