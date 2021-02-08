// login Button event create
const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', function(){
const loginArea = document.getElementById('login-area');
loginArea.style.display = 'none';

const transtion = document.getElementById('transaction');
transtion.style.display = 'block';
});

// Deposit Buton event create
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
// const depositInput = document.getElementById('depositInput').value;
// const depositNumber = parseFloat(depositInput);

const depositNumber = getInputNumber('depositInput');

// const currentDeposit = document.getElementById('currentDeposit').innerText;
// const currentDepositNumber = parseFloat(currentDeposit);
// const total = depositNumber + currentDepositNumber;
// document.getElementById('currentDeposit').innerText = total; 


updateSpanText('currentDeposit', depositNumber);
updateSpanText('currentBalance', depositNumber);

document.getElementById('depositInput').value = '';// empty ta neca rakta hoi

});

// withdraw button event creat
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){

  const withdrawNumber = getInputNumber('withdrawInput');
  updateSpanText('currentWithdraw', withdrawNumber);
  updateSpanText('currentBalance', -1 * withdrawNumber);

  document.getElementById('withdrawInput').value = '';// empty ta neca rakta hoi

});
function getInputNumber(id){
  const withdrawInput = document.getElementById(id).value;
  const withdrawNumber = parseFloat(withdrawInput);
  return withdrawNumber;
}

function updateSpanText(id, depositNumber){
  const currentBalance = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById(id).innerText = totalBalance;
}