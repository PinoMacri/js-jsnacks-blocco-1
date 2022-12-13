button.addEventListener ("click" , function() {
    const invitatiFesta = ["DonAbbondio" , "SanchoPanza" , "Alvaruccio" , "Topolino"]
    const myInput = document.getElementById("myInput")
    const resultInput = document.getElementById ("risultatoInput")
    const button = document.getElementById ("button")
    const checkInvitati = myInput.value 
    console.log(invitatiFesta.lenght)
    let isAllowed = false

    for (i=0 ; i < invitatiFesta.length && isAllowed === false; i++) {
        if (checkInvitati === invitatiFesta [i]) {
        resultInput.innerText = "Sei invitato"
        isAllowed= true
        }
        else {
            resultInput.innerText = "NON sei invitato"
        }
       
    }
}
)
