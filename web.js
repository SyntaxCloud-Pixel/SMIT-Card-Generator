function submition(){
    let  name = document.getElementById("name")
    let  fatherName = document.getElementById("father")
    let  cnic = document.getElementById("cnic")
    let  course = document.getElementById("course")
    let output = document.getElementById("output")
    let name2 = document.getElementById("name2")
    name2.innerText = name.value
    let course2 = document.getElementById("course2")
    course2.innerText = course.value
    let roll2 = "WMA" + (Math.floor(Math.random() * 9000) + 1000)
    let roll = document.getElementById("roll")
    roll.innerText = roll2
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
        let link = document.createElement("a");
          let userName = document.getElementById("name").value.trim().replace(/\s+/g, "_"); 
         link.download = `${userName}_CARD.png`;     
        link.href = canvas.toDataURL();    
        link.click();                        
    });
}