
//A function that takes at least three arguments and returns the result of some set of operations using those arguments
  const func1 = function(name1, name2, name3){
  const b = name1+name2
  const c = name3 + b
  return b+c
  };
  console.log(func1(123, 5, 12));
 

//A function that takes no arguments and returns something 

  const func2 = function(){
  const trim = 48+14;
  return trim;
  };
  const nameo = func2();
  console.log(nameo);


//A function that takes arguments, does something but does not return anything
   const func3=function(h, h1){
  const add=h+h1;
  const mult=h*h1;
  console.log(mult+add);
  };
  func3(12, 13);



//A function that takes three strings and returns the string that is the longest
  const func4=function(st1, st2, st3){
    if(st1.length>st2.length && st1.length>st3.length){
    return st1;
    }else if(st2.length>st1.length && st2.length>st3.length){
    return st2;
    }else if(st3.length>st1.length && st3.length>st2.length){
    return st3;
    }
  }
  console.log(func4("zaven","portapar","gazalcakayan"));



// function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
    const func5=function(x,y){
    const a=0;
    const b=1; 
    const c=-1;
    
    if (x===y){
    return a;
    }else if(x>y){
    return b;
    }else if(x<y){
    return c;
    }
  }
  console.log(func5(1,2));




//Create a multiply function (that multiplies the two given arguments together and returns the result)
//Create a divide function (that divides the first argument by the second and returns the result)
//Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote)
 const func6=function(mult1, mult2){
    return mult1 * mult2
  }
  (func6(12,12));


  const func7=function(numb1, numb2){
    return numb1 / numb2
  }
 (func7(144,12));
 


const areaoftriangle=function(base,height){
	return func7(func6(base, height),2);
}
console.log(areaoftriangle(10,20));
  


//Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length


  const numLenght=function(a){
    return a.length;
}
console.log(numLenght("356483"));


//reate a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1


const func8=function(stringg1,stringg2,numberr1){
    const h =  1;
    const g = -1;
    if(stringg1.length + stringg2.length > numberr1){
        return h;
    }else{
        return g;
    }
    
}
console.log(func8("vazgen","gexam",4));

//Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1

    const runStaff=function(nu1,nu2,strr1){ 
    const areatr=(nu1*nu2)/2;
    const arearec=nu1*nu2;
    const nothing=-1;
    if(strr1==="rectangle"){
        return arearec;
    }else if(strr1==="triangle"){
        return areatr;
    }else if(strr1!=="rectangle"){
        return nothing;
    }else if(strr1!=="triangle"){
        return nothing;
    }
};
console.log(runStaff( 10, 20,"petros"));



