if (!localStorage.getItem("visited")) {
    // Display the alert message
    alert("Namaste! Personal Website is in progress. Don't mind if you encounter 404. Please proceed by clicking OK");

    // Set a flag in localStorage to remember the user's visit
    localStorage.setItem("visited", "true");
}
