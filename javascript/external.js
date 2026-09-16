document.writeln("<button onlick= 'condition()'>Conditional Test,/button>");
function condition()
{
  x = confirm("Are you sure you want to proceed?");
  if(x)
  {
    document.writeln("You chose Okay?");
  }
  else
  {
    document.writeln("You chose Cancel!");
  }
}
