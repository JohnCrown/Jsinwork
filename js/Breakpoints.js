"use strcit ";

function hello(params) {
    
    console.log("Hello World ");
    debugger; //Ставим брейкпоинт и ищем баги.
}
hello();

function hi(params) {
    console.log("Say hi!");
    
}

hi();

const arr = [1, 14, 4, 30, 54],
      sorted = arr.sort(compareNum);
      
      function compareNum(a, b) {
          return a - b;
          
          
      }
compareNum ();