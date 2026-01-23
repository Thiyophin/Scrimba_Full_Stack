const convertBtn = document.getElementById("convert-btn")
const lengthField = document.getElementById("length")
const volumeField = document.getElementById("volume")
const massField = document.getElementById("mass")
const currentValEl = document.getElementById("current-val")

const oneMeterInFeet = 3.281
const oneLtrInGallon = 0.264
const oneKiloInPound = 2.204
convertBtn.addEventListener("click",()=>{
    let currentVal = Number(currentValEl.value)

    let convertedValInFeet = currentVal * oneMeterInFeet
    let convertedValInMeter = currentVal / oneMeterInFeet
    lengthField.textContent = `${currentVal} meters = ${convertedValInFeet.toFixed(3)} feet | ${currentVal} feet = ${convertedValInMeter.toFixed(3)} meters`

    let convertedValInLtr = currentVal * oneLtrInGallon
    let convertedValInGallon = currentVal / oneLtrInGallon
    volumeField.textContent = `${currentVal} liters = ${convertedValInLtr.toFixed(3)} gallons | ${currentVal} gallons = ${convertedValInGallon.toFixed(3)} liters`

    let convertedValInKilo = currentVal * oneKiloInPound
    let convertedValInPound = currentVal / oneKiloInPound
    massField.textContent = `${currentVal} kilos = ${convertedValInKilo.toFixed(3)} pounds | ${currentVal} pounds = ${convertedValInPound.toFixed(3)} kilos`
})