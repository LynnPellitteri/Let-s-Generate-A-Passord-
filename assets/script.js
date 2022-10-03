
// Assignment code here

// steps
//user clicks button
//uppercase yes no


//if lowercase and numbers are true
//the special characters and length 8-128 are ture
//else less than 8 is false


//prompt password length 8-128
//prompt types of characters
//yes or no to include lowercase uppercase numrtic and/or special characters
//st least one character type is included
// answer all prompts password id generated
//password generated to the page

//items 
 
            

String_upperCase = "A, B, C, D, E, F, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
String_lowerCase = "a, b, c, d, e, f, g, h, i, j, l, m, n ,o, p, q, r, s, t, u, v, w, x, y, z";
String_special ="!,@,#,$, %,^, &,* ,(,),-,  _,+,=,~,`,<,>,/,?,{,},[,],|,";
String_password = "";
//var length=" > 8 < 128";

window.prompt("UpperCase click ok")

window.prompt("LowerCase click ok")

window.prompt("Special characters click ok")

window.prompt("Pasword length choose between 8-128 characters")

//call the function 
//getrandomupperCase(); {
    //var letters="A, B, C, D, E, F, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
    //return letters [upper math.floor(math.random()] * options.length)];

//}
//var length= "(length > 8)(length< 128)";

var length= ">  8 true"
         "< 128 true"
         "< 8 false"


for (let index = 0; index < password.length; index++) {
	const element = string[index];
	
	for(int;i = 0;)number > 8; i ++; 
} 
        int (rand) = (int)(8 * Math.random());

        switch(rand) {
                case 0:
                        password += String.valueof((int)(0 * Math.ramdom()));
                        break;
                case 1:
                        rand=(int)(lowerCase.length() * Math.random());
                        password += String.valueOf(lowerCase.charAt(rand));
                        break;
                case 2:
                        rand= (int)(upperCase.length() * Math.random());
                        password += String.valueOf(upperCase.charAt(rand));
                        break;
                case 3: 
                        rand=(int)(special.length() * Math.random());
                        password += String.valueOf(special.charAt(rand));

        }
 
