function ValidateMeStudent(){
    var fname = document.getElementById("fname"); 
    var lname = document.getElementById("lname"); 
    var dd = document.getElementById("DD");
    var mm = document.getElementById("MM");
    var yy = document.getElementById("YYYY");
    var fee = document.getElementById("Fee");
    var pic = document.getElementById("Prof");
    var ch1 = document.getElementById("Choise1");
    var ch2 = document.getElementById("Choise2");
    if (fname.value == "" || fname.value==null ||!/^[a-zA-Z]+$/.test(fname.value)) { 
        window.alert("Firstname must be full and contain only letters"); 
        fname.focus();
        return false; 
     } 
    if (lname.value == "" ||lname.value==null ||!/^[a-zA-Z]+$/.test(lname.value)) { 
        window.alert("Lastname must be full and contain only letters"); 
        lname.focus(); 
        return false; 
    }
    if(dd.value<1||dd.value>30||dd.value==null){
        window.alert("Day field is either invalid or empty.")
        dd.focus();
        return false;
    }
    if(mm.value<1||mm.value>12||mm.value==null){
        window.alert("Month field is either invalid or empty.")
        mm.focus();
        return false;
    }
    if(yy.value<1930||yy.value>2003||yy.value==null){
        window.alert("Year field is either invalid or empty.")
        yy.focus();
        return false;
    }
    if(!(fee.value>100&&fee.value<10000)){
        window.alert("Fee field is either empty or invalid");
        fee.focus();
        return false;
    }
    if(pic.files.length == 0){
        window.alert("No picture upload for profile picture");
        return false;
    }
    if(!(ch1.checked||ch2.checked)){
        window.alert("No Course is selected");
        return false;
    }
    alert("Succesful Entry");
    return true;
}


function ValidateMeTrainer(){
    var ftname = document.getElementById("ftname"); 
    var ltname = document.getElementById("ltname"); 
    var pic = document.getElementById("TProf");
    var ch1 = document.getElementById("TChoise1");
    var ch2 = document.getElementById("TChoise2");
    var subject1 = document.getElementById("chb1");
    var subject2 = document.getElementById("chb2");
    var subject3 = document.getElementById("chb3");
    var subject4 = document.getElementById("chb4");

    if (ftname.value == "" || ftname.value==null ||!/^[a-zA-Z]+$/.test(ftname.value)) { 
        window.alert("Firstname must be full and contain only letters"); 
        ftname.focus();
        return false; 
     } 
    if (ltname.value == "" ||ltname.value==null ||!/^[a-zA-Z]+$/.test(ltname.value)) { 
        window.alert("Lastname must be full and contain only letters"); 
        ltname.focus(); 
        return false; 
    }
    if(pic.files.length == 0){
        window.alert("No picture upload for profile picture");
        return false;
    }
    if(!(subject1.checked||subject2.checked||subject3.checked||subject4.checked)){
        window.alert("No subject is selected")
        return false;
    }
    if(!(ch1.checked||ch2.checked)){
        window.alert("No Course is selected");
        return false;
    }
    alert("Succesful Entry")
    return true;
}

function ValidateMeAss(){
    var title=document.getElementById("ATitle");
    var dd=document.getElementById("ADD");
    var mm=document.getElementById("AMM");
    var pic=document.getElementById("AProf");
    var oral = document.getElementById("Oral");
    var total = document.getElementById("Total");
    var ch1 = document.getElementById("AChoise1");
    var ch2 = document.getElementById("AChoise2");
    if(title.value == "" || title.value==null){
        window.alert("Title field empty");
        title.focus();
        return false;
    }
    if(dd.value<1||dd.value>30||dd.value==null){
        window.alert("Day field is either invalid or empty.")
        dd.focus();
        return false;
    }
    if(!((mm.value>0&&mm.value<4)||(mm.value==11||mm.value==12))||mm.value==null){
        window.alert("Month field is either invalid or empty. Check Courses Start and End Date please.")
        mm.focus();
        return false;
    }
    if(pic.files.length == 0){
        window.alert("No picture upload for profile picture");
        return false;
    }
    if(isNaN(oral.value)||oral.value==""||oral.value==null){
        window.alert("False insert for oral mark field");
        return false;
    }
    if(isNaN(total.value)||total.value==""||total.value==null){
        window.alert("False insert for total mark field");
        return false;
    }
     var sum=parseInt(oral.value,10) + parseInt(total.value,10);
    if(sum!=100){
        window.alert("Sum of total and oral must be 100");
        return false;
    }
    if(!(ch1.checked||ch2.checked)){
        window.alert("No Course is selected");
        return false;
    }
    window.alert("Entry Succesful.");
    return true;
}

function YouSure(){
    if (confirm('Are you sure you want to delete this one?')) {
        return true;
      } else {
        return false;
      }
}

function CheckMeUp(){
    var pic=document.getElementById("Prof");
    if(pic.files.length == 0){
        document.getElementById("No").style.visibility = "visible";
        document.getElementById("Yes").style.visibility = "hidden";
    }
    else{
        document.getElementById("Yes").style.visibility = "visible";
        document.getElementById("No").style.visibility = "hidden";
    }
}

function ValidateMeCu(){
  var pattern=/^CB-/;
  var title=document.getElementById("CTitle");
  var s1 = document.getElementById("CSChoise1");
  var s2 = document.getElementById("CSChoise2");
  var t1 = document.getElementById("CTChoise1");
  var t2 = document.getElementById("CTChoise2");
  var t3 = document.getElementById("CTChoise3");
  var t4 = document.getElementById("CTChoise4");
  var t5 = document.getElementById("CTChoise5");
  var t6 = document.getElementById("CTChoise6");
  var t7 = document.getElementById("CTChoise7");
  var pic=document.getElementById("Prof");
  var stdate=document.getElementById("StartDate");
  var endate=document.getElementById("EndDate");


  if(title.value==""||title.value==null||(!(pattern.test(title.value)))){
     window.alert("Title Field must not be empty and start with CB-");
     title.focus();
     return false;
  }
  if(!(s1.checked||s2.checked)||(s1.checked&&s2.checked)){
      window.alert("Choose only one box from the stream options");
      return false;
  }
  if(!(t1.checked||t2.checked||t3.checked||t4.checked||t5.checked||t6.checked||t7.checked)){
      window.alert("No Type checked");
      return false;
  }
  if(pic.files.length == 0){
    window.alert("No picture upload for profile picture");
    return false;
  } 
  if(stdate.value==""){
      window.alert("No start date given");
      return false;
  }
  if(endate.value==""){
    window.alert("No end date given");
    return false;
  }
  if(stdate.value>endate.value){
    window.alert("Start date is later than end date");
    return false;
  }
  alert("Entry Succesful");
  return true;

}


function ChangePic(input){
    var pic=document.getElementById("pic");
    var old=pic.src;
    if (input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function (e) {
        pic.src=e.target.result;
    } 
    reader.readAsDataURL(input.files[0]);
    }else{
        pic.src=old;
    }
}

function ValidateMeEditSt(){
    var fname = document.getElementById("fname"); 
    var lname = document.getElementById("lname"); 
    var fee = document.getElementById("fee");
    var dd = document.getElementById("DD");
    var mm = document.getElementById("MM");
    var yy = document.getElementById("YYYY");
    const unixTimeZero = Date.parse('01 Jan 1930 00:00:00 GMT');
    const javaScriptRelease = Date.parse('01 Jan 2003 00:12:00 GMT');

    if (fname.value == "" || fname.value==null) { 
        fname.value=fname.placeholder;
     } 
    if(!/^[a-zA-Z]+$/.test(fname.value)){
        alert("Firstname must contains only letters");
        fname.focus()
        return false;
    }
    if (lname.value == "" || lname.value==null) { 
        lname.value=lname.placeholder;
    } 
    if(!/^[a-zA-Z]+$/.test(lname.value)){
        alert("Lastname must contains only letters");
        lname.focus()
        return false;
    }
    if (fee.value == "" || fee.value==null) { 
        fee.value=fee.placeholder;
    }
    if(/^[a-zA-Z]+$/.test(fee.value)){
        alert("Fee must be only numbers");
        return false;
    }
    if(parseInt(fee.value)<0||parseInt(fee.value)>15000){
        alert("Fee must be between 0 and 15000");
        return false
    }
    if(dd.value==""||dd==null){
        dd.value=dd.placeholder;
    }
    if(mm.value==""||mm==null){
        mm.value=mm.placeholder;
    }
    if(yy.value==""||yy==null){
        yy.value=yy.placeholder;
    }
    if(dd.value<1||dd.value>30){
        window.alert("Day field is  invalid or empty.")
        dd.focus();
        return false;
    }
    if(mm.value<1||mm.value>12){
        window.alert("Month field is  invalid or empty.")
        mm.focus();
        return false;
    }
    if(yy.value<1930||yy.value>2003){
        window.alert("Year field is invalid or empty.")
        yy.focus();
        return false;
    }
    if(CheckChange()==false){
        return false;
    }
    alert("Edit/Update was succesful");
}

function CheckChange(){
    var c1 = document.getElementById("course1");
    var c2 = document.getElementById("course2");
    if(!(c1.checked||c2.checked)){
        alert("No Course is chosen");
        return false;
    }
    
}

function ValidateMeEditTr(){
    var fname = document.getElementById("fname"); 
    var lname = document.getElementById("lname"); 
    var subject1 = document.getElementById("chb1");
    var subject2 = document.getElementById("chb2");
    var subject3 = document.getElementById("chb3");
    var subject4 = document.getElementById("chb4");

    if (fname.value == "" || fname.value==null) { 
        fname.value=fname.placeholder;
     } 
    if(!/^[a-zA-Z]+$/.test(fname.value)){
        alert("Firstname must contains only letters");
        fname.focus()
        return false;
    }
    if (lname.value == "" || lname.value==null) { 
        lname.value=lname.placeholder;
    } 
    if(!/^[a-zA-Z]+$/.test(lname.value)){
        alert("Lastname must contains only letters");
        lname.focus()
        return false;
    }
    if(!(subject1.checked||subject2.checked||subject3.checked||subject4.checked)){
        window.alert("No subject is selected")
        return false;
    }

    if(CheckChange()==false){
        return false;
    }
    alert("Edit/Update was succesful");
}

function ValidateMeEditAss(){
    var title=document.getElementById("ATitle");
    var des=document.getElementById("ADes");
    var dd=document.getElementById("ADD");
    var mm=document.getElementById("AMM");
    var g1=document.getElementById("Oral");
    var g2=document.getElementById("Total");
    var x,y;

    if(title.value == "" || title.value==null){
        title.value=title.placeholder;
    }
    if(des.value == "" || des.value==null){
        des.value=des.placeholder;
    }
    if(dd.value==null||dd.value==""){
        dd.value=dd.placeholder;
    }
    if(mm.value==null||mm.value==""){
        mm.value=mm.placeholder;
    }
    if(dd.value<1||dd.value>30){
        window.alert("Day field is invalid.")
        dd.focus();
        return false;
    }
    if(!((mm.value>0&&mm.value<4)||(mm.value==11||mm.value==12))){
        window.alert("Month field is either invalid or empty. Check Courses Start and End Date please.")
        mm.focus();
        return false;
    }
    if(g1.value==""||g1.value==null){
        g1.value=g1.placeholder;
    }
    if(g2.value==""||g2.value==null){
        g2.value=g2.placeholder;
    }
    if(!(g2.value==""||g2.value==null)&&(g1.value==""||g1.value==null)&&(g2.value+parseInt(g1.placeholder,10)!=100)){
        alert("Sum of Oral and Total must be 100")
        console.log("Me1")
        return false;
    }
    if((g2.value==""||g2.value==null)&&!(g1.value==""||g1.value==null)&&(g1.value+parseInt(g2.placeholder,10)!=100)){
        alert("Sum of Oral and Total must be 100")
        console.log("Me2");
        return false;
    }
    if(!(g2.value==""||g2.value==null)&&!(g1.value==""||g1.value==null)&&!(parseInt(g1.value)+parseInt(g2.value)===100)){
        alert("Sum of Oral and Total must be 100")
        console.log("Me3");
        return false;
    }


    if(CheckChange()==false){
        return false;
    };
    alert("Edit/Update was succesful");
}

function ValidateMeEditCo(){
    var title=document.getElementById("CTitle");
  var s1 = document.getElementById("CSChoise1");
  var s2 = document.getElementById("CSChoise2");
  var t1 = document.getElementById("CTChoise1");
  var t2 = document.getElementById("CTChoise2");
  var t3 = document.getElementById("CTChoise3");
  var t4 = document.getElementById("CTChoise4");
  var t5 = document.getElementById("CTChoise5");
  var t6 = document.getElementById("CTChoise6");
  var t7 = document.getElementById("CTChoise7");
  var stdate=document.getElementById("StartDate");
  var endate=document.getElementById("EndDate");
  var pattern=/^CB-/;
    
  
  if(title.value==""||title.value==null){
    title.value=title.placeholder;
    }
    if((!(pattern.test(title.value)))){
    window.alert("Title Field must start with CB-");
    title.focus();
    return false;
    }
    if(!(s1.checked||s2.checked)||(s1.checked&&s2.checked)){
     window.alert("Choose only one box from the stream options");
     return false;
    }
    if(!(t1.checked||t2.checked||t3.checked||t4.checked||t5.checked||t6.checked||t7.checked)){
        window.alert("No Type checked");
        return false;
    }
    if(stdate.value>endate.value){
        window.alert("Start date is later than end date");
        return false;
    }
    alert("Edit/Update was succesful");
}