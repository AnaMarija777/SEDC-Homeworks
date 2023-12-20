 
 let niza = [6,8,17,1017,63,825,462,9,54,982];

 function someArray (arrays){
     let najmal = Infinity;
     let najgolem = Infinity;

     for (let i = 0; i<arrays.length; i++){
        if (najmal > arrays[i]){
            najmal = arrays[i];

        }
        if (najgolem<arrays[i]){
            najgolem = arrays[i];
        }
     }
console.log("Max:"+ najgolem,"Min:" + najmal,"Sum: " + (najgolem + najmal));


 }
 someArray(niza);