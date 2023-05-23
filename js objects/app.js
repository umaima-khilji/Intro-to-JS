//same as arry
//to store data of multiple types
//arry main by index
//object main key value ki sort main 
//obejct aap ki cheez ko enhance kar dyta hai
//same type of data e.g categarioy wala
//object ky andr array ban skti hai arry ky andr object

var myAbbu = {
    name : "Ayoub",
    age : 50,
    wifes : ["malkan Ayoub"],
    //kids : ['umaima' , 'Dua']
    kids : {
        sons : ['Ali'],
        doughters : ['Umaima' , 'Dua']
    }
}
//to acces this data
console.log(myAbbu.kids.sons)

//
var myMath ={
    PI: 3.142,
    //funtion object ky andr bh bana skty hian
    sin: function (val){
        return Math.sin(val)
    }
}
console.log(Math.PI)

//there is an other way to crete an object 
//called constractor
//jab aap constrotor banao gy uska phla word capital hoga
//green color batae ga Father constroctor hai
class Father {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.id = function () {
            return "PAk" + this.age
        }
    }
}
var umaimaKayAbbu = new Father('M.Ayoub', 53)
var SwairaKayAbbu = new Father('Shareef', 53)
console.log(umaimaKayAbbu,SwairaKayAbbu.id())

//problem in constroctor
for(var i in umaimaKayAbbu){
    console.log(umaimaKayAbbu)
}

// new mathod of constroctor
class Father {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.id = function () {
            return "PAk" + this.age
        }
    }
}

////////
//checks only keys not the values
console.log("m.sharief" in umaimaKayAbbu)

/////////
function changeURl(){
    console.log("changeURl", window.location.href)
    window.location.href = "https://github.com/"
}

//kisi bh website main jao gy toh inspect main console main window.locaton.hostname lagao toh web ka name aae ga
//window.loction.pathname

//herf = attributs
//assign = metod
//sir en dono ko quiz main mix karengy
//assign main back ka option aa rha hoga 
//herf main nhi aae ga 

//browerer controll:
// write in console
history.back
history.forward()
//2 tab pechy jae ga agar
history.go(-2)

//pop up 