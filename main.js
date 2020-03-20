var actual_JSON;

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'servicios.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function init() {
    loadJSON(function(response) {
     // Parse JSON string into object
       actual_JSON = JSON.parse(response);
    });
}

function buscarServicio(numero) {
  init();
  for (let i = 0; i < actual_JSON.length; i++) {
    if(actual_JSON[i].servicio==numero)
    {
      const element = actual_JSON[i];
      document.getElementById("Nombre").value = element.nombre; 
    }
  }
}