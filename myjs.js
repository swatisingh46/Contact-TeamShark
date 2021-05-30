var text = "";
var ch;
var count = 0;
var shftcnt = 0;
var numbrcnt = 0;
for (var i = 0; i <= 33; i++) {
    document.querySelectorAll('button')[i].onclick = function () {
	
        count++;
        var audio = new Audio('button-click.wav');
        audio.play();
        ch = (document.querySelector('textarea').innerText = this.innerText);
       // alert(ch);
        if (ch == "SPACE") {
            if (document.querySelector('textarea').value == "")
                text = "";
            ch = ' '
            text = text + ch;
        }
        else if(ch=='✂')
        {
            //alert(text.length);
            text=text.slice(0, text.length-1);
        }
        else if(ch=='⇧')
        {
            shftcnt++;
            var btn = document.querySelectorAll('button');
            for(var i=0;i<btn.length;i++)
            {
                if (shftcnt % 2 != 0) {
                    btn[i].innerText = btn[i].innerText.toUpperCase();
                }
                else btn[i].innerText = btn[i].innerText.toLowerCase();
            }
            document.getElementById("space_btn").innerText = document.getElementById("space_btn").innerText.toUpperCase();
        }
        else if(ch=="123")
        {
            var btn = document.querySelectorAll('button');
                var chr = '0';
                for (var j = 0; j <= 9; j++) {
                    btn[j].innerText = chr;
                    chr++;
                }
                
            if(btn[10].innerText=='a')
                btn[28].innerText = "abc";
            else btn[28].innerText = "ABC";
          }
            else if(ch=="ABC" || ch=="abc")
            {
                var btn = document.querySelectorAll('button');
                if (btn[10].innerText == 'a') {
                    btn[0].innerText = 'q';
                    btn[1].innerText = 'w';
                    btn[2].innerText = 'e';
                    btn[3].innerText = 'r';
                    btn[4].innerText = 't';
                    btn[5].innerText = 'y';
                    btn[6].innerText = 'u';
                    btn[7].innerText = 'i';
                    btn[8].innerText = 'o';
                    btn[9].innerText = 'p';
                }
                else
                {
                    btn[0].innerText = 'Q';
                    btn[1].innerText = 'W';
                    btn[2].innerText = 'E';
                    btn[3].innerText = 'R';
                    btn[4].innerText = 'T';
                    btn[5].innerText = 'Y';
                    btn[6].innerText = 'U';
                    btn[7].innerText = 'I';
                    btn[8].innerText = 'O';
                    btn[9].innerText = 'P';
                }
                btn[28].innerText = "?123";
            }
		
            else if(ch=="↩")
            {
                text = text + '\r\n';
            }
        else {
            if (document.querySelector('textarea').value == "")
                text = "";
            text = text + ch;
        }
         document.querySelector('textarea').value = text;
         document.querySelector('textarea').scrollTop = 2000000;
    };
}
function fun() {

    var txtvalue = document.querySelector('textarea').value;
    if (txtvalue != '') {
        var node = document.createElement("p");
        document.getElementById("part3").appendChild(node);
        var total = document.querySelectorAll("#part3 p");
        for (var i = 0; i < total.length; i++) {
            if (total[i].innerText == "") {
                total[i].innerText = txtvalue;
            }
            if (i % 2 != 0 && i >= 1)
                total[i].style.backgroundColor = "slategray";
            document.getElementById("part3").scrollTop = 20000000;
        }
        var para = document.createElement("p");
        var last_element = total.length - 1;
        //alert(last_element);
        if (last_element == 0) {
            var t = document.createTextNode("Hi!.Thanks for messaging. What is your name?");

        }
        else if (last_element == 2) {
            var t = document.createTextNode("Okay. Swati This side...Let's Proceed");

        }
        else if (last_element == 4) {
            var t = document.createTextNode("Which programming language you prefer?");

        }
        else if(last_element ==6){
            var t = document.createTextNode("What are your qualifications?");
        }
        else if(last_element ==8){
            var t = document.createTextNode("In which field you want to explore?");
        
        }
        else if (last_element % 2 == 0) {
            var t = document.createTextNode("Okay... For more query visit us at https://vikasthakurr.github.io/webdevsite/");

        }
        para.appendChild(t);
        document.getElementById("part3").appendChild(para);
        
        //document.getElementById("part3").delay(2000).a;
        document.getElementById("part3").scrollTop = 20000000;
        document.querySelector('textarea').value = "";
        text = "";
    }
}