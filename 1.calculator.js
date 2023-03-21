const grades = documnet.querySelectorAll('.grades');
const chours = documnet.querySelectorAll('.chours');
const points = documnet.querySelectorAll('.points');
const gpoints = documnet.querySelectorAll('.gpoints');
const result = documnet.querySelectorAll('.result');

function calculation()
{
    var p=0;
    var cr=0;
 for(var i=0;i<grades.length;i++)
 {
    if(grades[i].value=="A" && chours[i]=="1"){
        p=p+3.7;
        cr=cr+1;
    }
    else if(grades[i].value=="A" && chours[i]=="2"){
        p=p+7.4;
        cr=cr+2;
    }
    else if(grades[i].value=="A" && chours[i]=="3"){
        p=p+11.2;
        cr=cr+3;
    }
    else if(grades[i].value=="A" && chours[i]=="4"){
        p=p+14.4;
        cr=cr+4;
    }
    else if(grades[i].value=="B" && chours[i]=="1"){
        p=p+3;
        cr=cr+1;
    }
    else if(grades[i].value=="B" && chours[i]=="2"){
        p=p+6;
        cr=cr+2;
    }
    else if(grades[i].value=="B" && chours[i]=="3"){
        p=p+9;
        cr=cr+3;
    }
    else if(grades[i].value=="B" && chours[i]=="4"){
        p=p+12;
        cr=cr+4;
    }
    else if(grades[i].value=="C" && chours[i]=="1"){
        p=p+1.5;
        cr=cr+1;
    }
    else if(grades[i].value=="C" && chours[i]=="2"){
        p=p+3;
        cr=cr+2;
    }
    else if(grades[i].value=="C" && chours[i]=="3"){
        p=p+4.5;
        cr=cr+3;
    }
    else if(grades[i].value=="C" && chours[i]=="4"){
        p=p+6;
        cr=cr+4;
    }
    else if(grades[i].value=="D" && chours[i]=="1"){
        p=p+1;
        cr=cr+1;
    }
    else if(grades[i].value=="D" && chours[i]=="2"){
        p=p+2;
        cr=cr+2;
    }
    else if(grades[i].value=="D" && chours[i]=="3"){
        p=p+3;
        cr=cr+3;
    }
    else if(grades[i].value=="D" && chours[i]=="4"){
        p=p+4;
        cr=cr+4;
    }
 }
 var total=p/cr;
 result=innerHTML = `your gpa is${total}`;

}

function assignpoints(){
    for(var i=0;i<grades.length;i++)
 {
    if(grades[i].value=="A" && chours[i]=="1"){
        gpoints[i].innerHTML = "3.7";
    }
    else if(grades[i].value=="A" && chours[i]=="2"){
        gpoints[i].innerHTML = "7";  
    }
    else if(grades[i].value=="A" && chours[i]=="3"){
        gpoints[i].innerHTML = "11.2";
        
    }
    else if(grades[i].value=="A" && chours[i]=="4"){
        gpoints[i].innerHTML = "14.4";
        
    }
    else if(grades[i].value=="B" && chours[i]=="1"){
        gpoints[i].innerHTML = "3";
        
    }
    else if(grades[i].value=="B" && chours[i]=="2"){
        gpoints[i].innerHTML = "6";
       }
    else if(grades[i].value=="B" && chours[i]=="3"){
        gpoints[i].innerHTML = "9";
        
    }
    else if(grades[i].value=="B" && chours[i]=="4"){
        gpoints[i].innerHTML = "12";
        
    }
    else if(grades[i].value=="C" && chours[i]=="1"){
        gpoints[i].innerHTML = "1.5";
       
    }
    else if(grades[i].value=="C" && chours[i]=="2"){
        gpoints[i].innerHTML = "3";
       
    }
    else if(grades[i].value=="C" && chours[i]=="3"){
        gpoints[i].innerHTML = "4.5";
       
    }
    else if(grades[i].value=="C" && chours[i]=="4"){
        gpoints[i].innerHTML = "6";
       
    }
    else if(grades[i].value=="D" && chours[i]=="1"){
        gpoints[i].innerHTML = "1";
       
    }
    else if(grades[i].value=="D" && chours[i]=="2"){
        gpoints[i].innerHTML = "2";
       
    }
    else if(grades[i].value=="D" && chours[i]=="3"){
        gpoints[i].innerHTML = "3";
        
    }
    else if(grades[i].value=="D" && chours[i]=="4"){
        gpoints[i].innerHTML = "4";
        
    }
 }
}
function assignpoint2(){
    for(var i=0;i<grades.length;i++){
        if(grades[i].value=="A"){
            points[i].innerHTML=="3.7";
        }
        else if(grades[i].value=="B"){
            points[i].innerHTML=="3";
        }
        else if(grades[i].value=="C"){
            points[i].innerHTML=="1.5";
        }
        else if(grades[i].value=="D"){
            points[i].innerHTML=="1";
        }
    }   
}