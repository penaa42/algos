// remove blanks
function remove_blanks(str){
    let arr = str.split(" ")
    // console.log(arr)
    console.log(arr.join(""))
}
// remove_blanks("Pl ayTha tF u nkyM usi c")
// expected output: PlayThatFunkyMusic
// remove_blanks("I can not BELIEVE it's not BUTTER")
// expected output: IcannotBELIEVEit'snotBUTTER


// Get Digits
function get_digits(str){
    let arr = str.split("")

    let number = []

    for (let i = 0; i < arr.length; i++){
        if (Number.isInteger(arr[i] / 1)){
            number[i] = arr[i]
        }
    }
    console.log(number.join(""))
}

get_digits("abc8c0d1ngd0j0!8")
// expected output: 801008
get_digits("Os1a3y5w7h9a2t4?6!8?0")
// expected output: 1357924680

