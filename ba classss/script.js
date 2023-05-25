function submitMessage(){
    let email = document.getElementById('email').value
    let textdetails = document.getElementById('textdetail').value

    var user ={
        email: email,
        textdetails: textdetail
    }
    // console.log(user)

    if (localdata == null){
        localStorage.setItem('user', JSON.stringify([user]))
    }
    else{
        localdata.push(user)
        console.log("AFTER==>",localdata)
        localStorage.setItem('mesage',JSON.stringify([localdata]))
    }

    // var localdata = JSON.parse(localStorage.getItem('messgae'))
    // console.log("Before==>",localdata)
    // localdata.push(user)

    // localStorage.setItem('user', JSON.stringify([user]))
     getUsers();

     generateCards(user)
}

//dom ky zarea cart banae gy
function generateCards(data){
    console.log(data)
    var card = document.createElement('div')
    card.className ="card"

    var card = document.createElement('div')
    cardbody.className ="cardbody"
  


    var cardTitle = document.createElement('H5')
    cardTitle.className ="cardTitle"
    var cardTitleContent = document.createTextNode('Hello')
    cardTitle.appendChild(cardTitleContent)
    

    var cardText = document.createElement('p')
    cardText.className ="cardText"
    var cardTextContent = document.createTextNode('Hello')
cardText.appendChild(cardTextContent)

card.appendChild(cardbody)
card.appendChild(cardTitle)
card.appendChild(cardText)
cardTextContent.appendChild(card)
}



function getUsers(){
    var data = JSON.parse(localStorage.getItem('messgae'))
   // console.log(data)
   for(var i=0;i<data.length;i++){
    console.log(data[i])
   }
}

// dummy API
//using fir add to cart