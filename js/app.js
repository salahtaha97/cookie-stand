'use strict';

let hour = ['6am', '7am', '8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];

let nameOfStore = [];
function stores (name, minNumCustm,maxNumCustm,){
this.name= name;
this.minNumCustm= minNumCustm;
this.maxNumCustm= maxNumCustm;
this.avarageOfCookie= avarageOfCookie;
this.numCookiPerHour= [];
this.total = total;
this.customerPerHour = [];
nameOfStore.push(this);
}

nameOfStore.prototype.cusPerHour = function(){
for (let i = 0; i < hour.length; i++) {
let time = Math.floor( Math.Random() * (this.maxNumCustm - this.minNumCustm + 1 ) + this.minNumCustm);
this.customerPerHour.push(time);
}
}


nameOfStore.prototype.CookiPerHour = function(){
for (let i= 0; i < hour.length; i++) {
    
let everyHour = Math.ceil( this.avarageOfCookie * this.customerPerHour[i]);
this.numCookiPerHour.push(everyHour);
this.total += everyHour;
}
}

nameOfStore.prototype.render = function(){
let rowTable = document.createElement('tr');
        tableElement.appendChild(rowTable);
let tableData = document.createElement('td');
       rowTable.appendChild(tableData);
tableData.textContent = this.name;
 for (let i = 0; i < hour.length; i++) {
            let dataTable = document.createElement('td');
            rowTable.appendChild(dataTable);
dataTable.textContent = this.numCookiPerHour[i];
}
let dataTable = document.createElement('td');
            rowTable.appendChild(dataTable);
dataTable.textContent = this.total;
}

let parentElement = document.getElementById('cookiesSales');
let articleElement = document.createElement('article');
parentElement.appendChild(articleElement);
let tableElement = document.createElement('table');
parentElement.appendChild(tableElement);


function hRow (){
let rowTable = document.createElement('tr');
        tableElement.appendChild(rowTable);
let headTable = document.createElement('th');
        tableElement.appendChild(headTable);
headTable.textContent =null;

for (let x = 0; x < hour.length; x++) {
            let tableHeaderElement = document.createElement('th');
            rowTable.appendChild(tableHeaderElement);
dataTable.textContent = this.hour[x];

let tableHeaderElement2 = document.createElement('th');
            rowTable.appendChild(tableHeaderElement2);
tableHeaderElement2.textContent = " total of day sales"
}


function rRow (){
let rowTable = document.createElement('tr');
        tableElement.appendChild(rowTable);
let tableData = document.createElement('th');
        tableElement.appendChild(tableData);
tableData.textContent ="total";

}
}