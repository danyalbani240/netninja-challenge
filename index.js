let $ = document;
const mailInput = document.querySelector("#email");
const tick = document.querySelector(".tick-style");
mailInput.addEventListener("keyup", () => {
    let valuable = checkMail(mailInput.value);
    if (valuable) {
        verify();
    } else {
        evaluate();
        return;
    }
});
//functions
function checkMail(value) {
    if (!value.includes(".") || !value.includes("@")) {
        return false;
    } else {
        let splitedbysign = value.split("@");
        if (splitedbysign[0] === "" || splitedbysign[1].substr(0, 1) === ".") {
            return false;
        } else if (value.includes(".com")) {
            return true;
        }
    }
}
function verify() {
    tick.classList.add("active");
    mailInput.classList.add("active");
}
function evaluate() {
    tick.classList.remove("active");
    mailInput.classList.remove("active");
}
