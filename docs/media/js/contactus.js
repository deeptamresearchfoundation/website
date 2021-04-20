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
    name = name.replace("'", "&apos;;");
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
            //console.log (message);
            if (message == 'OK') {
                window.location.replace("../contactus/thankyou/thankyou.html")
            }
            else {
                console.error(message);
                window.location.replace("../contactus/error/error.html")

            }

        }
    );
}
