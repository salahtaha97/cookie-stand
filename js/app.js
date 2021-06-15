'use strict';

let hour = ['6am', '7am', '8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm' ];

let parentElement = document.getElementById('cookiesSales');

let salmonSeatle = {
    name : 'seatle',
    minNumCustm:23,
    maxNumCustm:65,
    numCookiPerHour:[],
    avarageOfCookie:6.3,
    total:0 ,
    numCustomer: function(){
        for (let  i= 0; i < hour.length; i++) {
            
            let cookies = Math.ceil( getRandomNumber(this.minNumCustm, 
                this.maxNumCustm) * this.avarageOfCookie);
                this.numCookiPerHour.push(cookies);
                this.total += cookies;
            
        }
    },
    render: function() {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent= this.name;

        let ul = document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hour.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent= ` ${hour[i]}: ${this.numCookiPerHour[i] } cookies `;
            
        }
        let total = document.createElement('li');
        ul.appendChild(total);
        li.textContent= ` total: ${this.total} cookies `;
    }
}

let salmontokoyo = {
    name : 'tokyo',
    minNumCustm:3,
    maxNumCustm:24,
    numCookiPerHour:[],
    avarageOfCookie:1.2,
    total:0 ,

    numCustomer: function(){
        for (let i = 0; i < hour.length; i++) { 
            let cookies = Math.ceil( getRandomNumber(this.minNumCustm, 
                this.maxNumCustm) * this.avarageOfCookie);
                this.numCookiPerHour.push(cookies);
                this.total += cookies;
            
        }
    },
    render: function() {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent= this.name;

        let ul = document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hour.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent= ` ${hour[i]} : ${this.numCookiPerHour[i] } cookies `;
            
        }
        let total = document.createElement('li');
        ul.appendChild(total);
        li.textContent= ` total: ${this.total} cookies `;
    }
}




let salmonDubai = {
    name : 'Dubai',
    minNumCustm:11,
    maxNumCustm:38,
    numCookiPerHour:[],
    avarageOfCookie: 3.7,
    total:0 }

    let paris = {
        name : 'paris',
        minNumCustm:20,
        maxNumCustm:38,
        numCookiPerHour:[],
        avarageOfCookie:2.3,
        total:0 }

        let lima = {
            name : 'lima',
            minNumCustm:2,
            maxNumCustm:216,
            numCookiPerHour:[],
            avarageOfCookie:4.6,
            total:0} 

            salmonSeatle.numCustomer();
            salmonSeatle.render();

            salmontokoyo.numCustomer();
            salmontokoyo.render();

            
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

        