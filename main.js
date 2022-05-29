// var manager = {
//     firstname:'nati',
//     lastname:'tesfay',
//     age:25,
//     sallery:10000,
// }


// var worker = {
//     firstname:'chen',
//     lastname:'semo',
//     birthDate:1995,
//     email:'chen.semo1150@gmail.com',
//     adrees:'haliya 5',
// }

// var fruit = {
//     fruitName:' apple ',
//     fruitColor:' red ',
//     fruitType:' lolipop ',
// }
// document.write(fruit.fruitName); 

// document.write(fruit.fruitColor);

// document.write(fruit.fruitType);



// var students = {
//     Number:5,
//     studentsNumber:24,
//     studentsNames:['avi,ron,lior,daniel,chen'],

// }
//  for (var i = 0; i < students.studentsNames.length; i++) {
//   document.write(students.studentsNames[i]);
//  }   
    

// var gardean = {
//     ganenetName:'zivit',
//     kidNum:10,
//     kidNumber:['jacob','chen','lior','yoni','ran','avi','aviv','ruti','ron','daniel'],
  
// }
//  for (let i = 0; i < gardean.kidNumber.length; i++) {
//      document.write(gardean.kidNumber[i] + '<br/>')
     
//  }
//  var userKey = prompt('enter key');
//  document.write(gardean[userKey]);


// var myObject = {};
// myObject.numKids = prompt('enter class number');
// myObject.kidsNum = prompt('enter kids number');
// myObject.kidsAges = prompt('enter age');
// console.log(myObject)

// var myObject = {};
// var valueForUser = prompt('enter value');
// var keyForUser = prompt('enter key');
// myObject[valueForUser] = keyForUser;
// console.log(myObject);

// var teacherObject = {};
// var valueForUser = prompt('enter teacher name');
// var keyForUser = prompt('enter teacher last name');
// teacherObject[valueForUser] = keyForUser;
// console.log(teacherObject);

// var managerObject = {}
//    for (let i = 0; i < 4; i++) {
//     var myValue = prompt('ENTER VALUE');
//     var myKey = prompt('ENTER KEY');
//     managerObject[myKey] = myValue

       
//    }

// var myObject = {};
// for (var i = 0; i < 4; i++) {
//     var myValue = prompt();
//     var myKey = prompt();
//     myObject[myKey] = myValue;
// document.write('<div>' + myObject[myKey] + '</div>');
// }

// var carsObjects = {};
// for (let i = 0; i < 3; i++) {
//     var compenyValue = prompt('enter compeny');
//     var carColorKey = prompt('enter color');
//     var smkKey = prompt('enter smk');
//     carsObjects[compenyValue] = carColorKey,smkKey; 
//     console.log('<div>' + carsObjects + '</div>')   
// }



// var cars = []
//     for (let i = 0; i < 4; i++) {
        
//     var car = {}
//  car.compeny = prompt('enter compeny');
//  car.model = prompt('enter model');
//  car.color = prompt('enter color');
//  car.year = prompt('enter year');
//  document.write('<div>' + car.compeny + " " + car.model + " " + car.color + " " + car.year)
//     }

//     function someCats() {
        
//     for (let i = 0; i < 3; i++) {
        
//     var cats = {};
//     cats.name = prompt('name');
//     cats.birth = prompt('birth');
//     cats.type = prompt('type');
//     cats.over = prompt('size');
//     document.write('<h1>' + cats.name + " " + cats.birth + " " + cats.type + " " + cats.over + '</h1>')
//     }
// }
// someCats();


// function someObject() {
//     var arrayDogs ={};
//     var dogs = [];
//     for (var i = 0; i < 3; i++) {
//     dogs.name =prompt('dog name')
//     dogs.age =prompt('dog age')
//     dogs.kind =prompt('dog kind')
//     dogs.owner =prompt('dog owner')
//     dogs.push(arrayDogs);
//     }
//     document.write( '<p>' + dogs.name + " " + dogs.age + " " + dogs.kind + " " + dogs.owner + '</p>')
// }
// someObject()


// function someInsects() {
//             var insect = {};
//             for (let i = 0; i < 4; i++) {
//                 if (insect.wing == 'yes') {
//                 }
//             insect.num = prompt('enter number')
//             insect.name = prompt('insect kind')
//             insect.nameInsect = prompt('enter name')
//             insect.numLegs = prompt('how many legs')
//             insect.wing = prompt('does the insect has wing?')
//             console.log('<h3>' + insect.num + " " + insect.name + " " + insect.nameInsect + " " + insectnumLegs + " " + insect.wing + '</h3>');
         
//             }

//             if (insect.wing != 'yes') {
//                 console.log('<h3>' + insect.num + " " + insect.name + " " + insect.nameInsect + " " + insectnumLegs + " " + '</h3>');
            
//         }
// }           
// someInsects();


function myKids() {
   for (let i = 4; i <= Kids ; i++) {
    }
    var Kids = {
        name:prompt('enter name'),
        last:prompt('enter last name'),
        age:prompt('enter age'),
        gorden:prompt('yes/no'),
    }
}
        console.log( '<p>' + Kids.name + " " + Kids.last + " " + Kids.age + " " + Kids.gorden + '</p>')

myKids();

    





// ---------22---------
// function someTeachers(teachersNum) {
//     for (let i = 0; i < teachersNum; i++) {        
    
//    var teacher = {
//        name: '',
//        salary:199,
//        email:'',
//        birthyear:1999,
//    }
//    if (teacher.salary > 100 || teacher.birthyear < 1990) {
//        document.write('<span>' +teacher.name + " " + teacher.salary + " " + teacher.email + " " + teacher.birthyear + '</span></br>');
//    }
//   }
// }

// someTeachers(4);




// function someApartment(num) {
//     for (var i = 0; i < num; i++) {
//     var apartments = {
//         addres:prompt(),
//         rent: +prompt(),
//         buyPrice: +prompt(),
//         intrestedPpl:[],
//         isTivuch: confirm(),
//     };
//     if (!apartments.isTivuch) {
//          document.write(apartments.addres + '</br>');
//          for (var j = 0; j < apartments.intrestedPpl.length; j++) {
//             document.write(apartments.intrestedPpl[j] + '</br>')
             
//          }

//     }
//   }
// }