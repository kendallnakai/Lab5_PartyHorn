// main.js
let maxVolume = 100;
let twoThirds = 66; 
let oneThird = 33;

// ***************************************************************************
// 1. INPUT FIELD TEXT INDICATOR FOR SOUND LEVEL 
// This field is editable - the sound level of the <audio> element should be changed when editing this input field
// When this field is changed, the slider bar should move correspondingly.
// Conversely, whenever the slider bar changes this field should update as well.
// The volume icon should display the correct number of bars based upon this value

// 2. SLIDER VISUAL CONTROLLER FOR SOUND LEVEL 
// When the slider position changes, the sound level of the <audio> element also changes
// This slider should update position when sound level is changed by the input field
// Again, the volume icon should display the correct number of bars based upon this value 
let volumeNumber = document.getElementById("volume-number");
let volumeImage = document.getElementById("volume-image");
let honkButton = document.getElementById("honk-btn");
document.getElementById("volume-slider").oninput = function() {
    volumeNumber.value = this.value; 
    if (volumeNumber.value == 0) {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
    } else if(volumeNumber.value > twoThirds && volumeNumber.value <= maxVolume) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        honkButton.disabled = false;
    } else if (volumeNumber.value > oneThird && volumeNumber.value <= twoThirds) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        honkButton.disabled = false;
    } else if (volumeNumber.value > 0 && volumeNumber.value <= 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        honkButton.disabled = false;
    }

    // Button should be disabled if volume is muted (meaning volume is exactly 0)
    // Otherwise, it should play the selected horn sound with the current volume level
    document.getElementById('horn-sound').volume = volumeNumber.value / maxVolume; 
}

// ***************************************************************************
// 3. VOLUME ICON CAN CHANGE BASED ON SOUND LEVEL
// - volume-level-3: 67-100
// - volume-level-2: 34-66
// - volume-level-1: 1-33
// - volume-level-0: 0
// Change the volume icon depending on different ranges
document.getElementById("volume-number").oninput = function() {
    let volumeSlider = document.getElementById("volume-slider");
    volumeSlider.value = this.value; 
    if(volumeNumber.value == 0) {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
    } else if(volumeNumber.value > twoThirds && volumeNumber.value <= maxVolume) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        honkButton.disabled = false;
    } else if (volumeNumber.value > oneThird && volumeNumber.value <= twoThirds) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        honkButton.disabled = false;
    } else if (volumeNumber.value > 0 && volumeNumber.value <= 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        honkButton.disabled = false;
    } 

    // Button should be disabled if volume is muted (meaning volume is exactly 0)
    // Otherwise, it should play the selected horn sound with the current volume level
    document.getElementById('horn-sound').volume = volumeSlider.value / maxVolume; 
}

// ***************************************************************************
// 4. RADIO THAT SWITCHES BETWEEN DIFF HORN SOUNDS
// Three diff options: Air Horn, Car Horn, and Party Horn
// Selecting a radio switch should change the sound that the <audio> element will play

// 5. Button that plays the horn sound

let airHorn = document.getElementById('radio-air-horn');
let carHorn = document.getElementById('radio-car-horn');
let partyHorn = document.getElementById('radio-party-horn');

document.getElementById('honk-btn').onclick = function(e) {
    e.preventDefault();
    let hornSound = document.getElementById('horn-sound');

    if (airHorn.checked){
        hornSound.src = "./assets/media/audio/air-horn.mp3";
        hornSound.play(); 
    } else if (carHorn.checked){
        hornSound.src = "./assets/media/audio/car-horn.mp3";
        hornSound.play(); 
    } else /* if (partyHorn.checked) */ {
        hornSound.src = "./assets/media/audio/party-horn.mp3";
        hornSound.play(); 
    }
    hornSound.play();
}

// Selecting a radio switch should also change the large image of what sound will play
let soundImage = document.getElementById("sound-image");
airHorn.onclick = function() {
    soundImage.src = "./assets/media/images/air-horn.svg";
}

carHorn.onclick = function() {
    soundImage.src = "./assets/media/images/car.svg";
} 

partyHorn.onclick = function() {
    soundImage.src = "./assets/media/images/party-horn.svg";
}

