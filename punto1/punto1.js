let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i].hFin] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j].hFin = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

let max = (arr) => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hFin >= max) max = arr[i].hFin
    }
    return max
}

let min = (arr) => {
    let min = max(arr)
    for (let j = 0; j < arr.length; j++) {
        if (min >= arr[j].hFin) min = arr[j].hFin
    }
    return min
}

const reservar = function (procedimientos, horasUsadas, inicio) {
    const auxProcedimientos = []
    let totalHorasUsada = 0
    for (let index = inicio; index < procedimientos.length; index++) {
        if (auxProcedimientos.length === 0) {
            auxProcedimientos.push(procedimientos[index])
            totalHorasUsada += procedimientos[index].hFin - procedimientos[index].hInicio
        } else {
            if (auxProcedimientos[auxProcedimientos.length - 1].hInicio >= procedimientos[index].hFin) {
                auxProcedimientos.push(procedimientos[index])
                totalHorasUsada += procedimientos[index].hFin - procedimientos[index].hInicio
            }
        }
    }
    if (inicio === 0) horasUsadas = totalHorasUsada + 1
    if (totalHorasUsada < horasUsadas) {
        inicio++
        return reservar(procedimientos, totalHorasUsada, inicio)
    }
    console.log(totalHorasUsada)
    return auxProcedimientos
}

// const resCounting1 = [{ name: 'Proc3', hInicio: 20, hFin: 24 }, { name: 'Proc1', hInicio: 11, hFin: 15 },{ name: 'Proc2', hInicio: 12, hFin: 14}]
// const resCounting2 = [{ name: 'Proc3', hInicio: 16, hFin: 21 }, { name: 'Proc1', hInicio: 10, hFin: 20 },{ name: 'Proc2', hInicio: 12, hFin: 14}]
// const resCounting3 = [{ name: 'Proc3', hInicio: 20, hFin: 24 }, { name: 'Proc1', hInicio: 11, hFin: 15 },{ name: 'Proc2', hInicio: 12, hFin: 14}]

// reservar(resCounting1)
// console.log(reservar(resCounting2))