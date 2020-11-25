class Matrica{
   constructor(max,odabraniBroj) {
      this.niz = new Array(max);
      this.max = max;
      this.odabraniBroj = odabraniBroj ;
      this.odI = 0;
      this.odJ = 0;
      this.minorGornjiI=0;
      this.minorDonjiI=0;
      this.minorGornjiJ=0;
      this.minorDonjiJ=0;
      // Kreiranje i popunjavanje matrice
      this.kreiraj();
      this.popuni();
      this.odrediGranice();
      this.odrediSusjede();
    }    
    kreiraj(){
      for (let i=0;i<this.max;i++)
      {
         this.niz[i]=new Array(this.max);
      }
    }
    popuni(){
      let counter=1;
      for (let i = 0; i < this.max; i++) {
         for (let j = 0; j < this.max; j++) {
            this.niz[i][j]=counter++;    
         }
      }
    }
    odrediGranice(){
      for (let i = 0; i < this.max; i++) {
         for (let j = 0; j < this.max; j++) {
            
            if(this.odabraniBroj==this.niz[i][j]) 
             {
                 this.odI=i;
                 this.odJ=j;
             }
             
         }  
      }
    }
    odrediSusjede(){
       // susjedi po horizontali
      if(this.odI==0)
      {
         this.minorDonjiI=this.odI;
         this.minorGornjiI=this.odI+1;       
      }
     else if(this.odI==9){
        this.minorDonjiI=this.odI-1;
        this.minorGornjiI=this.odI;
     }
     else{
        this.minorDonjiI=this.odI-1;
        this.minorGornjiI=this.odI+1;
     }
     
     // susjedi po vertikali
     if(this.odJ==0)
     {
        this.minorDonjiJ=this.odJ;
        this.minorGornjiJ=this.odJ+1;
     }
     else if(this.odJ==9)
     {
        this.minorDonjiJ=this.odJ-1;
        this.minorGornjiJ=this.odJ;
     }
     else{
        this.minorGornjiJ=this.odJ+1;
        this.minorDonjiJ=this.odJ-1;
     }
    }
    sumiraj(){
       let sumaMinor=0;
      for (let i = this.minorDonjiI; i <= this.minorGornjiI; i++) {
         for (let j= this.minorDonjiJ; j <= this.minorGornjiJ; j++) {
            
            sumaMinor+=this.niz[i][j]; 
         }  
      }
      return sumaMinor;
    }
}

let matricaMax = prompt("Unesi dimenzije kvadratne matrice");
let izracunSumuZaBroj = prompt("Unesi broj za koji zelis da izracunas sumu susjdednih brojeva");
let matrica =new Matrica(matricaMax, izracunSumuZaBroj);
alert(matrica.sumiraj());



































// let max=10;
// let myarray;

// function creatArrey(array, max1){
//    array=new Array(max1);
//    console.log(array);
// }

// function deklaracija(array, max1){
//    let counter=0;
//    for(let i=0; i<max1;i++){
//       array[i]=++counter;
//    }
//    console.log(array);
// }
// console.log(deklaracija(myarray,max));

