describe("helpers test (with setup and tear-down)", function() { 

    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo(); 
      });

    it ("should accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects", function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        expect(sumPaymentTotal('billAmt')).toEqual(100);
    }); 

    it('should converts the bill and tip amount into a tip percent', function (){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });

    it('should expect a table row element, appends a newly created td element from the value', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
     
    }); 

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
      });


}); 