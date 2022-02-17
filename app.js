
// All Elements
const stab_header = document.querySelectorAll('.sajjad-tab .stab-header ul a');
const stab_pane_all = document.querySelectorAll('.sajjad-tab .stab-pane');

// ForEach loop for stab Header
stab_header.forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();

        stab_header.forEach( item => {
            item.classList.remove('active');
        })
        item.classList.add('active');

        const stab_pane = document.querySelector(this.getAttribute('href'));

        stab_pane_all.forEach( item => {
            item.classList.remove('active');
        })

        stab_pane.classList.add('active');

    });
});


/**
 *  Theme Options Clone
 */
// All Elements
const theme_left_site = document.querySelectorAll('.main-theme .theme-option .theme-left-site ul li a');
const theme_pane_all = document.querySelectorAll('.main-theme .theme-option .theme-right-site .theme-pane')

// ForEach loop for theme left site
theme_left_site.forEach(left => {
    left.addEventListener('click', function(e) {
        e.preventDefault();

        theme_left_site.forEach( left => {
            left.classList.remove('active');
        })
        left.classList.add('active');

        const theme_pane = document.querySelector(this.getAttribute('href'));
        
        theme_pane_all.forEach(left => {
            left.classList.remove('active');
        })
        theme_pane.classList.add('active');
        

    })
});

/**
 *  Student Result App
 */
// Elements
const student_form = document.querySelector('#student-form');
const data_list = document.querySelector('#data_list');

student_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = student_form.querySelector('input[placeholder="Student Name"]');
    let roll = student_form.querySelector('input[placeholder="Roll Number"]');
    let student_class = student_form.querySelector('input[placeholder="Class Name"]');
    let photo = student_form.querySelector('input[placeholder="Photo"]');
    let gender = student_form.querySelector('input[type="radio"]:checked');
    let bangla = student_form.querySelector('input[placeholder="Bangla"]');
    let english = student_form.querySelector('input[placeholder="English"]');
    let math = student_form.querySelector('input[placeholder="Math"]');
    let science = student_form.querySelector('input[placeholder="Science"]');
    let social_science = student_form.querySelector('input[placeholder="Social Science"]');
    let religion = student_form.querySelector('input[placeholder="Religion"]');

    if( name.value == '' || roll.value == '' || student_class.value == '' || photo.value == '' ){
        name.style.border = '1px solid red';
        roll.style.border = '1px solid red';
        student_class.style.border = '1px solid red';
        photo.style.border = '1px solid red';
    }else{
    
        let data_storege = [];
        if(dataGet('result_Apps')){
            data_storege = dataGet('result_Apps');
        }

        data_storege.push({
            name            :   name.value,
            roll            :   roll.value,
            student_class   :   student_class.value,
            photo           :   photo.value,
            gender          :   gender.value,
            bangla          :   bangla.value,
            english         :   english.value,
            math            :   math.value,
            science         :   science.value,
            social_science  :   social_science.value,
            religion        :   religion.value
        });

        dataSend('result_Apps', data_storege);

        // Remove all input value
        student_form.querySelector('input[placeholder="Student Name"]').value = '';
        student_form.querySelector('input[placeholder="Roll Number"]').value = '';
        student_form.querySelector('input[placeholder="Class Name"]').value = '';
        student_form.querySelector('input[placeholder="Photo"]').value = '';
        student_form.querySelector('input[type="radio"]:checked').removeAttribute('checked');
        student_form.querySelector('input[placeholder="Bangla"]').value = '';
        student_form.querySelector('input[placeholder="English"]').value = '';
        student_form.querySelector('input[placeholder="Math"]').value = '';
        student_form.querySelector('input[placeholder="Science"]').value = '';
        student_form.querySelector('input[placeholder="Social Science"]').value = '';
        student_form.querySelector('input[placeholder="Religion"]').value = '';
    
    };

    allStudent_data();

});

allStudent_data()
// All Student Data
function allStudent_data(){

    let result = new Result();
    let all_data = dataGet('result_Apps');

    let student_data = '';
    all_data.map((student, index) => {

        student_data += `
            <tr>
                <td> ${ index + 1 } </td>
                <td> ${ student.name } </td>
                <td> ${ student.roll } </td>
                <td> ${ student.student_class } </td>
                <td> <img style="width: 50px; height: 50px; object-fit: cover;" src="${ student.photo } " alt=""> </td>
                <td> ${ student.gender } </td>
                <td>${result.finalGrade(all_data[index].bangla, all_data[index].english, all_data[index].math, all_data[index].science, all_data[index].social_science, all_data[index].religion).totalCgpa}</td>
                <td>${result.finalGrade(all_data[index].bangla, all_data[index].english, all_data[index].math, all_data[index].science, all_data[index].social_science, all_data[index].religion).totalGrade}</td>
                <td>
                    <button class="btn text-white btn-info shadow-none btn-sm" onclick="studentViewResult(${index})" data-bs-toggle="modal" data-bs-target="#student_modal">View</button>
                    <button onclick="deleteData(${index})" class="btn text-white btn-danger shadow-none btn-sm">Delete</button>
                </td>
            </tr>
        `;
    })

    data_list.innerHTML = student_data ;

}

/**
 * Delete Storage Data
 * @param {*} id 
 */
function deleteData(id){

    let confirm_delete = confirm('Are you sure?');

    if(confirm_delete){
        let data_storege = dataGet('result_Apps');
        data_storege.splice(id, 1);
        dataSend('result_Apps', data_storege);
        allStudent_data();
    }else{
        return false;
    }
    
};

// Modal Element
const student_modal_body = document.querySelector('.student-modal-body');

/**
 * View Modal result show
 * @param {*} index 
 */
function studentViewResult(index){

    let result = new Result();
    let data_storege = dataGet('result_Apps');
    
    student_modal_body.innerHTML = `
        <div class="div-01 float-start mb-4">
        <img class="shadow-lg" src="${data_storege[index].photo}" alt="">
        </div>
        <div class="div-02 float-end pt-4 mb-4">
            <h4>Name: <span>${data_storege[index].name}</span></h4>
            <h4>Roll : <span>${data_storege[index].roll}</span></h4>
            <h4>Class: <span>${data_storege[index].student_class}</span></h4>
        </div>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Subjects</th>
                    <th>Marks</th>
                    <th>GPA</th>
                    <th>Grade</th>
                    <th>CGPA</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bangla</td>
                    <td>${data_storege[index].bangla}</td>
                    <td>${result.gpa_and_grade(data_storege[index].bangla).gpaCal}</td>
                    <td>${result.gpa_and_grade(data_storege[index].bangla).gradeCal}</td>

                    <td class="show-middle" rowspan="6">${ result.finalGrade(data_storege[index].bangla, data_storege[index].english, data_storege[index].math, data_storege[index].science, data_storege[index].social_science, data_storege[index].religion ).totalGrade }</td>
                    
                    <td class="show-middle" rowspan="6">${ result.finalGrade(data_storege[index].bangla, data_storege[index].english, data_storege[index].math, data_storege[index].science, data_storege[index].social_science, data_storege[index].religion ).totalCgpa }</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>${data_storege[index].english}</td>
                    <td>${result.gpa_and_grade(data_storege[index].english).gpaCal}</td>
                    <td>${result.gpa_and_grade(data_storege[index].english).gradeCal}</td>
                </tr>
                <tr>
                    <td>Math</td>
                    <td>${data_storege[index].math}</td>
                    <td>${result.gpa_and_grade(data_storege[index].math).gpaCal}</td>
                    <td>${result.gpa_and_grade(data_storege[index].math).gradeCal}</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>${data_storege[index].science}</td>
                    <td>${result.gpa_and_grade(data_storege[index].science).gpaCal}</td>
                    <td>${result.gpa_and_grade(data_storege[index].science).gradeCal}</td>
                </tr>
                <tr>
                    <td>Social Science</td>
                    <td>${data_storege[index].social_science}</td>
                    <td>${result.gpa_and_grade(data_storege[index].social_science).gpaCal}</td>
                    <td>${result.gpa_and_grade(data_storege[index].social_science).gradeCal}</td>
                </tr>
                <tr>
                    <td>Religion</td>
                    <td>${data_storege[index].religion}</td>
                    <td>${result.gpa_and_grade(data_storege[index].religion).gpaCal}</td>
                    <td>${result.gpa_and_grade(data_storege[index].religion).gradeCal}</td>
                </tr>
            </tbody>
        </table>
    
    `;


};

