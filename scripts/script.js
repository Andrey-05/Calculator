const viewText = document.getElementById("viewText")

function insert(value, replace){
    if(replace){
        viewText.value = value
    }else{
        let viewSet = viewText.value.split('')
        if(viewSet.length == 0 && value == 0) return
        if(viewSet[viewSet.length - 1] == ' ' && (value == ' X ' || value == ' / ' || value == ' - ' || value == ' + ')) return
        viewText.value += value
    }
}

function del(){
    let valueDel = viewText.value.split('')
    if(valueDel[valueDel.length - 1] == ' '){
        valueDel.splice(valueDel.length - 3, 3)
        viewText.value = valueDel.join('')
    }
    else{
        valueDel.pop()
        viewText.value = valueDel.join('')
    }
}



function equal(){
    let valueView = viewText.value.split(' ')

    console.log(valueView)

    while(valueView.length > 1){
        if(valueView.indexOf("X") > 0 && valueView.indexOf("/") > 0){
            if(valueView.indexOf("X") < valueView.indexOf("/")){
                const value = parseFloat(valueView[valueView.indexOf("X")-1]) * parseFloat(valueView[valueView.indexOf("X")+1])
                valueView.splice(valueView.indexOf("X")-1,3,value)
                console.log(valueView)
            }
            if(valueView.indexOf("/") < valueView.indexOf("X")){
                const value = parseFloat(valueView[valueView.indexOf("/")-1]) / parseFloat(valueView[valueView.indexOf("/")+1])
                valueView.splice(valueView.indexOf("/")-1,3,value)
                console.log(valueView)
            }
        }
        else if(valueView.indexOf("/") > 0){
            const value = parseFloat(valueView[valueView.indexOf("/")-1]) / parseFloat(valueView[valueView.indexOf("/")+1])
            valueView.splice(valueView.indexOf("/")-1,3,value)
            console.log(valueView)
        }
        else if(valueView.indexOf("X") > 0){
            const value = parseFloat(valueView[valueView.indexOf("X")-1]) * parseFloat(valueView[valueView.indexOf("X")+1])
            valueView.splice(valueView.indexOf("X")-1,3,value)
            console.log(valueView)
        }
        else if(valueView.indexOf("+") > 0 && valueView.indexOf("-") > 0){
            if(valueView.indexOf("+") < valueView.indexOf("-")){
                const value = parseFloat(valueView[valueView.indexOf("+")-1]) + parseFloat(valueView[valueView.indexOf("+")+1])
                valueView.splice(valueView.indexOf("+")-1,3,value)
                console.log(valueView)
            }
            if(valueView.indexOf("-") < valueView.indexOf("+")){
                const value = parseFloat(valueView[valueView.indexOf("-")-1]) - parseFloat(valueView[valueView.indexOf("-")+1])
                valueView.splice(valueView.indexOf("-")-1,3,value)
                console.log(valueView)
            }
        }
        else if(valueView.indexOf("+") > 0){
            const value = parseFloat(valueView[valueView.indexOf("+")-1]) + parseFloat(valueView[valueView.indexOf("+")+1])
            valueView.splice(valueView.indexOf("+")-1,3,value)
            console.log(valueView)
        }
        else if(valueView.indexOf("-") > 0){
            const value = parseFloat(valueView[valueView.indexOf("-")-1]) - parseFloat(valueView[valueView.indexOf("-")+1])
            valueView.splice(valueView.indexOf("-")-1,3,value)
            console.log(valueView)
        }
    }

    insert(valueView, true)
}