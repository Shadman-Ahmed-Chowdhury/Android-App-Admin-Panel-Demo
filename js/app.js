var firebaseConfig = {
    apiKey: "AIzaSyCLLtTsLmjiuATu--srq-kWCXpX_66c3Eo",
    authDomain: "android-app-admin-panel.firebaseapp.com",
    databaseURL: "https://android-app-admin-panel.firebaseio.com",
    projectId: "android-app-admin-panel",
    storageBucket: "android-app-admin-panel.appspot.com",
    messagingSenderId: "949906327586",
    appId: "1:949906327586:web:5d317d5a3246aa9ecd227b",
    measurementId: "G-K5SZV88YYY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

$("#btn-login").click(function () {
    alert("login Button clicked!");
});
