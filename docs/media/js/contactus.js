function errorMsg(){
    var msgErr = document.getElementById("modal-header");
    msgErr.style.background="#dd3b3b";
    msgerrr = document.getElementById("message_sent_msg").innerText="Error While Sending Message";
    $("#myModal").modal();
}

function timeMsg(){
    var msgErr = document.getElementById("modal-header");
    msgErr.style.background="#dd3b3b";
    msgerrr = document.getElementById("message_sent_msg").innerText="No Internet Connection";
    $("#myModal").modal();
    document.getElementById('load').style.display = "none";
}

function successMsg(){
    var msgSucc = document.getElementById("modal-header");
    msgSucc.style.background="#5cb85c";
    msgSuccc = document.getElementById("message_sent_msg").innerText="Your Message has been sent successfully";
    $("#myModal").modal();
}

function finish(){
    document.getElementById('load').style.display = "none";
    $("#form")[0].reset();
}

function sendemail() {
    var name = $('#Name').val();
    var email = $('#Email').val();
    var message = $('.message').val();
    message = message.replace(/</g, "&lt;");
    message = message.replace(/>/g, "&gt;");
    message = message.replace(/\\/g, "&quot;");
    message = message.replace(/'/g, "&apos;");
    name = name.replace(/</g, "&lt;");
    name = name.replace(/>/g, "&gt;");
    name = name.replace(/\\/g, "&quot;");
    name = name.replace(/'/g, "&apos;");
    email = email.replace(/</g, "&lt;");
    email = email.replace(/>/g, "&gt;");
    email = email.replace(/\\/g, "&quot;");
    email = email.replace(/'/g, "&apos;");
    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message;

    Email.send({
        SecureToken: "31c101ed-19a9-4ff2-9d94-ba71df93dba2",
        To: 'deeptamresearchfoundation@gmail.com',
        From: "deeptamresearchfoundation@gmail.com",
        Subject: "New message on contact us form " + name,
        Body: Body

    }).then(
        message => {
            if (message == 'OK') {
                successMsg()
            }
            else {
                errorMsg()
                console.error(message);
            }
            finish();
        }
    );
}

function getFrmDelay() {
    timeDelay = setTimeout(timeMsg, 25000);
}
document.getElementById("form").onsubmit = function () {
    document.getElementById('load').style.display = "inline"
    getFrmDelay();
}
