
$(document).ready(()=>{
    $("#movieForm").on("submit",(e) =>{
        let searchText=  $("#movie").val();
        console.log(searchText);
         getMovies(searchText);
        e.preventDefault();
    });
});
//request to the api
 function getMovies(searchText){
     axios.get('sampleapi.json'+searchText)
     .then((response)=>{
        console.log(response);
     })
     .catch((err)=> {
         console.log(err);
     })
 }