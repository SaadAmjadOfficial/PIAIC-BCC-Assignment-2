var sub1 = +prompt("Enter Obtained marks in 1st Subject" , "100") , 
sub2 = +prompt("Enter Obtained marks in 2nd Subject" , "100") , 
sub3 = +prompt("Enter Obtained marks in 3rd Subject" , "100") ,
tot = +prompt("Enter Total marks" , "300") , obMraks = sub1 + sub2 + sub3 ,
perc = (obMraks * 100) / tot , grade = 0 , remarks = 0;
if (perc >= 80) {
    document.write("<b>" + "Markes Sheet" + "</b>" + "<br>" + "<br>" + "<br>" + "Total Marks : " + tot + "<br>" + 
    "Marks Obtained : " + obMraks + "<br>" + "Percentage : " + perc + "%" + "<br>" + "Grade : A-One" + "<br>" + 
    "Remarks : Excellent");    
} else if (perc >= 70) {
    document.write("<b>" + "Markes Sheet" + "</b>" + "<br>" + "<br>" + "<br>" + "Total Marks : " + tot + "<br>" + 
    "Marks Obtained : " + obMraks + "<br>" + "Percentage : " + perc + "%" + "<br>" + "Grade : A" + "<br>" + 
    "Remarks : Good");
} else if (perc >= 60) {
    document.write("<b>" + "Markes Sheet" + "</b>" + "<br>" + "<br>" + "<br>" + "Total Marks : " + tot + "<br>" + 
    "Marks Obtained : " + obMraks + "<br>" + "Percentage : " + perc + "%" + "<br>" + "Grade : B" + "<br>" + 
    "Remarks : You need to improve");
} else {
    document.write("<b>" + "Markes Sheet" + "</b>" + "<br>" + "<br>" + "<br>" + "Total Marks : " + tot + "<br>" + 
    "Marks Obtained : " + obMraks + "<br>" + "Percentage : " + perc + "%" + "<br>" + "Grade : Fail" + "<br>" + 
    "Remarks : Sorry");
}