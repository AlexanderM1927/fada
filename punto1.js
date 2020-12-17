const countingSort = function () {
    
}

const reservar = function (procedimientos) {
    const auxProcedimientos = []
    let totalHorasUsada = 0
    for (let index = 0; index < procedimientos.length; index++) {
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
    console.log(totalHorasUsada)
    return auxProcedimientos
}

// const resCounting1 = [{ name: 'Proc3', hInicio: 20, hFin: 24 }, { name: 'Proc1', hInicio: 11, hFin: 15 },{ name: 'Proc2', hInicio: 12, hFin: 14}]
const resCounting2 = [{ name: 'Proc3', hInicio: 16, hFin: 21 }, { name: 'Proc1', hInicio: 10, hFin: 20 },{ name: 'Proc2', hInicio: 12, hFin: 14}]
// const resCounting3 = [{ name: 'Proc3', hInicio: 20, hFin: 24 }, { name: 'Proc1', hInicio: 11, hFin: 15 },{ name: 'Proc2', hInicio: 12, hFin: 14}]


// const procedimientos = [
//     {
//         name: 'Proc1', 
//         hInicio: 0,
//         hFin: 10
//     },
//     {
//         name: 'Proc2', 
//         hInicio: 5,
//         hFin: 6
//     },
//     {
//         name: 'Proc3', 
//         hInicio: 11,
//         hFin: 15
//     }
// ]

// reservar(resCounting1)
console.log(reservar(resCounting2))