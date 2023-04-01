
var firebaseConfig = {
    apiKey: "AIzaSyC4Ei_LrU3fs4gAWS42KSxYbMRO1jWhHqE",
    authDomain: "my-portfolio-e9fff.firebaseapp.com",
    projectId: "my-portfolio-e9fff",
    storageBucket: "my-portfolio-e9fff.appspot.com",
    messagingSenderId: "192713081964",
    appId: "1:192713081964:web:77f81631d16519a4a50449"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("contact-us")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission

submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()

    //Get Form Values
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let subject = document.getElementById('subject').value
    let country = document.getElementById('country').value
    let email = document.getElementById('emailbox').value

    //Save Form Data To Firebase
    db.doc().set({
        fname: firstName,
        lname: lastName,
        email:email,
        country: country,
        subject:subject
    }).then( () => {
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })

    //alert
    alert("Your Form Has Been Submitted Successfully")
})

//history
