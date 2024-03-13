function mergeArrays(A, B){
    const resultingArray = [];
    let i = 0;
    let j = 0;

    while((i != A.length) && (j != B.length) ){
        if(A[i] < B[j]){
            resultingArray.push(A[i]);
            console.log(A[i]);
            i++;
        }else{
            resultingArray.push(B[j]);
            console.log(B[j]);
            j++;
        }
    }

    //SI LOS 2 ARRAYS YA FUERON RECORRIDOS ENTONCES RETORNAR EL ARREGLO UNIDO.
    if(i == A.length && j == B.length){
        return resultingArray;
    }

    /*AL HABERSE RECORRIDO UN ARRAY, ENTONCES SOLO QUEDA QUE EL ARRAY FALTANTE AGREGE COMO VAN 
    SUS ELEMENTOS AL "resulting array".*/
    if(i == A.length){
        for (j; j < B.length; j++){
            resultingArray.push(B[j]);
        }
    }
    if(j == B.length){
        for(i; i< A.length; i++){
            resultingArray.push(A[i]);
        }
    }
    
    return resultingArray;
}


const A = [23, 33, 45, 90, 100];
const B = [2, 5, 6, 14, 15, 17, 44, 55, 70];

const C = mergeArrays(A, B);
console.log(C);
