const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const audiox = window.SpeechRecognition || window.webkitSpeechRecognition;
const audio1x = new audiox();
audio1x.onstart = function () {
  console.log("test by savio.");
};
audio1x.onspeechend = function () {
  audio1x.stop();
  console.log("Speech recognition has stopped.");
};

audio1x.onresult = function (event) {
  var transcript = event.results[0][0].transcript;
  textInput.value = transcript;
  getResponse();
};

startBtn.addEventListener("click", function () {
  audio1x.start();
});

stopBtn.addEventListener("click", function () {
  audio1x.stop();
});
// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage = "Welcome To Blue Jay Hotel";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();
// Hide Button Function
function HideButton() {
  var x = document.getElementById("allAv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function arLang(language) {
  var inputElement = document.getElementById("textInput");

  if ((language === "arabic", localStorage.setItem("send", "ar"))) {
    inputElement.setAttribute("dir", "rtl");
  }
}
function frLang(language) {
  var inputElement = document.getElementById("textInput");

  if ((language === "arabic", localStorage.setItem("send", "fr"))) {
    inputElement.setAttribute("dir", "ltr");
  }
}
function enLang(language) {
  var inputElement = document.getElementById("textInput");

  if ((language === "arabic", localStorage.setItem("send", "en"))) {
    inputElement.setAttribute("dir", "ltr");
  }
}

function getHardResponse(userText) {
  //const xy = localStorage.getItem("send");
  console.log(localStorage.getItem("send"));
  const x = "";
  const langpair = "";
  if (localStorage.getItem("send") == "ar") {
    let c =
      "https://api.mymemory.translated.net/get?q=" +
      encodeURIComponent(userText) +
      "&langpair=ar|en";
    console.log(c);
    fetch(c)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.responseData.translatedText);
        return fetch(
          `http://127.0.0.1:8000/${json.responseData.translatedText}`
        )
          .then((response) => response.json())
          .then((data) => {
            const answer = data.answer;
            console.log(answer);
            const linkPattern = /http[s]?:\/\/\S+/;
            const cleanedAnswer = answer.replace(linkPattern, "");
            let c =
              "https://api.mymemory.translated.net/get?q=" +
              encodeURIComponent(cleanedAnswer) +
              "&langpair=en|ar";
            console.log(c);
            fetch(c)
              .then((res) => res.json())
              .then((json) => {
                const link = data.link[0]; // Assuming there is only one link in the array
                // Remove the link from the answer
                console.log(json.responseData.translatedText);
                const linkPattern = /http[s]?:\/\/\S+/;
                const cleanedAnswer = json.responseData.translatedText.replace(
                  linkPattern,
                  ""
                );

                let botHtml =
                  '<p class="botText"><span>' +
                  cleanedAnswer.trim() +
                  "</span></p>";
                if (link) {
                  const linkText = "انقر هنا";
                  const hyperlink = `<a href="${link}" target="_blank">${linkText}</a>`;
                  botHtml += `<p class="botText"><span>${hyperlink}</span></p>`;
                }
                $("#chatbox").append(botHtml);

                document.getElementById("chat-bar-bottom").scrollIntoView(true);

                return cleanedAnswer.trim(); //  Return only the cleaned answer
              });
            console.log(x);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((err) => console.log(err));
  } else if (localStorage.getItem("send") == "fr") {
    let c =
      "https://api.mymemory.translated.net/get?q=" +
      encodeURIComponent(userText) +
      "&langpair=fr|en";
    console.log(c);
    fetch(c)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.responseData.translatedText);
        console.log(
          "http://127.0.0.1:8000/" +
            encodeURIComponent(json.responseData.translatedText)
        );
        return fetch(
          "http://127.0.0.1:8000/" +
            encodeURIComponent(json.responseData.translatedText)
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const answer = data.answer;
            console.log(answer);
            const linkPattern = /http[s]?:\/\/\S+/;
            const cleanedAnswer = answer.replace(linkPattern, "");
            let c =
              "https://api.mymemory.translated.net/get?q=" +
              encodeURIComponent(cleanedAnswer) +
              "&langpair=en|fr";
            console.log(c);
            fetch(c)
              .then((res) => res.json())
              .then((json) => {
                const link = data.link[0]; // Assuming there is only one link in the array
                // Remove the link from the answer
                console.log(json.responseData.translatedText);
                const linkPattern = /http[s]?:\/\/\S+/;
                const cleanedAnswer = json.responseData.translatedText.replace(
                  linkPattern,
                  ""
                );

                let botHtml =
                  '<p class="botText"><span>' + cleanedAnswer + "</span></p>";
                /*  if (link) {
                  botHtml +=
                    '<p class="botText"><span>Link: <a href="' +
                    link +
                    '" target="_blank">'+
                    link +
                    "</a></span></p>";
                }*/
                if (link) {
                  const linkText = "Cliquez ici";
                  const hyperlink = `<a href="${link}" target="_blank">${linkText}</a>`;
                  botHtml += `<p class="botText"><span>${hyperlink}</span></p>`;
                }
                $("#chatbox").append(botHtml);

                document.getElementById("chat-bar-bottom").scrollIntoView(true);

                return cleanedAnswer.trim(); //  Return only the cleaned answer
              });
            console.log(x);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((err) => console.log(err));
  } else if (localStorage.getItem("send") == "en") {
    console.log("http://127.0.0.1:8000/" + userText);
    return fetch(`http://127.0.0.1:8000/${userText}`)
      .then((response) => response.json())
      .then((data) => {
        const answer = data.answer;
        console.log(x);
        const link = data.link[0]; // Assuming there is only one link in the array
        // Remove the link from the answer
        const linkPattern = /http[s]?:\/\/\S+/;
        const cleanedAnswer = answer.replace(linkPattern, "");

        let botHtml =
          '<p class="botText"><span>' + cleanedAnswer.trim() + "</span></p>";
        if (link) {
          const linkText = "Click here";
          const hyperlink = `<a href="${link}" target="_blank">${linkText}</a>`;
          botHtml += `<p class="botText"><span>${hyperlink}</span></p>`;
        }

        $("#chatbox").append(botHtml);

        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        return cleanedAnswer.trim(); //  Return only the cleaned answer
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// Get references to the input and button elements
const inputValue = document.getElementById("textInput");
const apiButton = document.getElementById("chat-icon");
const responseContainer = document.getElementById("chat-bar-bottom");

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  /*setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}*/
  setTimeout(() => {
    getHardResponse(userText).then((cleanedAnswer) => {
      const roomAvailable = cleanedAnswer === "true";
      let botHtml = '<p class="botText"><span>';

      /* if (roomAvailable) {
        botHtml += "This room is available.";
      } else {
        botHtml += "This room is not available.";
      }*/

      //botHtml += "</span></p>";
      //$("#chatbox").append(botHtml);*/
      document.getElementById("chat-bar-bottom").scrollIntoView(true);
    });
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
  // console.log("hiii");
  //getBotResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
function toggleAvailability() {
  var toggleButton = document.getElementById("toggleButton");
  var availabilityFields = document.getElementById("availabilityFields");

  if (availabilityFields.classList.contains("show")) {
    availabilityFields.classList.remove("show");
    toggleButton.style.display = "block";
  } else {
    availabilityFields.classList.add("show");
    toggleButton.style.display = "none";
  }
}
function checkRoomAvailability() {
  const checkInDate = document.getElementById("checkInDate").value;
  const checkOutDate = document.getElementById("checkOutDate").value;
  const roomType = document.querySelector(
    'input[name="roomType"]:checked'
  ).value;
  const apiUrl = `http://127.0.0.1:8000/room/${encodeURIComponent(
    roomType
  )}/${checkInDate}/${checkOutDate}`;

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const isAvailable = data.check;
      let botHtml = '<p class="botText"><span>';

      if (isAvailable) {
        botHtml += "This room is available.";
      } else {
        botHtml += "This room is not available.";
      }

      botHtml += "</span></p>";
      $("#chatbox").append(botHtml);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);

      return isAvailable;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

const scrollButton = document.getElementById("scroll-button");
scrollButton.addEventListener("click", function () {
  this.querySelector(".scroll-content").style.display = "block";
});
