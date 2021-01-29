$(document).ready(()=>{
    var url = "http://demo.tech2edge.co/samples/data-sg"
    axios.get(url)
    .then((response)=>{
       // console.log(response);
        let desc = response.data.series;
        let  coverimg = response.data.series.img;
        console.log(coverimg);
        
        let output = 
       `     <img src= 'http://demo.tech2edge.co/samples/${coverimg}'  style="width:100%; height:100%; margin-top:10%;"> 
            <h1 style=" margin-left:5%;  color:white;">${desc.title}</h1> 
          <p style="margin-left:5%; margin-right:5%;color:white; font-size:1.5rem;font-family: "Times New Roman", Times, serif; font-weight: normal;">${desc.desc}</p>`;
    
      
        
        //looping and appending
     
        $('#desc').html(output);

 


    })
    .catch((err)=>{
        console.log(err);
    })


jQuery(function($){
        $('#coverimg').click(function() {
            alert(1);

        });
});
 

})