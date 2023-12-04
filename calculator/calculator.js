window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  document.getElementById("loan-amount").value = 0; 
  document.getElementById("loan-years").value = 0;
  document.getElementById("loan-rate").value = 0;
}

function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values.amount, values.rate, values.years);
  updateMonthly(monthly);
}

function calculateMonthlyPayment(loanAmount, annualRate, loanYears) {
  const monthlyRate = annualRate / 12 / 100;
  const totalPayments = loanYears * 12;
  let monthly = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
  return monthly.toFixed(2);
}

function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}