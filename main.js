window.addEventListener("load", () => {
    let message = renderElement(".message")
    let btn = renderElement(".submit")
    let hero_Number = renderElement(".hero__number")
    let count = renderElement(".count")
    let end = renderElement(".end")
    let count_true = renderElement(".count__trues")
    let count_falses = renderElement(".count__falses")
    btn.addEventListener("click", handleSub)
    let messageText = renderElement(".message__text")
    let bodys = document.querySelector(".body")
    let input = document.querySelector(".inputs")
    let array = []
    let trues = 0
    let falses = 0
    let counter = 10
    count_falses.textContent = falses + " "
    count_true.textContent = trues + " "
    count.textContent = counter
    function handleSub(e){
        counter--
        count.textContent = counter
        console.log(e)
        let number = 1
        console.log(number)
        let inputValue = Number(input.value)
        if(!inputValue){
            console.log(false)
            messageText.textContent = "Iltimos raqam kirgazing ... "
            input.style.outline = "3px solid crimson"
            end.textContent = "Iltimos raqam kirgazing"
        }
        if(Number(inputValue) === number){
            trues++
            console.log(trues)
            bodys.style.background = 'green'
            messageText.textContent = "Topdingiz ... "
            end.textContent = "Topdingiz"
            message.textContent=number
            hero_Number.classList.add("transparent")
            array = [...array, inputValue]
            console.log(array)
        }else if(inputValue !== number){
            falses++
            console.log(falses)
            messageText.textContent = "Raqam xato"
            bodys.style.background = 'rgba(220, 6, 6, 0.886)'
            end.textContent = "Raqam xato"
            array = [...array, inputValue]
            console.log(array)
        }
        let classArray = []
        if(array.length >=10){
            input.disabled = true
            btn.disabled = true
            end.textContent = "Urunishlar soni tugadi"
            messageText.textContent = "Urunishlar soni tugadi ... "
            let classes = bodys.getAttribute("class")
            classArray = [...classArray, classes]
            // let parent = classArray.join("").split(" ")
            // if(parent.includes("boydsError")){
                console.log(` ${falses} ta muvaffaqiyatsiz urunish bor`, `${trues} ta Muvaffaqiyatli urunish bor`)
                count_falses.textContent = falses + " "
                count_true.textContent = trues + 
                " "
            
        }
    }
})