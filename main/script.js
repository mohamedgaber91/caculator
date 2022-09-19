
////////////////////////////// to show data in the screen//////////////////////////////

$(document).ready(() => {
 
    $(".bar").css("bottom","100px")
  
  let buttons = $(".mybut");
  let screen = $(".screen");
  for (let i = 0; i <= buttons.length; i++) {
    $(buttons[i]).click(() => {
      let btnText=buttons[i].textContent
      var finalText=`${btnText}`
      $(screen).append(finalText)

      
    });
   
  }
///////////////////////// to get the rssult    /////////////////////////////////////////
  $(".result").click(()=>{
    let finalResult= eval($(screen).text());
    $(screen).text(finalResult)
    
    })
//////////////////////////////////////////// to delete the last value of the screen/////
    
 $(".del").click(()=>{
    var finalText=$(screen).text()
    let arr=Array.from(finalText)
      let   newFinalText=finalText.slice(0, arr.length-1)
      $(screen).text(newFinalText)
      
      
     
    
    
    })
 ////////////////////////////////////// to remove all values in the screen///////
 $(".remove").click(()=>{
      $(screen).text(" ");
    })
 
});


$;


///////////////////////////////////////////////////// mode////////////////////////////////////
$(document).ready(()=>{
    $(".bar").click(()=>{
        $(".mode").slideToggle(1000)
    })
})

$(document).ready(()=>{
  $(".dark").click(()=>{
    $(".mode").fadeOut(1000)
    $(".dark").css({
      "backgroundColor":"black",
      "color":"white"
    })
    $("body").css({
      "backgroundColor":"#000000c2",
      
    })
    $(".heading").css("backgroundColor","hsl(240deg 52% 62% / 18%)")
    $(".footer").css({
      "backgroundColor":"hsl(240deg 52% 62% / 18%)",
      
    }
      
      )

    $("h1").css({
      "color":"white"
      
    })
    $("p").css({
      "color":"white"
      
    })

    $(".screen").css({
      "backgroundColor":"#0e0c0c",
      "color":"white",
      "border": "4px solid #6c6cd0"
      
    })
    $(".calculator").css({
      "border":" 8px solid white",
      "backgroundColor":"#ffeaeaad"
    })
    $(".buttons").css({
      "backgroundColor":"black"
    })
    $(".bar").css({
      "backgroundColor":"black",
      "color":"white"
    })
  })

})
document.querySelector(".white").onclick=()=>{
  window.location.reload(true);
}