let unit = parseInt (prompt ("enter your meter unit "))
if (unit > 90 )
{
    document.write (" <b> your electricity bill  " + 'per unit 15rs ' +  (unit*15), '</b>'  )
}
else if (unit > 80)
{
    document.write (" <b> your electricity bill " + 'per units 13rs ' + unit*13 ,'</b>' )
}
else if (unit > 70)
{
    document.write (" <b> your electricity bill " + 'per units 11rs <br> =' + unit*11 , '</b>' )
}
else if (unit > 60 )
{
    document.write (" <b> your electricity bill " +'per units 9rs  <br> =' + unit*9 , '</b>' )
}
else if (unit > 50 )
{
    document.write ("<b> your electricity bill " + 'per units 7rs <br> =' + unit*7 ,  '</b>' )
}
else {
    document.write (" <b> your electricity bill " + ' per units 3rs <br> = ' + unit*3 , '</b>' )
}