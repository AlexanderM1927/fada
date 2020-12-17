function analizarContenido(contenido) {
    // console.log(contenido)
    const resCounting2 = [{ name: 'Proc3', hInicio: 16, hFin: 21 },{ name: 'Proc1', hInicio: 10, hFin: 20 },{ name: 'Proc2', hInicio: 12, hFin: 14},{ name: 'Proc2', hInicio: 2, hFin: 8}]
    console.log(reservar(resCounting2, 0, 0))
}

function descargar(contenido) {
    saveDoc("archivo.txt", contenido);
}


saveDoc = function(filename, data) {
    var blob = new Blob([data], {
      type: 'text/csv'
    });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      var elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = filename;
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }
  }

function leerArchivo (e) {
    const archivo = e.target.files[0]
    if (!archivo) return false;
    else {
        const lector = new FileReader()
        lector.onload = function (e) {
            const content = e.target.result
            analizarContenido(content)
        }
        lector.readAsText(archivo)
    }
}

document.getElementById('file').addEventListener('change', leerArchivo, false);