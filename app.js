const output= document.getElementById("output")
const btn= document.getElementById("btn")
const Input= document.getElementById("userInput")

x= Math.floor(Math.random() * 100)
// console.log(x)

btn.addEventListener("click", function(e){
    e.preventDefault()

    // output.style.display= "block"
    if(!Input.value){
        output.innerHTML= "Enter A Number!!"
        output.style.color= "red"
        return 
    }
    else{
        if(Input.value == x){
            output.innerHTML= `You guessed Right, your number is ${x}`
            output.style.color= "#00e300"
            document.body.style.pointerEvents= "none"

            setInterval(() => {
                output.innerHTML += "."
            }, 500);
            setInterval(() => {
                location.reload()
            }, 2000);
        }else if(Input.value < x){
            output.innerHTML= "You guessed Low!"
            output.style.color="white"
        }else{
            output.innerHTML= "You guessed high!"
            output.style.color= "red"
        }
    }
})