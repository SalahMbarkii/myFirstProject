var score=0;

//scoreDiv.textContent=score;
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
}

function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}


var array=[
    {
        question:"What country has the highest life expectancy?",
    answer:[{result:"hong kong",right:true},{result:"Russia",right:false},{result:"Algeria",right:false},{result:"USA",right:false}]
    }
    ,
   {
    question:"What year was the United Nations established?",
    answer:[{result:"1946",right:false},{result:"1945",right:true},{result:"1947",right:false},{result:"1950",right:false}]
    },
    
        {
            question:"What artist has the most streams on Spotify?",
       answer: [{result:"Justin Timberlake",right:false},{result:"Justin bieber",right:true},{result:"Travis scott",right:false},{result:"Drake",right:true}]
    }
    ,
    {
        question:"What company was originally called (Cadabra)?",
    answer:[{result:"Amazon",right:true},{result:"Google",right:false},{result:"Twitter",right:false},{result:"EBAY",right:false}]
    }
    ,
    {
        question:"What sports car company manufactures the 911?",
    answer:[{result:"Porshe",right:true},{result:"Mercedes",right:false},{result:"Ferrari",right:false},{result:"BWM",right:false}]
    }
    ,
    {
        question:"What company was initially known as (Blue Ribbon Sports)?",
    answer:[{result:"adidas",right:true},{result:"Nike",right:false},{result:"Puma",right:false},{result:"kappa",right:false}]
    }
    


]
function display(item){
    $(".myDiv").append(`
    <h2 id="ques" style="color: white">${item.question} </h2> 
    <div class="btContainer" >
        <button class="bt" id=1>${item.answer[0].result}</button>
        <button class="bt" id=2>${item.answer[1].result}</button>
        <button class="bt" id=3>${item.answer[2].result}</button>
        <button class="bt" id=4>${item.answer[3].result}</button>
    </div>`
    );
}
var i=0
var score=0
function loadNextQuestion() {
    if (i < array.length) {
        $(".myDiv").empty();
        display(array[i]);
    } else {
        $(".myDiv").empty();
        $(".myDiv").append("<h1>Quiz Over!</h1>"+"<h1>Your Score: "+score+"</h1>");
    }
}
display(array[i])
$("body").on("click", ".bt", function (){
    var id=$(this).attr('id')
    if(array[i].answer[id-1].right){
        score+=1
    }else{
        score-=1
    } 
    i++
    loadNextQuestion();
})







/*each($('.bt'),function(e,i){ 
    console.log(e);   
    /*e.onclick=function(){
      if(verif(array[0],e.innerHTML) ) {
        console.log("true")
      }
      else{
        console.log(false)
      }
    }
})*/
