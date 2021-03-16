function sendemail() {

    var name = $('#Name').val();
    var email = $('#Email').val();
    var subject = $('#message').val();
    var message = $('#message').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>message: ' + subject + '<br>Message: ' + message;

    Email.send({
        // secure-token: c67899b3-aabc-440b-8751-860e9f33bb1b;

        Host : "smtp.gmail.com",
        Username : "deeptamresearchfoundationweb@gmail.com",
        Password : "aayushkumarjha@drf",
        To : 'deeptamresearchfoundation@gmail.com',
        From : "deeptamresearchfoundation@gmail.com",
        Subject : "New message on contact us form " + name,
        Body : Body

    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                window.location.replace("../Contact Us/thankyou.html")
            }
            else {
                console.error(message);
                window.location.replace("../Contact Us/error.html")

            }

        }
    );
}