// Move the item UP

let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

    function gridRearrangeUp (array,letter){
        let size= array.length
        size
        let joinedArray= array.join(',').split(',')
        joinedArray
        let indexOfParameter= joinedArray.indexOf(letter)
        indexOfParameter
        let newPositionNum= indexOfParameter - (joinedArray.length/size)
        newPositionNum
        if(newPositionNum<1){return array}
        newPositionNum

        joinedArray[indexOfParameter]=joinedArray[newPositionNum]
        joinedArray[newPositionNum]=letter
        
        let chunkedArr=[]
        for (let i=0; i<joinedArray.length; i+= size){
            const chunk = joinedArray.slice(i,i+size)
            chunkedArr.push(chunk)

        }
    
    return chunkedArr
    }
    console.log(gridRearrangeUp(myGrid,"d"))


// Move the item down.

    function gridRearrangeDown (array,letter){
        let size= array.length
        let joinedArray= array.join(',').split(',')
        let indexOfParameter= joinedArray.indexOf(letter)
        let newPositionNum= indexOfParameter + (joinedArray.length/size)
        if(newPositionNum<1){return array}
        newPositionNum

        joinedArray[indexOfParameter]=joinedArray[newPositionNum]
        joinedArray[newPositionNum]=letter
        
        let chunkedArr=[]
        for (let i=0; i<joinedArray.length; i+= size){
            const chunk = joinedArray.slice(i,i+size)
            chunkedArr.push(chunk)

        }
    
    return chunkedArr
    }


console.log(gridRearrangeDown(myGrid,"g"))




