describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create table row element and pass to appendTd function with input value', function() {
    submitServerInfo();
    updateServerTable();
    
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
  }); 

  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = ''
  });
});
