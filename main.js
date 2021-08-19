document.getElementById("right").innerHTML=text;

function text(){
    if (keyPressed == '37-40'){
        text = "Arrow Key";
    }
    if (keyPressed == '65-90'){
        text = "Alphabat Key";
    }
    if (keyPressed == '97-122'){
        text = "Alphabat Key";
    }
    if (keyPressed == '17-20'){
        text = "Special Key";
    }
    if (keyPressed == '48-57'){
        text = "Number Key";
    }
    if (keyPressed == '!,@,#,$,%,^,&,*,(,)'){
        text = "Other Key";
    }
}