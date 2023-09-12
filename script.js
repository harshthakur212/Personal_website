function displayISTTime() {
    // Create a new Date object for the current UTC time
    const utcTime = new Date();

    // Adjust for IST (Indian Standard Time) which is UTC+5:30
    const istTime = new Date(utcTime.getTime() + (5.5 * 60 * 60 * 1000));

    // Subtract 5 hours and 30 minutes from IST time
    istTime.setHours(istTime.getHours() - 5);
    istTime.setMinutes(istTime.getMinutes() - 30);

    // Format the time as HH:MM AM/PM IST without leading '0' before hour
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12).toString(); // Remove leading '0' here
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm} IST`;

    // Display the formatted time on the website
    document.getElementById('ist-time').textContent = formattedTime;
}

// Update the time initially and then every second
displayISTTime();
setInterval(displayISTTime, 1000);





var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from(".nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })

    .to(".boundingelem",{
        y:0,
        ease:Expo.easeOut,
        duration:2,
        stagger:.2,
        delay:.1,
    })

    .from(".footerhero",{
        y:-10,
        opacity:0,
        delay:"-1.5",
        ease:Expo.easeOut, 
        duration:1.5,
    })

}

function circleChaptaKaroFrens(){
    // define default scale value
    var xscale  = 1;
    var yscale  = 1;
    var xprev   = 0;
    var yprev   = 0;
    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);

        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        xscale = gsap.utils.clamp(.8,1.2, xdiff);
        yscale = gsap.utils.clamp(.8,1.2, ydiff);
     
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
      
        
    timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  


  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }


circleMouseFollower();
circleChaptaKaroFrens();
firstPageAnimation();




document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  