function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius");
    let radiusValue = radius.value ;
    let volume = document.getElementById("volume");
    let ans = 4/3*3.14*(radiusValue*radiusValue*radiusValue);
    volume.value =ans;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
