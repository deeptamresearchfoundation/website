function sendemail() {

    var name = $('#Name').val();
    var email = $('#Email').val();
    var message = $('.message').val();

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
