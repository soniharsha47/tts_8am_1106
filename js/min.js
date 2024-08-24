var a=1;
var b=9;
var c=9;

if(a<b && a<c ){
    console.log("Min is A");
    // if(a<c){
    //     console.log("a is less than c");
    // }
}
else if(b<a && b<c){
    console.log("Min is B");
}
else if(c<a && c<b){
    console.log("Min is C");
}
else if(a==b & a==c){
    console.log("All are equal");
}
else {
    console.log("else ");
}
