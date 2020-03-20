var objetoJSON;

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'servicios.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = async function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            await callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function init() {
    loadJSON(function(response) {
     // Parse JSON string into object
     objetoJSON = JSON.parse(response);
     return objetoJSON;
    });
}

function buscarServicio() {
  var numero = document.getElementById('servicio').value;
  var data = init();
  if(data==null)
  alert("No se encuentra el servicio,Intentelo de nuevo");
  var encontro = false;
  data.forEach(i => {
    if(i.servicio==numero)
    {
      const element = i;
      document.getElementById("Nombre").value = element.nombre; 
      encontro = true;
    }
  });
  if(encontro==false)
  alert("No se encuentra el servicio,Intentelo de nuevo");
}