//this part of the code is for displaying the text 

document.getElementById('yes').addEventListener('click' , function(){
    const mainTitleText = document.getElementById('title').value;
    document.getElementById('main-title').innerHTML = mainTitleText;
    document.getElementById('title').value = '';
});
//---------------------------------------------------------


//the main timer function 

let interval;
document.getElementById("date-time").addEventListener('input', getSelectedDate);

function getSelectedDate() {

    //dealing with the calender input and converting in into suitable data for the timer 
    const datewala = document.getElementById("date-time");
    const selectedDate = datewala.value;
    const array = ['january' , 'february' , 'march' , 'april' , 'may' , 'june' , 'july' , 'august' , 'september' , 'october' , 'November' , 'December' ]
    
    const year = selectedDate.substring(0,4);
    const month1 = selectedDate.substring(5,7);
    const date = selectedDate.substring(8,10)
    const month =  array[Number(month1 ) - 1];
    clearInterval(interval);


    //the original timer function 
    function countdown() {
        
        let welcome = `${date} ${month} ${year}  `
        const newyr = new Date(welcome);
        const curerentdate = new Date;
        const seconds =(newyr - curerentdate)/1000;
        const days = Math.floor(seconds/(24*60*60));
        const hours = Math.floor((seconds/(60*60))%24)
        const minutes = Math.floor((seconds/(60))%60)
        const sec = Math.floor(seconds % 60 )
    
        document.getElementById('days').innerHTML= (days);
        document.getElementById('hours').innerHTML= (hours);
        document.getElementById('mins').innerHTML= (minutes);
        document.getElementById('sec').innerHTML= (sec);
          
    }
    countdown();
    interval = setInterval(countdown,1000);
    
    
}

   



    




