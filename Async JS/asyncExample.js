boilingWater()
console.log('chop carrots')

function boilingWater() {
  console.log('boiling start')
  setTimeout(() => {
    //when 10 sec finish execute bellow
    //meanwhile JS will go and complete reading the next line after calling the function which is chop carrots
    console.log('done boiling')
    console.log('add carrots and boil')
    //after 10 sec and after the 2 lines above are exccecuted we want to boil carrots for 5 sec
    setTimeout(() => {
      console.log('chop onions')
      //after chop onions we want to add onions and waint for 5 sec
      setTimeout(() => {
        console.log('add onions')

        console.log('boil onions')
        console.log('done')
      }, 5000)
    }, 5000),
      10000
  })
}

//browser give the option that if the browser has the functionality we can handle it out to the browser
// ex: setTimeout is a browser functionality not a JS thing. so JS handels the function in the  timeout to the browser. the browser holds the fuction for a specified time. and it returns it when the time finished and then js run the fuction when JS IS READY. so the time is the minimum time cz if JS is busy it will take more than that time to run it.
//browser can fetch data, get geolocation, setTimeout, settimer etc..
