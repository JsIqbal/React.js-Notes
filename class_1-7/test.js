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