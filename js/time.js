(function () {
    var refresh = function(){

    var today = new Date();
    var date = today.getDate();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var ampm = (hours >= 12) ? " PM " : " AM ";

    var pWeekday = document.getElementById("weekday"),
        pMonth = document.getElementById("month"),
        pDay = document.getElementById("day"),
        pYear = document.getElementById("year"),
        pHours = document.getElementById("hours"),
        pMinutes = document.getElementById("minutes"),
        pSeconds = document.getElementById("seconds"),
        pAmpm = document.getElementById("ampm");
    
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    pWeekday.innerHTML = week[day];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    pMonth.innerHTML = months[month];

    pDay.innerHTML = date;

    pYear.innerHTML = year;

    if (hours >= 12){
        hours = hours -12;
    }
    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    pHours.innerHTML = hours;
    pMinutes.innerHTML = minutes;
    pSeconds.innerHTML = seconds;
    pAmpm.innerHTML = ampm; 

    }
    refresh();

    var interval = setInterval(refresh, 1000);

/*Days left until next Christmas*/
    today=new Date();
    var cmas=new Date(today.getFullYear(), 11, 25);
    if (today.getMonth()==11 && today.getDate()>25) 
    {
    cmas.setFullYear(cmas.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    document.getElementById("untilcmas").innerHTML = "<b>Christmas</b> " + "will be in "+Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
    " days!";
}())