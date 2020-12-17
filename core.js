function analizarContenido(contenido) {
    console.log(contenido)
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