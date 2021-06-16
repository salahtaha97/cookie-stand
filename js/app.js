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
};

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
  cookiesTotallocation.textContent = 'Daily Location Total';
}

SalmonStore.prototype.customersPerHour = function () {
  for (let i = 0; i < hour.length; i++) {
    let customer = Math.ceil(
      getRandomNumber(this.minNumCustm, this.maxNumCustm)
    );
    this.buyCookies.push(customer);
  }
};

SalmonStore.prototype.getcookie = function () {
  for (let i = 0; i < hour.length; i++) {
    let cookies = Math.ceil(this.buyCookies[i] * this.avarageOfCookie);
    this.cookiespurchase.push(cookies);
    this.total = this.total + this.buyCookies[i];
  }
};
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
// let cookieStoresInfo = [];



// function nameOfStore (name, minNumCustm,maxNumCustm, avarageOfCookie){
// this.name= name;
// this.minNumCustm= minNumCustm;
// this.maxNumCustm= maxNumCustm;
// this.avarageOfCookie= avarageOfCookie;
// this.numOfCookiPerHour= [];
// this.cookieSales= [];
// this.total = 0;
// cookieStoresInfo.push(this);
// }


// let salmonSeatle = new nameOfStore('seatle',23,65,6.3)
// let salmonDubai = new nameOfStore('dubai',11,38,3.7)
// let salmonParis = new nameOfStore('paris',20,38,2.3)
// let salmonlima = new nameOfStore('lima',2,16,4.6)
// let salmonTokyo = new nameOfStore('Tokyo',3,24,1.2)

// headOfTable();

// nameOfStore.prototype.getCustomer = function(){
// for (let i = 0; i < hour.length; i++) {
// let time = Math.floor(Math.random () * (this.maxNumCustm - this.minNumCustm +1 ) + this.minNumCustm);
// this.CookiPerHour.push(time);



// }

        
//         }
 
// nameOfStore.prototype.render = function(){
//         let tableRow = document.createElement('tr');
//         cookieTable.appendChild(tableRow);
       
//         let tableRh = document.createElement('th');
//         tableRow.appendChild(tableRh);
//         tableRh.textContent = this.name;

//         for (let i = 0; i < hour.length; i++) {
//                 let timeT = document.createElement('td');
//         tableRow.appendChild(timeT);
//         timeT.textContent = this.cookieSales[i];

//                 // let allTime = Math.ceil(this.avarageOfCookie * this.CookiPerHour[i]);
//                 // this.numOfCookiPerHour.push(allTime);
//                 // this.total += allTime;
//                 }
//                 let rowTable = document.createElement('th');
//                 tableRow.appendChild(rowTable);
//                 rowTable.textContent = this.total;
// }

// function cookieTableS() {
//         let cookiesHead = document.createElement('tr');
//         cookieTable.appendChild(cookiesHead);
//         let NamesRow = document.createElement('th');
//         cookiesHead.appendChild(NamesRow);
//         NamesRow.textContent = '';
      
//         for (let i = 0; i < hour.length; i++) {
//           let timeT = document.createElement('th');
//           cookiesHead.appendChild(hour);
//           timeT.textContent = hour[i];
//         }

//         let cookiesTotal = document.createElement('th');
//   cookiesHead.appendChild(cookiesTotal);
//   cookiesTotal.textContent = 'Daily Location Total';
// }


// nameOfStore.prototype.customerPerHour = function(){
//         for (let i = 0; i < hour.length; i++) {
//                 let customer = Math.ceil(
//                         getRandomNumber(this.minNumCustm, this.maxNumCustm)
//                       );
//                       this.cookieSales.push(customer);
//                     }
//                 }
//                   SalmonStore.prototype.getcookie = function () {
//                         for (let i = 0; i < hour.length; i++) {
//                           let cookies = Math.ceil(this.cookieSales[i] * this.avarageOfCookie);
//                           this.cookiespurchase.push(cookies);
//                           this.total = this.total + this.cookieSales[i];
//                         }

//                         salmonSeatle.customersPerHour();
//                         salmonTokyo.customersPerHour();
//                         salmonlima.customersPerHour();
//                         salmonParis.customersPerHour();
//                         salmonDubai.customersPerHour();
//                         salmonSeatle.getcookie();
//                         salmonTokyo.getcookie();
//                         salmonlima.getcookie();
//                         salmonParis.getcookie();
//                         salmonDubai.getcookie();
//                         salmonSeatle.render();
//                         salmonTokyo.render();
//                         salmonlima.render();
//                         salmonParis.render();
//                         salmonDubai.render();


//                         function locationhoursTotals(x) {
//                                 let sumLocationTotal = 0;
//                                 for (let i = 0; i < cookiesAllData.length; i++) {
//                                   sumLocationTotal += cookiesAllData[i].cookiespurchase[x];
//                                   TotalofTotals.push(sumLocationTotal);
//                                 }
//                                 return sumLocationTotal;
//                               }
//                               function totalofCookiesTotal() {
//                                 let totcookies = 0;
//                                 for (let i = 0; i < cookiesAllData.length; i++) {
//                                   totcookies += TotalofTotals[i];
//                                 }
//                                 return totcookies;
//                               }
//                               function cookiesfooter() {
//                                 let cookiesfooter = document.createElement('tr');
//                                 cookieMaintable.appendChild(cookiesfooter);
//                                 let cookiesTotalRows = document.createElement('th');
//                                 cookiesfooter.appendChild(cookiesTotalRows);
//                                 cookiesTotalRows.textContent = 'Total';
                              
//                                 for (let i = 0; i < customerTime.length; i++) {
//                                   let eachtotalcookies = document.createElement('td');
//                                   cookiesfooter.appendChild(eachtotalcookies);
//                                   eachtotalcookies.textContent = locationhoursTotals(i);
//                                 }
//                                 let cookiesTotaloftheTotals = document.createElement('th');
//                                 cookiesfooter.appendChild(cookiesTotaloftheTotals);
//                                 cookiesTotaloftheTotals.textContent = totalofCookiesTotal();
//                               }
//                               cookiesfooter();
//                   }




// let tableHead =document.createElement('th');
// tableRow.appendChild(tableHead);
// tableHead.textContent = this.name;

// for (let i = 0; i < hour.length; i++) {
// //   tableData = document.createElement('td');
//  tableRow.appendChild(tableData);
// tableData.textContent = this.numOfCookiPerHour[i];
// }

// let tableData3 = document.createElement('th');
// tableHead.appendChild(tableData2);
// tableData3.textContent ="Total";
// }

// let total = document.createElement('th');
// tableRow.appendChild(total);
// total.textContent = this.total;
// }

// let salmonSeatle = new nameOfStore('seatle',23,65,6.3)
// let salmonDubai = new nameOfStore('dubai',11,38,3.7)
// let salmonParis = new nameOfStore('paris',20,38,2.3)
// let salmonlima = new nameOfStore('lima',2,16,4.6)
// let salmonTokyo = new nameOfStore('Tokyo',3,24,1.2)


// headOfTable();

// salmonSeatle.getCustomer();
// salmonSeatle.render();

// salmonTokyo.getCustomer();
// salmonTokyo.render();

// salmonlima.getCustomer();
// salmonlima.render();

// salmonDubai.getCustomer();
// salmonDubai.render();

// salmonParis.getCustomer();
// salmonParis.render();

// function headOfTable (){
// let hTl = document.createElement('tr');
// tableOfCookie.appendChild(hTl);

// let tableData1 = document.createElement('th');
//         hTl.appendChild(tableData1);
//         tableData1.textContent ="name";
//         let tableData2 = document.createElement('th');

//         for (let i = 0; i < hour.length; i++) {
//                 tableData2 = document.createElement('th');

//         hTl.appendChild(tableData2);
//         tableData2.textContent =hour[i];
//         }
//         let tableData3 = document.createElement('th');
//         hTl.appendChild(tableData2);
//         tableData3.textContent ="Total";
// }






// function getRandomCust(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//       }