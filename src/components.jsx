import {airquality, calculateslope, fahrenheittocelsius,hello, meterstominutes, squarefeettoacres, yee_ha} from './functions.js';
function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius
<h2>results</h2>
<p>fahrenheittocelsius(32) == "{fahrenheittocelsius(32)}"</p>    
 <p>fahrenheittocelsius(212) == "{fahrenheittocelsius(212)}"</p>    
 <p>fahrenheittocelsius(70) == "{fahrenheittocelsius(70)}"</p>    

    </section>
}

function Question3(){
    return <section>
3. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
<h2>results</h2>
<p>squarefeettoacres(100000) == "{squarefeettoacres(100000)}"</p>
<p>squarefeettoacres(0) == "{squarefeettoacres(0)}"</p>
<p>squarefeettoacres(55000) == "{squarefeettoacres(55000)}"</p>
    </section>
}

function Question4(){
    return <section>
4. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn.
<h2>results</h2>
<p>meterstominutes (10,15,5) == "{meterstominutes(10,15,5)}"</p>
<p>meterstominutes (5,5,5) == "{meterstominutes(5,5,5)}"</p>
<p>meterstominutes (4,15,5) == "{meterstominutes(4,8,5)}"</p>
        </section>
}

function Question5(){
    return <section>
5. Compute the air quality given an air quality index:
<h2>results</h2>
<p>airquality (54) == "{airquality(54)}"</p>
<p>airquality (127) == "{airquality(127)}"</p>
<p>airquality (201) == "{airquality(201)}"</p>
<p>airquality (166) == "{airquality(166)}"</p>
<p>airquality (500) == "{airquality(500)}"</p>
    </section>
}

function Question6(){
    return <section>
6. yee_ha takes an integer parameter and returns strings
<h2>results</h2>
<p>yee_ha (9) == "{yee_ha(9)}"</p>
<p>yee_ha (14) == "{yee_ha(14)}"</p>
<p>yee_ha (21) == "{yee_ha(21)}"</p>
<p>yee_ha (16) == "{yee_ha(16)}"</p>
    </section>
}

function Question7(){
    return <section>
7. Calculate the slope of a line.
<h2>results</h2>
<p>calculateslope (1,2,3,6) == "{calculateslope(1,2,3,6)}"</p>
<p>calculateslope (2,2,4,10) == "{calculateslope(2,2,4,10)}"</p>
<p>calculateslope (1,1,2,2) == "{calculateslope(1,1,2,2)}"</p>
    </section>
}
export {Question1,Question2,Question3,Question4,Question5,Question6,Question7}