const passwordInput = document.getElementById("inputPassword");
const visibilityIcon = document.getElementById("visibilityIcon");

passwordInput.addEventListener("input", function() {
    if (passwordInput.value !== "") {
        visibilityIcon.style.display = "inline-block";
    } else {
        visibilityIcon.style.display = "none";
    }
});

passwordInput.addEventListener("focus", function() {
    if (passwordInput.value !== "") {
        visibilityIcon.style.display = "inline-block";
    }
});

passwordInput.addEventListener("blur", function() {
    visibilityIcon.style.display = "none";
});

function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        visibilityIcon.textContent = "visibility_off";
    } else {
        passwordInput.type = "password";
        visibilityIcon.textContent = "visibility";
    }
}


