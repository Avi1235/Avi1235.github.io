var objetoJSON;

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

function init () {
    loadJSON(async function (response) {
     // Parse JSON string into object
     objetoJSON = await JSON.parse(response);
    });
}

function buscarServicio() {
  var numero = document.getElementById('servicio').value;
  init();
  var encontro = false;
  objetoJSON.forEach(i => {
    if(i.servicio==numero)
    {
      const element = i;
      document.getElementById("Nombre").value = element.nombre; 
      document.getElementById("Dom").value = element.domicilio; 
      document.getElementById("Adeudo").value = element.adeudo; 
      encontro = true;
    }
  });
  if(encontro==false)
  alert("No se encuentra el servicio,Intentelo de nuevo");
}

//abonar
function abonar() {
  var pago = document.getElementById('suma').value;
  if(pago==0){
    alert("Ingrese un pago");
  }
  else{
    var numero = document.getElementById('Adeudo').value;
    numero -= pago;
    objetoJSON.forEach(i => {
      if(i.nombre==document.getElementById('Nombre').value)
      {
        i.adeudo = numero;
      }
    });
  }
      document.getElementById("Adeudo").value = numero;
}
    
function sumar(cantidad){
  var suma = document.getElementById('suma').value;
  suma += cantidad;
  document.getElementById('suma').value = suma;
  document.getElementById('suma').innerHTML = suma;
}

function abrirmodal(){
  var numero = document.getElementById('Adeudo').value;

  if(numero == ""){
    alert("Consulte un servicio primero para pagar");
  }
  else if(numero==0)
  alert("No tiene deuda de servicio");
  else
    document.getElementById('modalp').style.display='block';
}
