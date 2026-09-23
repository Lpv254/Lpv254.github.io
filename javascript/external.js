/*let userName = prompt('What is your name?')
document.getElementById('welcome').textContent = `Hello, welcome ${userName}!`

//arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++)
{
  document.writeln(arr[i],"<br>");
}
*/
var webmaps=
[
  ["All Trails", "https://www.alltrails.com/"],
  ["All trails was designed to help people find hikes and properties of them."],
  ["Flight Radar 24", "https://www.flightradar24.com/"],
  ["Flight radar locates and gathers information on flights and planes around the world."]
];
function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}
 function webmap_table()
 {
   document.write("<table width=100%>");
   for (var row=0; row < webmaps.length; row++)
   {
     document.write("<tr>");
     if (row % 2 == 0)
     {
       for (var column = 0; column < 2; column++)
       {
       document.write("<td>" + webmaps[row][column] + "</td>");
        }
      }
     else
     {
       document.write("<td colspan=2>" + webmaps[row][0] + "</td>");
     }
     document.write("</tr>");
   }
   document.write("</table>");
   return "";
 }
