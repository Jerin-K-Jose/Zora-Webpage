// let unreadContainer = document.getElementById('unread-list');
// let readContainer = document.getElementById('read-list');

// notes = {
//     s1:{
//         name:"Doe",
//         note_image_path:"https://unsplash.com/photos/FGWpR-O9QlQ"
//     },
//     s2:{
//         name:"Smith",
//         note_image_path:"https://unsplash.com/photos/FGWpR-O9QlQ"
//     },
//     s3:{
//         name:"Jones",
//         note_image_path:"https://unsplash.com/photos/FGWpR-O9QlQ"
//     },
// };
// let text = JSON.stringify(notes);

// student_notes = JSON.parse(text);
// console.log(student_notes);

// for(students in student_notes){
//     for(key in students){
//         console.log();
//     }
// }


//modal popup

let student_modal_3 = document.getElementById("s3");
let student_modal_4 = document.getElementById("s4");
let student_modal_5 = document.getElementById("s5");

let new_page_stud_id;

function newPage(id){
  location.href = "student_note.html";
  new_page_stud_id = id;
  
}

