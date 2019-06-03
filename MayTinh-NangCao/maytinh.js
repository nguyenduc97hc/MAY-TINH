
function Number(num) {
    let number = num.value;
    let screen = document.getElementById("ketqua");
    screen.value = screen.value+number;
    // var kq = eval("number");
    // kq = document.getElementById("ketqua").innerHTML;

}
function pheptinh(){
    let screen = document.getElementById("ketqua");
    let result = eval(screen.value);
    screen.value = result;
}