
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getDatabase, set, ref ,push, child, onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    // Your configaration code here
    apiKey: "AIzaSyDcQhFnOgc0JeZEUjqcf1pgGr_8q1x5Zxk",
    authDomain: "data-retrieval-af08e.firebaseapp.com",
    projectId: "data-retrieval-af08e",
    databaseURL:"https://data-retrieval-af08e-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "data-retrieval-af08e.appspot.com",
    messagingSenderId: "292041957796",
    appId: "1:292041957796:web:aaf9184257b482d6906131",
    measurementId: "G-DSRCQHB9RW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = getDatabase(app);

  // write data
  
  document.getElementById('submit').addEventListener('click',(e) => {

    e.preventDefault();

    let userId = document.getElementById('uid').value;
    let firstName = document.getElementById('first-name').value;  
    let lastName = document.getElementById('last-name').value;  
    let email = document.getElementById('email').value;  

    // const userId = push(child(ref(database), 'users')).key;
   
    set(ref(database, 'users/' + userId), {
    firstName: firstName,
    lastName: lastName,
    email : email
   });
   
    alert('saved');
  });

  // read data
  getData.addEventListener('click',(e) => {

    $('#dataTbl td').remove();
    var rowNum = 0; 
    const dbRef = ref(database, 'users/');

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      // ...
      rowNum += 1; 
      var row = "<tr><td>" + rowNum + "</td><td>" + childData.firstName + "</td><td>" + childData.lastName + "</td><td>" + childData.email + "</td></tr>"

      $(row).appendTo('#dataTbl');
      
      });
    }, {
       onlyOnce: true
    });


  });
