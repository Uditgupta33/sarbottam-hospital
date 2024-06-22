const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail({
    const bodyMessage = `Full Name: ${fullName.value} `
})

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sarbottamhospital01@gmail.com",
        Password : "325340D33F316D801EEF316FF4A46255DBF6",
        To : 'sarbottamhospital01@gmail.com',
        From : "sarbottamhospital01@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    sendEmail()
});