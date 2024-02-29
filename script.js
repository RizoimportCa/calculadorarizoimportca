function calculateShippingAir() {
    var length = parseFloat(document.getElementById("lengthAir").value);
    var width = parseFloat(document.getElementById("widthAir").value);
    var height = parseFloat(document.getElementById("heightAir").value);
    var weight = parseFloat(document.getElementById("weightAir").value);

    var volumetricWeight = (length * width * height) / 5000;
    var finalWeight = Math.max(weight, volumetricWeight);

    var finalPrice = finalWeight * 30;
    document.getElementById("finalPriceAir").innerHTML = "$" + finalPrice.toFixed(2);
}

function calculateShippingSea() {
    var length = parseFloat(document.getElementById("lengthSea").value);
    var width = parseFloat(document.getElementById("widthSea").value);
    var height = parseFloat(document.getElementById("heightSea").value);
    var destination = parseFloat(document.getElementById("destination").value);

    var volumetricWeight = (length * width * height) / 1000000;
    var finalWeight = volumetricWeight;

    var finalPrice = finalWeight * destination;
    document.getElementById("finalPriceSea").innerHTML = "$" + finalPrice.toFixed(2);
}
