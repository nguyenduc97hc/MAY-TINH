
function tinhtoan(val) {
    let st1 =document.getElementById("st1").value;
    let st2 =document.getElementById("st2").value;
    st1=parseInt(st1);
    st2=parseInt(st2);
    let re=0;
    switch (val) {
        case '+':{
            re=st1+st2;
            document.getElementById('res').innerHTML = re;
            break;
        }
        case '-':{
            re=st1-st2;
            document.getElementById('res').innerHTML = re;
            break;
        }
        case '*':{
            re=st1*st2;
            document.getElementById('res').innerHTML = re;
            break;
        }
        case '/':{
            re=st1/st2;
            document.getElementById('res').innerHTML = re;
            break;
        }
    }
}