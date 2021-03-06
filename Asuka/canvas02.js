var cv, cx, objetos, objetoActual = null;
var inicioX = 0, inicioY = 0;

function actualizar() {
  cx.fillStyle = '#f0f0f0';
  cx.fillRect(0, 0, 400, 300);

  for (var i = 0; i < objetos.length; i++) {
    cx.fillStyle = objetos[i].color;
    cx.fillRect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height);
  }
}

window.onload = function() {
  objetos = [];
  cv = document.getElementById('lienzo');
  cx = cv.getContext('2d');
  // agregar objetos de prueba
  objetos.push({
    x: 0, y: 0,
    width: 100, height: 200,
    color: '#00f'
  });
  objetos.push({
    x: 300, y: 150,
    width: 50, height: 100,
    color: '#f00'
  });
  objetos.push({
    x: 120, y: 50,
    width: 50, height: 50,
    color: '#0f0'
  });
  actualizar();

  cv.onmousedown = function(event) {
    for (var i = 0; i < objetos.length; i++) {
      if (objetos[i].x < event.clientX
        && (objetos[i].width + objetos[i].x > event.clientX)
        && objetos[i].y < event.clientY
        && (objetos[i].height + objetos[i].y > event.clientY)
      ) {
        objetoActual = objetos[i];
        inicioY = event.clientY - objetos[i].y;
        inicioX = event.clientX - objetos[i].x;

        break;
      }
    }
  }

  cv.onmousemove = function(event) {
    if (objetoActual != null) {
      objetoActual.x = event.clientX - inicioX;
      objetoActual.y = event.clientY - inicioY;
    }
    actualizar();
  }

  cv.onmouseup = function(evet) {
    objetoActual = null;
  }
}