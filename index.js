let unreadContainer = document.getElementById('unread-list');
let readContainer = document.getElementById('read-list');

count = 0;

student_note = {
    id: 0,
    note_image: document.createElement("img"),
    name: '',
    isread: false,
    note_read:function(){
        this.isread = true;
    }
};

notes = {
    s1:{
        name:"Doe",
        note_image_path:"https://unsplash.com/photos/FGWpR-O9QlQ"
    },
    s2:{
        name:"Smith",
        note_image_path:"https://unsplash.com/photos/FGWpR-O9QlQ"
    },
    s3:{
        name:"Jones",
        note_image_path:"https://unsplash.com/photos/FGWpR-O9QlQ"
    },
};
let text = JSON.stringify(notes);

student_notes = JSON.parse(text);
console.log(student_notes);

for(students in student_notes){
    for(key in students){
        console.log();
    }
}



