function errorMsg(){
    var msgErr = document.getElementById("modal-header");
    msgErr.style.background="#dd3b3b";
    msgerrr = document.getElementById("message_sent_msg").innerText="Error While Sending Message";
    $("#myModal").modal();
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
    message = message.replace("<", "&lt;");
    message = message.replace(">", "&gt;");
    message = message.replace("\"", "&quot;");
    message = message.replace("'", "&apos;");
    name = name.replace("<", "&lt;");
    name = name.replace(">", "&gt;");
    name = name.replace("\"", "&quot;");
    name = name.replace("'", "&apos;");
    email = email.replace("<", "&lt;");
    email = email.replace(">", "&gt;");
    email = email.replace("\"", "&quot;");
    email = email.replace("'", "&apos;");
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
                console.error(message);
                errorMsg()
            }
            finish();
        }
    );
}