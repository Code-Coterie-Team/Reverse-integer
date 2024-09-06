function reversInt(){
    let num=Number(document.getElementById("numShow").value);
    let txtresult=document.getElementById("show");
    let reverseNum;
    console.log(typeof(num));
    if (num >= 0){
        let numArray=String(num).split("");
        let newArray=numArray.reverse();
        reverseNum=Number(newArray.join(""));
        }
    else {
        let numArray=String(num).split("");
        let remain=numArray.slice(1);
        let newArray=remain.reverse();
        reverseNum=Number('-'+newArray.join(""));
        
    }
    
    txtresult.textContent= `Reversed Number === ${reverseNum}`
}



