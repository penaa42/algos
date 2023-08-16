// remove blanks
function remove_blanks(str){
    let arr = str.split(" ")
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

// get_digits("abc8c0d1ngd0j0!8")
// expected output: 801008
// get_digits("Os1a3y5w7h9a2t4?6!8?0")
// expected output: 1357924680


// Acronyms
function acronym(string){
    let arr = string.split(" ")
    // console.log(arr)

    let output = []

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (j == 0) {
                output[i] = arr[i][j]
            }
        }
    }
    final = output.join("")
    console.log(final.toUpperCase())
}

// acronym("there's no free lunk - gotta pay yer way.")
// expected output: "TNFL-GPYW"
// acronym("Live from New York, it's Saturday Night!")
// expected output: "LFNYISN"


// count non-spaces
function countNonSpaces(string){
    let count = 0

    for (let i = 0; i < string.length; i++){
        if (string[i] != " "){
            count++
        }
    }
    console.log(count)
}

// countNonSpaces("Honey pie, you are driving me crazy")
// expected output: 29
// countNonSpaces("Hello world!")
// expected output: 11


// remove shorter strings
function removeShorterStrings(arr, num){
    let output = []

    let count = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i].length >= num){
            output[count] = arr[i]
            count++
        }
    }
    console.log(output)
}

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
// expected output: ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)
// expected output: ['There', 'bug', 'the', 'system']

