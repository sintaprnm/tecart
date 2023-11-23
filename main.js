function validateEmail() {
    // Mendapatkan nilai input email
    var email = document.getElementById("email").value;

    // Pola untuk memeriksa validitas email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Memeriksa apakah email valid
    if (emailPattern.test(email)) {
        // Email valid, menghapus pesan eror dan menambah kelas success-state
        document.querySelector("#error-message").innerHTML = "";
        document.querySelector("#error-message").classList.remove("error");
        document.querySelector("#error-message").classList.add("success-state");

        // Menghilangkan kelas form content ul dan input form
        document.querySelector(".form-content ul").style.display = "none";
        document.querySelector(".input-form").style.display = "none";

        // Menampilkan pesan sukses
        var successMessage = document.createElement("p");
        successMessage.innerHTML = "THANKS FOR SUBSCRIBE !!!";
        successMessage.classList.add("success-state-message");
        document.querySelector(".form").appendChild(successMessage);

    } else {
        // Email tidak valid
        console.log('Email not valid');
        document.querySelector("#error-message").innerHTML = "Valid Email Required!";
        document.querySelector("#error-message").classList.remove("success-state"); // Hapus kelas success-state jika ada
        document.querySelector("#error-message").classList.add("error"); // Tambahkan kelas error
    }
}
