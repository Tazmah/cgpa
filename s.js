const welcome = document.querySelector(".welcome");
const cgpaGpa = document.querySelector(".gpa_cgpa");
const moreInfo = document.querySelector(".moreinfo");
const showNew = document.getElementById("showNew");
const moreContainer = document.querySelector(".more_container");
const closeInfo = document.querySelector(".close_info");
const closeSection = document.querySelector(".close_section");
const unit = document.querySelector(".course_unit");
const grade = document.querySelector(".select_grade");
const gpaScore = document.querySelector(".score");
const semesterHouse = document.querySelector(".form_container");
const addSemester = document.querySelector("#add-semester");
const drop = document.querySelectorAll(".course");
const lastDrop = drop[1];
const reset = document.querySelector(".reset");

let courseGrade, courseUnit;
let increase = 2;
const addSubject = document.querySelector("#addSubject");
const courseAppend = document.querySelector(".courseAppend");

reset.addEventListener("click", () => {
    document.reset;
})

addSubject.addEventListener("click", () => {
    courseAppend.innerHTML += `
    <div class="mew">
    <input type="text" placeholder="Course Code">
    <select class="select_grade" name="grade" id="1">
        <option>Grade</option>
        <option value="4.0">A+</option>
        <option value="3.75">A</option>
        <option value="3.50">A-</option>
        <option value="3.25">B+</option>
        <option value="3.0">B</option>
        <option value="2.75">B-</option>
        <option value="2.50">C+</option>
        <option value="2.25">C</option>
        <option value="2.0">D</option>
        <option value="0.0">F</option>
    </select>
    <input type="number" name="unit" placeholder="Course Unit" min="0" class="course_unit">

    <input type="number" placeholder="Cumulative Point" id="cp" disabled>
    </div>
    `
})




addSemester.addEventListener("click", () => {
    increase++;
    semesterHouse.innerHTML += `
    <div class="head">
    <div class="head__title">
        <h2>Semestar ${increase}</h2>
    </div>
    <div class="addcourse">
        <button class="btn btn-primary" id="${increase}">Add New Course</button>
    </div>
    </div>
    <div class="course">
    <input type="text" placeholder="Course Code">
    <select class="select_grade" name="grade" id="1">
        <option>Grade</option>
        <option value="4.0">A+</option>
        <option value="3.75">A</option>
        <option value="3.50">A-</option>
        <option value="3.25">B+</option>
        <option value="3.0">B</option>
        <option value="2.75">B-</option>
        <option value="2.50">C+</option>
        <option value="2.25">C</option>
        <option value="2.0">D</option>
        <option value="0.0">F</option>
    </select>
    <input type="number" name="unit" placeholder="Course Unit" min="0" class="course_unit">
    
    <input type="number" placeholder="Cumulative Point" id="cp" disabled>
    
    
    </div>
    <div class="result">
        <div class="gpa_result">
            <h3>Your gpa is: <span class="score">0.0</span></h3>
        </div>
        <div class="calcBtn">
            <button class="btn">
                Calculate
            </button>
        </div>
    </div>
    `;
});




unit.addEventListener("input", () => {
    courseUnit = parseFloat(unit.value)
    console.log(courseUnit);
});

grade.addEventListener("change", () => {
    courseGrade = parseFloat(grade.value);
    console.log(courseGrade);
});




// show abd hide more info
moreInfo.addEventListener("click", () => {
    moreContainer.style.display = "block";
});

closeInfo.addEventListener("click", () => {
    moreContainer.style.display = "none";
})

//  show and hid both sections welcome and cgpa/gpa
showNew.addEventListener("click", () => {
    welcome.style.display = "none";
    cgpaGpa.style.display = "flex";
});
closeSection.addEventListener("click", () => {
    welcome.style.display = "flex";
    cgpaGpa.style.display = "none";
})
