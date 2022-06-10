//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let age: number;
let nnn: number;
age = parseInt(prompt('entrez votre age'));
nnn = parseInt(prompt('اذا كان شعرك طويل ادخل 1واذا كان شعرك قصير ادخل2ر '));
if (age == 1 || age == 2) {
  console.log('رضيع');
} else if (age >= 3 && age <= 14) {
  console.log('طفل');
}
if (age >= 15 && age <= 21) {
  console.log('شاب ');
} else if (age >= 22 && age <= 100) {
  console.log('رجل ');
}
if (age >= 100) {
  console.log('ميت ميت ميت انه ميت ');
}
   if   (nnn = 2) {
  console.log('انت ذكر ');
  }
else if (nnn = 1)   { console.log('انت انثى ر ');
}