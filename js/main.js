/*
* Student: Zeinab AbuSharkh
* Student Number: 40886942
* DOM Exercise 
*/

//Task 1

//Access HTML element with id tag-line.
var tagLine = document.getElementById("tag-line");
console.log("TagLine: " + tagLine.innerHTML);


//Access all headings that belong to div with the class name bg-main-content.
var headings = document.querySelectorAll(".bg-main-content h2");
console.log(headings);

//Create the variable collect and assign it with content of tag-line.
var collect = "";
collect += tagLine.innerHTML + "\n-----------------------------\n\n";

//Loop through the array of headings and append the content of each heading to variable collect
var i;
for (i = 0; i < headings.length; i += 1) {
    collect += headings[i].innerHTML + "\n";
    console.log("Headings: " + headings[i].innerHTML);
}

//After the loop, use alert to print collect
alert(collect);



//Task 2


//Access 13th div with class name box that belongs to div with the class name bg-main-content.
var boxes = document.querySelectorAll(".bg-main-content .box");

//You can name the variable when_to_launch.
var when_to_launch = boxes[12];
console.log("box" + when_to_launch.innerHTML);

//Use property children to "scoop" in array all HTML elements that belong to that div.
console.log("Children" + when_to_launch.children);

//Create the variable collect and assign it with content of heading that belongs to gotten array.
var collect = when_to_launch.children[0].innerHTML + "\n-----------------------------\n\n";;

//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
var i;
for (i = 1; i < when_to_launch.children.length; i += 1) {
    collect += when_to_launch.children[i].innerHTML + "\n\n";
    console.log("Children: " + when_to_launch.children[i].innerHTML);
}

//After the loop, use alert to print collect
alert(collect);