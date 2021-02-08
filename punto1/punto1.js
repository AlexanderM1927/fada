let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

let max = (arr) => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].duracion >= max) max = arr[i].duracion
    }
    return max
}

let min = (arr) => {
    let min = max(arr)
    for (let j = 0; j < arr.length; j++) {
        if (min >= arr[j].duracion) min = arr[j].duracion
    }
    return min
}

let putDuracion = (arr) => {
    for (let z = 0; z < arr.length; z++) {
        arr[z].duracion = arr[z].hFin - arr[z].hInicio
    }
    return arr
}


//ASUMIMOS QUE LOS PROCEDIMIENTOS ESTÁN ORDENADOS DE MAYOR DURACION A MENOR
const reservarVoraz = function (procedimientos) {
    const res = []
    let horasUsadas = 0
    for (let i = 0; i < procedimientos.length; i++) {
        if (res.length === 0) {
            horasUsadas += procedimientos[i].duracion
            res.push(procedimientos[i])
        } else {
            if (procedimientos[i].hInicio >= procedimientos[i-1].hFin || procedimientos[i].hFin <= procedimientos[i - 1].hInicio) {
                res.push(procedimientos[i])
                horasUsadas += procedimientos[i].duracion
            }
        }
    }
    console.log('horas usadas = ' + horasUsadas)
    return res
}