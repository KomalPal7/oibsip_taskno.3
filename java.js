
    let cel = document.getElementById("cel");
    let fah = document.getElementById("fah")
    let kel = document.getElementById("kel")
    
    cel.oninput = ()=>{
        let output1 = parseFloat(cel.value) *9/5 + 32;
        fah.value = parseFloat(output1.toFixed(2));
        let output2 = parseFloat(cel.value) + 273.15;
        kel.value = parseFloat(output2.toFixed(2));
    };
    fah.oninput = ()=>{
        let output1 = ((parseFloat(fah.value) - 32) * 5) /9;
        cel.value = parseFloat(output1.toFixed(2));
        let output2 = ((parseFloat(fah.value) -32) * 5) /9 + 273.15;
        kel.value =parseFloat (output2.toFixed(2));

    };
    kel.oninput = ()=>{
        let output1 = (parseFloat(kel.value) - 273.15);
        cel.value = parseFloat(output1.toFixed(2));
        let output2 = ((parseFloat(kel.value) -273.15) * 9) /5 + 32;
        fah.value =parseFloat (output2.toFixed(2));

    };