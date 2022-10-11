let flex_box= Array.from(document.getElementsByClassName('flex-box'))
let Result=document.getElementById('result')
let Restart=document.getElementById('restart')
const O_Text="O"
const X_Text="X"
let currentPlayer=X_Text
let space=Array(9).fill(null)
const startGame=()=>{
    flex_box.forEach( base=>base.addEventListener('click', boxclicked))}
    function boxclicked(e)
     {
        const id =e.target.id
        if(!space[id]){
            space[id]=currentPlayer
            e.target.innerHTML=currentPlayer

            if(playerwon()){
                result.innerHTML=`${currentPlayer} has won the game`
        
            }


                currentPlayer = currentPlayer == X_Text ? O_Text : X_Text 
            }

} 
const wincondition=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]
function playerwon() {
    
    for (const iterator of wincondition) {
        let [a,b,c]=iterator
        if(space[a] && (space[a]==space[b]&&space[a]==space[c])) 
        {
            return[a,b,c]
        }       
    }
    return false
}
 Restart.addEventListener('click',restart)
 function restart(){
    space.fill(null)
    flex_box.forEach( box=>{box.innerHTML=' '})
    result.innerHTML=`Let's Start the Game`
    currentPlayer=X_Text
 }

startGame()