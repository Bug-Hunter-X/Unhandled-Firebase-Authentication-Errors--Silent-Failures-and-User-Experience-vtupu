// Improved Firebase Authentication with Error Handling

function handleSignIn(email, password) {
  try {
    // Firebase sign-in logic
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successful sign-in
        console.log('Sign-in successful:', userCredential.user);
        // Redirect or update UI accordingly
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign-in failed:', errorCode, errorMessage);
        // Provide user-friendly feedback based on the error code
        if (errorCode === 'auth/invalid-email') {
          alert('Invalid email format. Please check your email address.');
        } else if (errorCode === 'auth/user-not-found') {
          alert('User not found. Please check your email address.');
        } else if (errorCode === 'auth/wrong-password') {
          alert('Incorrect password. Please try again.');
        } else if (errorCode === 'auth/network-request-failed'){
          alert('Network error. Please check your internet connection and try again.');
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      });
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    alert('An unexpected error occurred. Please try again later.');
  }
}