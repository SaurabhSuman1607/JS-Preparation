 let ans = ['Saurabh' , 'Mayank' , 'Rohit' , 'Nahain'];
 
  let arOfObj=[{
   Name : 'Saurabh',
   Age : 334 ,
   Animal : 22
  },
 
   {
    Name : 'mayank',
    Age : 323 ,
    Animal : 122
  
 },
 
 {
    Name : 'Rohit',
    Age : 12 ,
    Animal : 12
  
 }
]


 // Spred operator it si ...
//  function letswork(...item) {
//      console.log(item);
//  }

//  letswork(ans);
// foreach loop are laso high order funciton

//  ans.forEach((items) =>{
//    console.log(items)
//  })

  function printme(arra){
    console.log(arra.Name , arra.Age ,arra.Animal);
    
  }

  arOfObj.forEach(printme);

  arOfObj.forEach((items)=>{
      console.log(items.Animal);
  })