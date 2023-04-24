setInterval(myfunction,1000);

function myfunction(){
    var DateObj=new Date();
    var hour=DateObj.getHours();
    var minutes=DateObj.getMinutes();
    var seconds=DateObj.getSeconds();
    var PMAM="AM";

    if(hour>=6 && hour<12)
    {
        // const text1 = document.getElementById("morning");
        // text1.innerHTML="GOOD MORNING!!WAKE UP!!";

        const text2 = document.getElementById("change");
        text2.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";

        const photo=document.getElementById("imgchange");
        // photo.src="./Component 32 – 1.svg";
        photo.src="./Group 5183.svg";
    }

    if(hour>=12 && hour<17)
    {
        // const text1=document.getElementById("morning");
        // text1.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
    
        const text2=document.getElementById("change");
        text2.innerHTML="LETS HAVE SOME LUNCH !!";

        const photo=document.getElementById("imgchange");
        photo.src="./Component 31 – 1.svg";
    }

    if(hour>=17 && hour<=20)
    {
        // const text1=document.getElementById("morning");
        // text1.innerHTML="GOOD EVENING !!";
    
        const text2=document.getElementById("change");
        text2.innerHTML="STOP YAWNING,GET SOME TEA....\nITS JUST EVENING!";

        const photo=document.getElementById("imgchange");
        photo.src="./nlunch_image.pg";
    }
    if(hour>20 && hour<24)
    {
        // const text1=document.getElementById("morning");
        // text1.innerHTML="GOOD NIGHT!!";
    
        const text2=document.getElementById("change");
        text2.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";

        const photo=document.getElementById("imgchange");
        // photo.src="./Group 5183.svg";
        photo.src="./Group 5194.svg";
    }

    if(hour>12)
    {
        hour-=12;
        PMAM="PM";
    }
    else
    {
        PMAM="AM";
    }
    if(hour<10)
    {
        hour="0" + hour;
    }
    if(minutes<10)
    {
        minutes="0" + minutes;
    }
    if(seconds<10)
    {
        seconds="0" + seconds;
    }
    document.getElementById("hour").innerHTML="" + hour;
    document.getElementById("minutes").innerHTML="" + minutes;
    document.getElementById("seconds").innerHTML="" + seconds;
    document.getElementById("AMPM").innerHTML="" + PMAM;

}
function xyz()
{
    document.getElementById("part").innerHTML="Party Time!"
    document.getElementById("part").style.backgroundImage =  "linear-gradient(to right,#CB52F8,#6E54EC 75%)";
}

function abc()
{
    document.getElementById("part").innerHTML="Set Alarm"
    document.getElementById("part").style.backgroundImage = "linear-gradient(to right,#6E54EC,#CB52F8 75%)"; 
}

 function callMe(){
   let wake1=document.querySelector("#wake1");
   let action1=wake1.options[document.getElementById("wake1").selectedIndex];

   let lunch2=document.querySelector("#lunch2");
   let action2=lunch2.options[document.getElementById("lunch2").selectedIndex];

   let nap2=document.querySelector("#nap2");
   let action3=nap2.options[document.getElementById("nap2").selectedIndex];

   let night2=document.querySelector("#night2");
   let action4=night2.options[document.getElementById("night2").selectedIndex];

   let mail=document.getElementById("morning");
   let photo=document.getElementById("imgchange");

   let store=document.getElementsByClassName("man");
   store[0].innerText= `Wake up Time:${action1.text}`;
   store[1].innerText=`Lunch Time:${action2.text}`;
   store[2].innerText=`Nap Time:${action3.text}`;
   store[3].innerText=`Night Time:${action4.text}`;


      let time=new Date();
      let hours=time.getHours();
      if(hours === parseInt(wake1.value))
      {
        mail.innerHTML = "GOOD MORNING...!!";
        // document.getElementById("morning").innerText="GOOD MORNING";
        photo.src = "./Group 5183.svg";
      }
       else if(hours === parseInt(lunch2.value))
      {
        mail.innerHTML = "GOOD AFTERNOON...!!";
        // document.getElementById("morning").innerText="GOOD afternoon";
        photo.src = "./Component 31 – 1.svg";
      }

      else if(hours === parseInt(nap2.value))
      {
         mail.innerHTML = "GOOD EVENING...!!";
         photo.src = "./lunch_image.png";
      }

      else if(hours === parseInt(night2.value))
      {
        mail.innerHTML = "GOOD NIGHT...!!";
        photo.src = "./Group 5194.svg";
      }

 }