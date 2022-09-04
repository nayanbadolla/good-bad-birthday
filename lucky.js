var luckyBtn=document.querySelector('.luckyBtn')
var bdayDiv=document.querySelector('.bday')
var bdayInput=document.querySelector('.bdayInput')
var luckyNo=document.querySelector('.luckyNo')
var luckyNoInput=document.querySelector('.luckyNoInput')
var output=document.querySelector('.output')
var checkBtn=document.querySelector('.checkBtn')

var bday, lucky


luckyBtn.addEventListener('click', function() {
    bdayDiv.style.display='block'
    luckyNo.style.display='block'

    checkBtn.style.display='inline'

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
                output.innerHTML="yayy...your birthday is lucky"
            }
            
            else {
                output.innerHTML="oops...your birthday is unlucky"
            }
        }
    })
})