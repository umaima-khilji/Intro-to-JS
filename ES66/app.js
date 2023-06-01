//rest operator
//to remove limitation

const sum = (...numbers) => {

    //for sum:
    let sum = 0;
    for(let i in numbers){
        sum = sum + numbers[i]
    }
    return sum
    console.log(numbers)
}
document.write(sum(2,3,4,5,666,77,6,8,9));

//
let arr1 = [1,2,3,4,5]
let arr2 = [5,8,6,77,4]
//rest operator
// let arr3 = arr1.concat(arr2)
//sperade operator:
let arr3 = [...arr1, ...arr2]

document.write(arr3);

///promise:
//jab server py koi bh api dyty ho toh promise karta hai
//panding (default)
//susecfull
//reject

let myPromise = new Promise((resolve,reject) => {
    //call back function
    //func ky andr ek or perameter do toh woh call back hai

    let myNum = Math.random()*1000;

    // if(myNum > 500){
    //     resolve
    // }
//greater ho toh resolve karo nhi toh reject kardo/
//error tab aae ga jb promise reject hoga

    myNum > 500 ? resolve(myNum) : reject(myNum)

})
//error handling
// let data = fetch("add url")
// // console.log(data)
// data.then((res) => res.json())
// .then((result) =>  console.log(result))
// .catch((err) => {
//     console.log(err)
//      })

// myPromise.then((data) => {
//     console.log(data)
// })
// .then(() => {
//     setTimeout(() => console.log('han bhae'), 2000)
// })
// .catch((err) => {
//    console.log(err)
// })

//data aa jae toh then chaly ga 
//catch main error ko handle kary ga as amsg error show hoga 
//ek chez tab tak prosed nhi kary gi jab tak phly wala nhi chal jata

//////// promise 2nd method
// ap ky kam sequce mian chalty jaen gy = async function
// yahn then wala kam direct ho jae ga
//await async ky bagair nhi chalta
// await ka data fetch hoga tab hi console hoga matlb then ka kam ider hi horha hai
let myFunc = async () => {
    try{
        let data = await fetch("add url")
        let res =  await data.jeson()
        console.log(res)
    }
    catch (err){
        console.log(err)
    }
}
// try and catch for error handling
myFunc();

// API ek comunication hai btw backend or frontend ky darmia


//for react
//node packege manager =  npm
//commnds:
//npm create vite@latest
//prject name: jo bh rkho
//react
//javascripy
//cd projectname
//npm install

//code .
//project opn ho ja ga va code main


//  react ki jtni appliction hoti hai usy one page application bolty hain
//ek hi file matlb html ki ek hi file hoti hai
//func ko import karwa skty hain es6 mai
//react ka dom chnge hai
//phly jo dom parha tha tree node wala woh rare dom hai
//react dom: jo node update hue hai usi ko hi phly kary ga
//har upcoming node ka data pichly main save hoga 
//react ky la live server chlna zarori hai

// react khta hai sary elements ko component main covrt karo
//component reusable
//<App/> : yeh ek coponent hai (js main function bana hoga)

//jsx : js xetendable :
//js ky andr hi html ka code likha ho
//html ka sara code return main likho gy

//codesandbox : IDE online
// ek hi tag main sab code likhy gy html ka (e.g div main pora code)
//<react.Fragement> </react.Fragement> is tag main sara code likhy gy but yeh purana method hai
//<> </> : bynam tag bana kar sab khch likhy gy 
//is ko fragment khty hain
//is main ktny bh div bana skty hain

//components:
//seprate flder main dalo file crete karo mycomponent.jsx
//function mycomponent(){
//     retyrn <> </>;
// }
// export default mycomponent;
//isko js ki file main import krwaen gy

//bootstrap ka code react ky lia convert krny lia transform ki website main ja kr karo

//npm install react 
//react boostrap website sy command dalo