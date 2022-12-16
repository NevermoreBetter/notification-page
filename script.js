const checkBtn = document.getElementById("check-btn"),
  messages = document.getElementById("messages-number"),
  notificationItem = document.querySelectorAll(".notification-item");

checkBtn.addEventListener("click", () => {
  for (let i = 0; i < notificationItem.length; i++) {
    if (notificationItem[i].classList.contains("unchecked")) {
      notificationItem[i].classList.remove("unchecked");
      messages.textContent = "0";
    }
  }
});

notificationItem.forEach((element) => {
  element.addEventListener("click", () => {
    let messagesNumber = parseInt(messages.textContent, 10);
    if (element.classList.contains("unchecked")) {
      element.classList.remove("unchecked");
      console.log(messages.text);
      messagesNumber -= 1;
      messages.textContent = messagesNumber.toString();
    } else {
      element.classList.add("unchecked");
      messagesNumber += 1;
      messages.textContent = messagesNumber.toString();
    }
  });
});
