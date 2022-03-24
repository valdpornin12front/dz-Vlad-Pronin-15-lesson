class  startEngine {
    constructor(wieght,long, width,series_output,){
    this.wieght = wieght;
    this.width = width;
    this.long = long;
    this.series_output = series_output
}
width(){
    console.log(width);
}
wieght() {
    console.log(wieght);
}
long(){
    console.log(long);
}
series_output(){
    console.log(series_output);
}
}
class Car extends startEngine {
    constructor(wieght,long, width,series_output,){
        super(wieght,long, width,series_output,)
    }
}
 const tesla = new Car("2t","120cm","0.5m","2019")
 console.log(tesla);
 class airTransport extends startEngine {
     constructor(wieght,long, width,series_output,){
         super(wieght,long, width,series_output,)
     }
 }
 const Boeing = new airTransport ("27t","70.7m","64.4m","747-400")
 console.log(Boeing);