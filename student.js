//get element for regular expression

const icon = document.querySelectorAll('.icon');
const name_msg = document.querySelector('.name-msg');
const roll_msg = document.querySelector('.roll-msg');
const cls_msg = document.querySelector('.cls-msg');
const photo_msg = document.querySelector('.photo-msg');
const ban_msg = document.querySelector('.ban-msg');
const eng_msg = document.querySelector('.eng-msg');
const math_msg = document.querySelector('.math-msg');
const s_msg = document.querySelector('.s-msg');
const ss_msg = document.querySelector('.ss-msg');
const rel_msg = document.querySelector('.rel-msg');

//Regular Expression Validation Test
const name_valid = /^[a-zA-Z\s]{3,30}$/;
const class_valid = /^[0-9]{1,3}$/;
const roll_valid = /^[0-9]{1,3}$/;

//get elements

const result_form = document.getElementById('result_form');
const data_list = document.getElementById('data_list');



result_form.addEventListener('submit', function(e){
    e.preventDefault();

    let student_name = document.querySelector('input[placeholder="Student Name"]');
    let student_roll = document.querySelector('input[placeholder="Student Roll"]');
    let student_class = document.querySelector('input[placeholder="Student Class"]');
    let student_photo = document.querySelector('input[placeholder="Student Photo"]');
    let student_gender = document.querySelector('input[type="radio"]:checked');
    
    let ban = document.querySelector('input[placeholder="Bang"]');
    let eng = document.querySelector('input[placeholder="English"]');
    let math = document.querySelector('input[placeholder="Math"]');
    let science = document.querySelector('input[placeholder="Science"]');
    let s_science = document.querySelector('input[placeholder="Social Science"]');
    let Religion = document.querySelector('input[placeholder="Religion"]');


    if(student_name.value == '' || student_roll.value == '' || student_class.value == '' || student_photo.value == '' || ban.value == '' || eng.value == '' || math.value == '' || science.value == '' || s_science.value == '' || Religion.value == ''){
        student_name.style.border = '1px solid red';
        icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        name_msg.innerHTML = '*Name Required'

        student_roll.style.border = '1px solid red';
        icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        roll_msg.innerHTML = '*Roll No Required'

        student_class.style.border = '1px solid red';
        icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        cls_msg.innerHTML = '*Class Name Required'

        student_photo.style.border = '1px solid red';
        icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        photo_msg.innerHTML = '*Photo link Required'

        ban.style.border = '1px solid red';
        icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        ban_msg.innerHTML = '*Bangla Mark Required'

        eng.style.border = '1px solid red';
        icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        eng_msg.innerHTML = '*English Mark Required'

        math.style.border = '1px solid red';
        icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        math_msg.innerHTML = '*Math mark Required'

        science.style.border = '1px solid red';
        icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        s_msg.innerHTML = '*Science Mark Required'

        s_science.style.border = '1px solid red';
        icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        ss_msg.innerHTML = '*Social Science Mark Required'

        Religion.style.border = '1px solid red';
        icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        rel_msg.innerHTML = '*Religion Mark Required'

    }else if (name_valid.test(student_name.value) == false) {
        student_name.style.border = '1px solid red';
        icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        name_msg.innerHTML = '*Name Must be Required'
    }else if (roll_valid.test(student_roll.value) == false) {
        student_roll.style.border = '1px solid red';
        icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        roll_msg.innerHTML = '*Name Must be Number (0-9) Required'
    }else if (class_valid.test(student_class.value) == false) {
        student_class.style.border = '1px solid red';
        icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        cls_msg.innerHTML = '*Class Must be(0-9) Required'
    }else if (markVal(ban.value) == false) {
        ban.style.border = '1px solid red';
        icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        ban_msg.innerHTML = '*Mark Must be(0-9) Required'
    }else if (markVal(eng.value) == false) {
        eng.style.border = '1px solid red';
        icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        eng_msg.innerHTML = '*Mark Must be(0-9) Required'
    }else if (markVal(math.value) == false) {
        math.style.border = '1px solid red';
        icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        math_msg.innerHTML = '*Mark Must be(0-9) Required'
    }else if (markVal(science.value) == false) {
        science.style.border = '1px solid red';
        icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        s_msg.innerHTML = '*Mark Must be(0-9) Required'
    }else if (markVal(s_science.value) == false) {
        s_science.style.border = '1px solid red';
        icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        ss_msg.innerHTML = '*Mark Must be(0-9) Required'
    }else if (markVal(Religion.value) == false) {
        Religion.style.border = '1px solid red';
        icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
        rel_msg.innerHTML = '*Mark Must be(0-9) Required'
    }else{

        let storage_data = [];

        if(dataGet('result_apps')){
            storage_data = dataGet('result_apps');
        };
        console.log(storage_data);

        storage_data.push({

            student_name    : student_name.value,
            student_roll    : student_roll.value,
            student_class   : student_class.value,
            student_photo   : student_photo.value,
            student_gender  : student_gender.value,
            Ban_mark        : ban.value,
            Eng_mark        : eng.value,
            Math_mark       : math.value,
            Science_mark    : science.value,
            SS_mark         : s_science.value,
            Religion_mark   : Religion.value    

        });

        dataSend('result_apps', storage_data);

        document.querySelector('input[placeholder="Student Name"]').value = '';
        document.querySelector('input[placeholder="Student Roll"]').value = '';
        document.querySelector('input[placeholder="Student Class"]').value = '';
        document.querySelector('input[placeholder="Student Photo"]').value = '';
        document.querySelector('input[type="radio"]:checked').removeAttribute('checked');
        
        document.querySelector('input[placeholder="Bang"]').value = '';
        document.querySelector('input[placeholder="English"]').value = '';
        document.querySelector('input[placeholder="Math"]').value = '';
        document.querySelector('input[placeholder="Science"]').value = '';
        document.querySelector('input[placeholder="Social Science"]').value = '';
        document.querySelector('input[placeholder="Religion"]').value = '';

        allStudentData();

    }

});

allStudentData();

function allStudentData(){

    let all_data = dataGet('result_apps');

    let data = '';

    all_data.map((student, index) => {

        data += `
                <tr class="text-center">
                    <td>${index + 1}</td>
                    <td>${student.student_name}</td>
                    <td>${student.student_roll}</td>
                    <td>${student.student_class}</td>
                    <td>${student.student_gender}</td>
                    <td>4.80</td>
                    <td>A</td>
                    <td> <img style="width: 50px; height: 50px; object-fit: cover;" src="${student.student_photo}" alt=""></td>
                    <td>
                        <button class="btn btn-info btn-sm">View</button>
                        <button onclick="deleteStudentData(${index})" class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
        
        `;
    });

    data_list.innerHTML = data;

};

/**
 * Delete Student Data
 * @param {*} indx 
 * @returns 
 */
function deleteStudentData (indx) {
    let storage_data = dataGet('result_apps');

    let confrm = confirm('Are you sure ?');

    if (confrm) {
        storage_data.splice(indx, 1);

        dataSend('result_apps', storage_data);
        allStudentData();
    }else{
        return false;

    }

    
}


