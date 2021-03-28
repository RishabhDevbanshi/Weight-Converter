document.getElementById('output').style.visibility = "hidden"

document.getElementById('lbsInput').addEventListener("input",function(e) {
    let lbs = e.target.value;
    if(lbs == 0) document.getElementById('output').style.visibility = "hidden"
    else document.getElementById('output').style.visibility = "visible"
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kilogramsOutput').innerHTML = lbs/2.2046;
    document.getElementById('ouncesOutput').innerHTML = lbs * 16;
})