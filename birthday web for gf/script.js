function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

const startDate = new Date("2024-03-28");

function updateDays(){

    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("days").innerHTML =
    days + " Days ❤️";

}

updateDays();