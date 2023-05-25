// first class function
// function outer (callback)
// {
//     callback();
// }
// একমাত্র ফাংশন কেই কল ব্যাক করা যায়।
// কলব্যাক ফাংশন টা আউটার এর পেরামিটার আকারে আসতাসে, তাহলে আউটার কে বলা হয় ফ্রাস্ট ক্লাস ফাংশন।

// function outer()
// {
//     return function ()
//     {

//     }
// }
// এখানে আউটার এর ফলাফল একটি ফাংশন, আউটার কে কল দিলে একটি ফাংশন অবশ্যই পাবো,  তাহলেও আউটার ক্লাস টি হলো ফ্রাস্ট ক্লাস ফাংশন।

// // -----------------

// একটি ফাংশন তখনি ফ্রাস্ট ক্লাস ফাংশন হবে যখন ফাংশনটি আরেকটি ফাংশনকে পেরামিটার আকারে রিসিভ করবে অথবা যেকোনো ফাংশন কে রিটার্ন করবে। 

// ফ্রাস্ট ক্লাস ফাংশন যেই ফাংশন টা কে পেরামিটার আকারে রিসিভ করবে অই রিসিভড ফাংশনটাকেই বলে কলব্যাক ফাংশন।

// এনোনিমাস ফাংশন এর কোনো নাম থাকে না।
// ------------------



// প্রশ্ন পরবঃ

// 1. What is lexical environment:
// Ans : Any Execution context's memory component and its parent's lexical environment. 

// 2. What is Hoisting ?
// Ans: Memory allocation in the creation phase is called hoisting.

// (মেমোরি তে এলোকেট হয়ে থাকাই হোয়েস্টিং।)

// 3. What is a scope chain?
//  Ans: ধরেন, একটা এক্সিকিউশন কন্টেক্সট আছে, অ হচ্ছে কোড কম্পোনেন্ট ঐ ভেরিএবল ইউজ হয়েছে, 
// কোড কম্পনেন্ট ঐ ভেরিয়েবল কে চিনে না। সে তার নিজের , 
//     তার পেরেন্ট এর অথবা তার পেরেন্ট এর মেমোরি কম্পোনেন্ট এ খুজবে, 
//         এইভাবে যে চেইন তৈরি হয় তাকেই স্কোপ চেইন বলে। 

//  4. Difference between parameter and argument:
//  Ans: Parameter receives argument upon the time of function call.

//  5. Function expression:
//  Ans: the function which is assigned to a variable is called the function expression.

//  6. What is anonymous function''''''''''''
//  Ans: The function that has no name is called the anonymous function.

// :::::::::::::::::
//  7. What is closer?
//  Ans: Any function along with its lexical environment forms a closure. (Without closer reference error occurs. Because the variable is lost.)

// // version:1 - in here closer is formed
function outer ()
{
    var a =10;

    function inner()
    {
        const x = 25;
        console.log(x);
        console.log(a);
    }
    
    return inner;
}
var x = outer();
x();
// // version:1 - in here closer is formed because inner has been returned.

// version:2 - in here no closer is formed
// function outer ()
// {
//     var a =10;

//     function inner()
//     {
//         console.log(a);
//     } return inner;
// }
// var x = outer();
// x();
// in here no closure is formed because It didn't need the memories which was lost.

// version:3 - in here closer is formed
function outer ()
{

    var a = 10;
    var c = 4;

    function inner()
    {
        console.log(a);

        function mosInner()
        { 
            console.log(c);
        }
        mosInner();

    }
    return inner;
}
var x = outer();
x();

// পেরেন্ট এর লেক্সিকাল এনভাইরোন্মেন্ট থাকে ক্লোজার এর মধ্যে। 
//  Global execution context has 2 parts. code component and memory component. 2 phase. creation phase and execution phase. In the creation phase, variables and functions are stored. when a variable is stored in memory it's undefined but it get's defined upon that execution context's code component. and the function  is the same as it is. (small description of closer)
// :::::::::::::::::

//  8. What is scope?
//  Ans: একটি ভেরিএবল কে তার নিজের মেমোরি কম্পোনেন্ট এ খুজে না পাওয়া গেলে, এক্সিকিউশন কন্টেক্সট সেই ভেরিএবল কে অন্যান্য মেমোরি কম্পোনেন্ট এ খুজতে থাকে। আর এই ভেরিএবল যেখানে যেখানে খুজে পাবো সেটাই হলো Scope. আর এই যে বিভিন্ন মেমোরি কম্পোনেন্ট এর ভিতর খুজতে গিয়ে তৈরী হয় একটি Scope Chain.

//  9. Condition of first class function?
// Ans: একটি ফাংশন তখনি ফ্রাস্ট ক্লাস ফাংশন হবে যখন ফাংশনটি আরেকটি ফাংশনকে পেরামিটার আকারে রিসিভ করবে অথবা যেকোনো ফাংশন কে রিটার্ন করবে। 

//  10. What is a callback function?
// Ans: ফ্রাস্ট ক্লাস ফাংশন যেই ফাংশন টা কে পেরামিটার আকারে রিসিভ করবে অই রিসিভড ফাংশনটাকেই বলে কলব্যাক ফাংশন।

//  11. What is an anonymous function?
// Ans: এনোনিমাস ফাংশন এর কোনো নাম থাকে না।

//  12. What is function declaration?
//  Ans: Generally the function body is called the function declaration.

//  13. IIFE?
//  Ans: If we enclose any function with () parathesis and call that function then it is said to be the Immediately invoked function.

//  14. What is created in the creation phase?
//  Ans: memory.

// ===========================
// Class - 7
// -------------

// Let & Const:
// These two keyword has been intruduced to us in the 6th upgrade of javascript. It has been 7 years for let & const.
var a = 10;
if (a > 0)
{
// This is the local scope
    var p=10;
    console.log (p);
    console.log ("Hello World");
}
// This is the global execution context.
console.log (a);
console.log (p);

// In here in global execution context we will have the memory component and the code component which is called the creation phase. In the creation phase var a is undefined. and the var p is undefined.

// Now for the execution phase is to be StaticRange. Then var =10 and var p=10.
// Then console will be runned meaning the execution context will execute 
    // console.log (p);
    // console.log ("Hello World");
    // &
    // console.log (a);
    // console.log (p);
// These 4 lines and give the assigned values.
// In short word the local scope is also getting out and being assigned to the global scope. Which is called memory leaking.

// Now, One thing to note is that the condition statement will be run in the creation phase only and only if the condition is true. But still the value of the var p = 10 will get out and will be execute in console.log (p), in the below example. Which is being caused because the var keyword is globally hoisted in the memory component.
// Let's see the below example:
var a = 10;
if (false)
{
// This is the local scope
    var p=10;
    console.log (p);
    console.log ("Hello World");
}
// This is the global execution context.
console.log (a);
console.log (p);
// On the above example we will still find that the console.log (p) is still giving the value of p = undefined. Which is caused only because of memory leaking.

// To solve this memory leaking problem Block {} was intruduced:
{
    var a=10;
    console.log (a);
}

{
    console.log (a);
}
// On above we can see 2 blocks. We know that blocks contents are to be accessed only in their scope. But because var is globally 

//  * in javascript if( ){ } is always one line code.

console.log(a);

let a = 10;

console.log(a);
// On the above code, first console will be executed by giving a reference error:

// Uncaught ReferenceError: Cannot access 'a' before initialization.

// Because when using let type variable. the console that wants to show the value of the variable must be executed under the creation phase line of the variable.

//  Becase in 2015 a new term was intruduced which is called the temporal dead zone. 
console.log(a);

let a = 10;

console.log(a);

// temporal deadzone is a Time range. 

// This time is the time of :

// when in creation phase the value of the variable is hiosted as undefined.
// From that moment to the moment when there is no value assigned to the variable is called the temporal dead zone.

// Bangla: যখন a এর ভেলূ ক্রিয়েশন ফেজ এ আন্ডিফাইন্ড (meaning the hoisting)। সেই সময় থেকে a এর ভিতর জতখন পরজন্ত অন্য কনো ভেলূ এসাইন না হবে সেই সময়কে বলে টেম্পোরাল ডেড জোন। 

// In here the creation of the a is in Script scope. Not in the global scope.

console.log(a);

let a = 10;

console.log(a);

// আমরা জানি, হোইস্টিং হওয়ার পর থেকে যতক্ষণ পর্যন্ত ভেরিএবল এ ভেলূ এসাইন করা না হবে ততখন পর্যন্ত সময়কে Temporal Dead zone বলে। আর Temporal dead zone এর সময় কনো ভেলূ কে এক্সেস করা যাবে না।
// উপরে এ জন্য Uncaught ReferenceError: Cannot access 'a' before initialization. দেখা গিয়েছে। 

let a = 10;

// console.log(a);
// এই ভেলূ টা এক্সেস করা যাবে। 
// ---------------






// under the example let's value was created in the scope of block. In this case let's value will only be in the block scope. not in the global scope.
if (true)
{
    let a = 10;
    console.log(a);
}
console.log(a);







// under the example the value was created in the script scope.
let a = 10;
console.log(a);

// It is now clear that the value of the let can only be created in script or block. But not in global scope.

// conclusion:



// 1. Memory component is devided in three part:
//     1. global/Local,
//     2. Script,
//     3. block.






// In this case the lexical environment will be selected by the type of variable defined in the mixed function of the lexical environment. If the locally executed context's execution phase has the same variable name from the parent memory component and the parent memory component has the variable assigned as let. Then the lexical environment will happen under the scope of script!
// ex-1:
let a = 10;
console.log(a);








// ex-2:
let p=10;
if (true)
{
    let a =10;
    console.log(a);
}
// on the above example a new execution context will be created for the if () {}block. only using let will create a new execution context.
// console.log(a);
// On the example above p will be in the scope of script and a will be in the scope of block!







let p=10;
if (true)
{
    let a=10;
    console.log(a);
    if(true)
    {
        console.log(a);
    }
}
// On the above example we can see that child block will get the value of a from the parent if by scope. not by lexical environment.






let p=10;
if (true)
{
    let a=10;
    console.log(a);
    if(true)
    {
        let a=20;
        console.log(a);
    }
}
// On the above example the block will not shadow the a variable. It will take the value of a from its own block!



const a = 10; //same as let.

// But only one difference that is the value of a can never be changed.

// We will always use the const variable.

function call (callback)
{
    callback("Hello");
}
// function print(text)
// {
//     console.log(text);
// } 
// Or
call (function print(text)
{
    console.log(text);
});
// 1. In here first global context has only call function.
// 2. then execution phase will pass the full print function as argument to the callback function.
// 3. A new execution context will be created for the print function which is called the local execution contxt.
// 4. callback function is representing the print function.
// 5. Hello will be passed to the execution context of the print function.
// end of stack. 
