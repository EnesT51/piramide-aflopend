function PiramideAflopend(){
   var getal = prompt("Voer een getal in:");
   if(getal == null){
      alert("Input is leeg, voer een getal in.");
      PiramideAflopend();
   }
   for(let i = getal; i >= 0; i--){
      for(let x = 0; x <= i; x++){
         document.getElementById("PiramideAflopend").innerHTML += x;
      };
      document.getElementById("PiramideAflopend").innerHTML += "<br>";
   };
};
PiramideAflopend();