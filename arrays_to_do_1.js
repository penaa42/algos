// Push Front
function push_front(arr, num) {
    let temp_last = arr[(arr.length - 1)]
    // console.log('original array', arr);

    for (let i = (arr.length - 1); i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[(arr.length)] = temp_last
    arr[0] = num;
    console.log('Final array output', arr);
}
// push_front([5,7,2,3], 8);
// push_front([99], 7);


// Pop Front
function pop_front(arr){
    let arr_first = 0;

    let final_arr = []

    for (let i = 0; i < (arr.length) - 1; i++){
        if (i == 0){
            arr_first = arr[i]
        }
        final_arr[i] = arr[i + 1]
    }

    console.log(final_arr)
    return arr_first
}
// pop_front([0,5,10,15])
// console.log(pop_front([0,5,10,15]))
// console.log(pop_front([4,5,7,9]))


function insert_at(arr,val,num){
    let final_arr = []

    for (let i = 0; i < arr.length; i++){
        console.log(`index: ${i}, value: ${arr[i]}`)
        let current = arr[i]
        let next = arr[i + 1]

        console.log(current)
        console.log(next)

// != first then ==


        if (i == val){
            console.log(`condition met`)
            final_arr[i] = num
            final_arr[i + 1] = next
            // i++
            // continue
        }
        // else {
            final_arr[i] = current
        // }

    }
    console.log('Final array', final_arr)
}

// insert_at([100,200,5],2,311)
// expected output: [100,200,311,5]

insert_at([9,33,7],1,42)
// expected output: [9,42,33,7]