var luckyBtn=document.querySelector('.luckyBtn')
var bdayInput=document.querySelector('.bdayInput')
var luckyNo=document.querySelector('.luckyNo')
var luckyNoInput=document.querySelector('.luckyNoInput')
var output=document.querySelector('.output')
var checkBtn=document.querySelector('.checkBtn')

var bday, lucky

bdayInput.addEventListener('change', function(e) {
    bday=e.target.value
})

luckyNoInput.addEventListener('change', function(e) {
    lucky=e.target.value
})

checkBtn.addEventListener('click', function() {
    if (lucky==undefined || bday==undefined) {
        output.innerHTML="kindly enter both the fields"
    }
    
    else {

        var sum=0
        
        digit=bday.split('-')
        
        digit.forEach((element)=>{
            length=element.length
            for(var i=0;i<length;i++) {
                sum=sum+parseInt(element[i])
            }
        })

        if (sum%lucky===0) {
            output.innerHTML="<h3>yayy...your birthday is lucky</h3>"
        }
        
        else {
            output.innerHTML="<h3>oops...your birthday is unlucky</h3>"
        }
    }
})