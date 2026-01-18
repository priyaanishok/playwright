// Call back 


function checkAvailabilty(movieName,callback){
/* movieName = "SpiderMan
callback = function playMovie(){



} */
    console.log(`Checking the movie name:`);
    console.log(`Run the advertisement while fetching from the server`)
    


    setTimeout(()=>{
        console.log("Movie "+movieName+"is available");
     callback()        
    },2000)    


}



function playMovie(){
    setTimeout(() => {
        console.log("Now playing the Movie");
    }, 2000)

}


checkAvailabilty("SpiderMan",playMovie)
setTimeout(() => {
    console.log("This will run after 2 seconds");
    
}, 2000);
