let hours = document.getElementById ('hours') , 

    minutes = document.getElementById ('minutes') , 
    
    secounds = document.getElementById ('secounds') 

        setInterval(()=> {
            currentTime = new Date()
            hours.innerHTML = currentTime.getHours(),
            minutes.innerHTML = currentTime.getMinutes()
            secounds.innerHTML = currentTime.getSeconds()
        })
  