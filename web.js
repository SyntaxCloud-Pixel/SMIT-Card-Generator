function submition() {
    let name = document.getElementById("name")
    let fatherName = document.getElementById("father")
    let cnic = document.getElementById("cnic")
    let course = document.getElementById("course")
    let name2 = document.getElementById("name2")
 
    if ( name.value === "" || fatherName.value === "" || cnic.value === "" || course.value === "") {
  alert("Please fill all the fields!");
  return;
}

    name2.innerText = name.value
    let course2 = document.getElementById("course2")
    course2.innerText = course.value
    let roll2 = "WMA" + (Math.round(Math.random() * 9000) + 1000)
    let roll = document.getElementById("roll")
    roll.innerText = roll2
    if (name.value === "secret") {
        alert("This code belongs to syed muhammad")
        document.getElementById("name2").innerText = "YOU STOLE THE CODE";
        document.getElementById("course2").innerText = "";
        document.getElementById("roll").innerText = "";
        document.getElementById("name3").innerText = "YOU STOLE THE CODE";
        document.getElementById("fatherName3").innerText = "";
        document.getElementById("cnic2").innerText = "";
        document.getElementById("course3").innerText = "";
        document.getElementById("img").src = "";
    }
    let img = document.getElementById("img")
    let profile = document.getElementById("profile")
    if (profile && profile.files[0]) {
        img.src = URL.createObjectURL(profile.files[0])
    }
    let name3 = document.getElementById("name3")
    name3.innerText = name.value
    let fatherName3 = document.getElementById("fatherName3")
    fatherName3.innerText = fatherName.value
    let cnic2 = document.getElementById("cnic2")
    cnic2.innerText = cnic.value
    let course3 = document.getElementById("course3")
    course3.innerText = course.value + " " + "(Batch 18)"
    html2canvas(document.getElementById("card-full")).then(canvas => {

    const { jsPDF } = window.jspdf;

    let imgData = canvas.toDataURL("image/png");

    let pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height]
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    let userName = document.getElementById("name").value.trim().replace(/\s+/g, "_");

    pdf.save(`${userName}_CARD.pdf`);
});
}
