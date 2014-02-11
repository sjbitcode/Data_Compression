
var cs = ""; // compressed string
var dc = ""; // decompressed string
var word = "AAAABBACCC";

/////////////////////////////////////////////////////////////////////////

/* function which takes a number
and a letter and simply compresses
that "substring" based on specs in the README!*/
function compress(num, letter)
{
    var attach = letter + letter;
    
    if(num == 1)
    {
        return cs += letter;
    }
    else if(num <= 11)
    {
        num -= 2;
        cs += attach + num;
        return cs;
    }
    else // numbers > 11
    {
        while(num > 11) //filtering out multiples of 11
        {
            num -= 11;
            cs += attach + 9;
        }
        if(num == 0) // if multiple of 11
        return cs;
        else if(num != 0) // ...or some left over
        {
           if(num > 1)
           {
              num -= 2;
              cs += attach + num;
              return cs;
           }
           else
           {
               cs += letter;
               return cs;
           }
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////

/*function which takes a string
of multiple capital letters A-Z
and compresses it! */
function parseword(w)
{
    var counter = 1; // start counting from 1, not 0
    
    for(var i = 0; i < w.length; i++)
    {
        var first = w[i];
        var next = w[i+1];
        
        if(first == next)
        {
            counter++;
        }
        else
        {
           compress(counter, first);
           counter = 1;
        }
        
    }
    return cs;
}

////////////////////////////////////////////////////////////////////////////

function decompress(w)
{
    var prev = "";
    for(var i = 0; i < w.length; i++)
    {
        if(!isNaN(w[i]))
        {
            var amt = w[i];
            if(w[i] != 0) // append nothing to decompressed 
            {
                prev = w[i-1]; // get letter to be repeated
                for(var j = 0; j < amt; j++)
                dc += prev;
            }
        }
        else dc += w[i];
    }
    return dc;
}

////////////////////////////////////////////////////////////////////////////

console.log("Original string:     " + word + "\n");
console.log("Compressed string:   " + parseword("AAAABBACCC") + "\n");
console.log("Decompressed string: " + decompress("AA2BB0ACC1"));


