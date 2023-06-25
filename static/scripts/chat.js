// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
    
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            coll.classList.remove("collapsible");    
            coll.classList.add("collapsible1")
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
    let firstMessage = "Hello, I am Sciastra chatbot, how can I help you out ?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {

    if (userText.endsWith("?")) {
        // This code checks if the user's input ends with a ? symbol.
        userText = userText.substring(0, userText.length - 1);
        // This code removes the ? symbol from the user's input.
    }

    userText = userText.toLowerCase();
    // This code converts the user's input to lowercase.  


    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

// strings = ["hii",]

// function isSimilar(usertext, strings) {
//     // This function compares usertext with strings and returns true if it is 80% similar to one of the strings in the list.
  
//     usertext = usertext.toLowerCase();
  
//     for (const string of strings) {
//       string = string.toLowerCase();
  
//       similarity = len(set(usertext) & set(string)) / len(set(usertext));
  
//       if (similarity >= 0.8) {
//         return string;
//       }
//     }
  
//     return "Sorry i cannot get it , Try asking something else!";
//   }