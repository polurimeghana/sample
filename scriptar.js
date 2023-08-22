function insert(n){
	document.cal1.textview.value=document.cal1.textview.value+n;
}
function backspace(){
	var exp=document.cal1.textview.value;
	document.cal1.textview.value=exp.substring(0,exp.length-1);

}
function eq(){
	var exp=document.cal1.textview.value;
	if(exp){
		document.cal1.textview.value=eval(exp);
	}
}