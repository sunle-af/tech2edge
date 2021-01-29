 $(document).ready(()=>{
    var url = "http://demo.tech2edge.co/samples/data-sg"
    axios.get(url)
    .then((response)=>{
        //console.log(response);
        let cast = response.data.characters;
        console.log(cast);
        //looping and appending
        let output= '';
        $.each(cast,(index,actor)=>{
    output+=`
<div class="row" style="margin-left:10%;">
<div class="column">
<img src="http://demo.tech2edge.co/samples/${actor.img}" style="width:400px; " >
<h5 style="color:white; text-align:center; font-family: "Times New Roman", Times, serif; font-weight: normal;">Name: ${actor.name}</h5>
<h5 style="text-align:center; color:white;"> Age: ${actor.age}</h5>
<h5 style="text-align:center; color:white;">Profession: ${actor.profession}</h5>
</div>
</div>
    `;
        });
   $('#cast').html(output);
    })
    .catch((err)=>{
        console.log(err);
    })


var elements = document.getElementsByClassName("column");
   var i;
   for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }

 })