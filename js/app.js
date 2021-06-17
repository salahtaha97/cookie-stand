'use strict';

let hour = ['6am', '7am', '8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];

let parentElement = document.getElementById('cookiesSales');
let cookieMaintable = document.getElementById("tableOfCooki");
let cookiesData = [];
let allTotal = [];
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function SalmonStore(name, minNumCustm, maxNumCustm, avarageOfCookie) {
  this.name = name;
  this.minNumCustm = minNumCustm;
  this.maxNumCustm = maxNumCustm;
  this.avarageOfCookie = avarageOfCookie;
  this.cookiespurchase = [];
  this.total = 0;
  this.buyCookies = [];
  cookiesData.push(this);
}

let salmonSeatle = new SalmonStore('Seatle', 23, 65, 6.3);
let salmonTokyo = new SalmonStore('Tokyo', 3, 24, 1.2);
let salmonDubai = new SalmonStore('Dubai', 11, 38, 3.7);
let salmonParis = new SalmonStore('Paris', 20, 38, 2.3);
let salmonLima = new SalmonStore('Lima', 2, 16, 4.6);


cookiestableHeaders();
SalmonStore.prototype.render = function () {
  let cookiesRows = document.createElement('tr');
  cookieMaintable.appendChild(cookiesRows);
  let cookiesheadRows = document.createElement('th');
  cookiesRows.appendChild(cookiesheadRows);
  cookiesheadRows.textContent = this.name;

  for (let i = 0; i < hour.length; i++) {
    let cookiesTimings = document.createElement('td');
    cookiesRows.appendChild(cookiesTimings);
    cookiesTimings.textContent = this.buyCookies[i];
  }
  let cookiesTotalRows = document.createElement('th');
  cookiesRows.appendChild(cookiesTotalRows);
  cookiesTotalRows.textContent = this.total;
}

function cookiestableHeaders() {
  let cookiesHeaders = document.createElement('tr');
  cookieMaintable.appendChild(cookiesHeaders);
  let cookiesNamesRows = document.createElement('th');
  cookiesHeaders.appendChild(cookiesNamesRows);
  cookiesNamesRows.textContent = '';

  for (let i = 0; i < hour.length; i++) {
    let cookiesTimings = document.createElement('th');
    cookiesHeaders.appendChild(cookiesTimings);
    cookiesTimings.textContent = hour[i];
  }
  let cookiesTotallocation = document.createElement('th');
  cookiesHeaders.appendChild(cookiesTotallocation);
  cookiesTotallocation.textContent = ' Total';
}

SalmonStore.prototype.customersPerHour = function () {
  for (let i = 0; i < hour.length; i++) {
    let customer = Math.ceil(
      getRandomNumber(this.minNumCustm, this.maxNumCustm)
    );
    this.buyCookies.push(customer);
  }
}

SalmonStore.prototype.getcookie = function () {
  for (let i = 0; i < hour.length; i++) {
    let cookies = Math.ceil(this.buyCookies[i] * this.avarageOfCookie);
    this.cookiespurchase.push(cookies);
    this.total = this.total + this.buyCookies[i];
  }
}
salmonSeatle.customersPerHour();
salmonTokyo.customersPerHour();
salmonLima.customersPerHour();
salmonParis.customersPerHour();
salmonDubai.customersPerHour();
salmonSeatle.getcookie();
salmonTokyo.getcookie();
salmonLima.getcookie();
salmonParis.getcookie();
salmonDubai.getcookie();
salmonSeatle.render();
salmonTokyo.render();
salmonLima.render();
salmonParis.render();
salmonDubai.render();

function locationhoursTotals(x) {
  let sumLocationTotal = 0;
  for (let i = 0; i < cookiesData.length; i++) {
    sumLocationTotal += cookiesData[i].cookiespurchase[x];
    allTotal.push(sumLocationTotal);
  }
  return sumLocationTotal;
}
function totalofCookiesTotal() {
  let totcookies = 0;
  for (let i = 0; i < cookiesData.length; i++) {
    totcookies += allTotal[i];
  }
  return totcookies;
}
function cookiesfooter() {
  let cookiesfooter = document.createElement('tr');
  cookieMaintable.appendChild(cookiesfooter);
  let cookiesTotalRows = document.createElement('th');
  cookiesfooter.appendChild(cookiesTotalRows);
  cookiesTotalRows.textContent = 'Total';

  for (let i = 0; i < hour.length; i++) {
    let eachtotalcookies = document.createElement('td');
    cookiesfooter.appendChild(eachtotalcookies);
    eachtotalcookies.textContent = locationhoursTotals(i);
  }
  let cookiesTotaloftheTotals = document.createElement('th');
  cookiesfooter.appendChild(cookiesTotaloftheTotals);
  cookiesTotaloftheTotals.textContent = totalofCookiesTotal();
}
cookiesfooter();