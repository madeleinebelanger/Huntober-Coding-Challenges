
function createSpace(message){
let secretCode= ["s","p","a","c","e"]
for (let i =0; i<message.length; i++){
    message= message.split('').map(items=> items===secretCode[i] ? ' ':items).join('')
}
return message
}

console.log(createSpace('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'))
