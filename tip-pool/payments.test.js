describe("Payments test (with setup and tear-down)", function() { 

    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
      });

    it ('should add a curPayment object to allPayments', function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    }); 

    it ('should return undefined with negative or empty inputs', function () {
        let billAmt = "";
        let tipAmt = "";
        submitPaymentInfo();

        expect(createCurPayment()).toEqual(undefined);
    }); 

    it ('should update payment summary', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('%20');
      });

     it('should create a new payment on createCurPayment()', function () {
       let expectedPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,}
        
        expect(createCurPayment()).toEqual(expectedPayment);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
      });


}); 