
const firststring = "apple";
const secondstring = "banana";
const thirdstring = "watermelon";

console.log(firststring.length);
console.log(thirdstring.length);
console.log(secondstring.length);

const lengthoffirststr = firststring.length;
const lengthofsecondtstr = secondstring.length;
const lengthofthirdstr = thirdstring.length;

if (lengthoffirststr < lengthofsecondtstr && lengthoffirststr < lengthofthirdstr)
{
    console.log(`${firststring} is the smallest string`);
} else if (lengthofsecondtstr < lengthofsecondtstr&& lengthofsecondtstr < lengthofthirdstr)
{
    console.log(`${secondstring} is the smallest string`);
}
else if (lengthofthirdstr < lengthoffirststr && lengthofthirdstr < lengthofsecondtstr)
{
    console.log(`${lengthofthirdstr} is the smallest string`);
}



