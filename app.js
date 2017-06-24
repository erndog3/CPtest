// (function()) {



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBV0rXxL6kKjdtCp6WO0SCHLc23fCphzTM",
    authDomain: "campplanner-b4f50.firebaseapp.com",
    databaseURL: "https://campplanner-b4f50.firebaseio.com",
    projectId: "campplanner-b4f50",
    storageBucket: "campplanner-b4f50.appspot.com",
    messagingSenderId: "425032695752"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout'); 

  // Add login event listener to button
  btnLogin.addEventListener('click', e => {
  	//Get email and pass
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();
  	//sign in
  	auth.signInWithEmailAndPassword(email, pass);
  	promise.catch(e => console.log(e.message))});

  	//logout event listener to button
  	btnLogout.addEventListener('click', e => {
  		firebase.auth().signOut();
  	});

	// add signup event listener to button
	btnSignUp.addEventListener('click', e => {
		//Get email and pass
		//TODO: check for real email address
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();
  	//sign in
  	const promise = auth.createUserWithEmailAndPassword(email, pass);
  	promise.catch(e => console.log(e.message));
	});

	//Adds realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
		}	
	});






