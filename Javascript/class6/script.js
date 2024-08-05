//function to print user table
function table(){
    //Access input element
    var eleNum=document.getElementById("num");
    //Access value from input element
    var valNum=eleNum.value;
    //convert string value in integer value
    var intNum=parseInt(valNum);
    //print table
    for (let i = 0; i <= 10; i++) {
        //access
        var resultValue=document.getElementById("resultValue");
        //process
        var result=i*intNum;
        //display table
        resultValue.innerHTML+=intNum+" * "+i+" = "+result+"<br/>";
    }
}
//function to reset user table data
function reset(){
    var eleNum=document.getElementById("num");
    var eleRes=document.getElementById("resultValue");
    eleNum.value=" ";
    eleRes.innerHTML=" ";
    eleNum.focus();
}
var pos=1;
function checkNumber()
{
    var eleNum=document.getElementById("num");
    var pbtn=document.getElementById("ptbtn");
    if(eleNum.value=="")
        {
            //alert("You have not entered any number!");
            pbtn.style.position="relative";
            if(pos==1)
            {
                pbtn.style.left="-80px";
                pos=0;
            }
            else
            {
                pbtn.style.left="80";
                pos=1;
            }
        }   
}