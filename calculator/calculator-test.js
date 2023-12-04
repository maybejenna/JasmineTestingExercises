
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(300, 12, 1)).toBe('26.65');
});


it("should return a result with 2 decimal places", function() {
  let result = calculateMonthlyPayment(300, 12, 1); 
  expect(typeof result).toBe('string');
  let decimalPart = result.split('.')[1];
  expect(decimalPart.length).toBe(2);
});

