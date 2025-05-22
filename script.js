document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !emailPattern.test(email)) {
    alert("Please enter a valid name and email.");
    e.preventDefault();
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;
  li.onclick = () => li.remove();
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
