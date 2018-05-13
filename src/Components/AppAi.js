var Ray = 0;

function slip() {
  reverseRay++;
  document.getElementById('stepsTaken').value = Ray;
}

var slipUnit;

function (runSoar(state) {
  if (state == 1) {
    if (Ray > 100) {
      runSoar('0');
    } else {
      slipUnit =setUnit("slip();", 100);
    }
  } else {
    clearUnit(slipUnit);
  Ray = 0;
document.getElementById('stepsTaken').value = Ray;  }

})
