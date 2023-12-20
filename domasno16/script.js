let firstName=["Ana Marija","Radica","Sara","Gjorgi"];
let lastName =["Stojchevska","Shvigir","Ruzhakova","Cvetkov"];

let singleArrayOfNames = [];

for (let i=0; i<firstName.length; i++){
    singleArrayOfNames.push(firstName[i]+" "+lastName[i]);
}
console.log(singleArrayOfNames);