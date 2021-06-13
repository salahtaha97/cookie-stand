"use strict"

let cookiesSales = document.getElementById("cookieSales");
function randomNumber(min, max) {
    min = Math.ceil(min);
    max =Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)+ min);
    
}

let salmonSeatle = {
    name = "seatle",
    numCustPerHour : 0,
    minNumCust : 23 ,
    maxNumCust : 65,
    avargeOfCookies : 6.3,
    numCustomer : function() {
        this.numCustPerHour = randomNumber(this.minNumCust, this.maxNumCust);
    },
    salesOfCookies : 0,
    scookies : function () {
        for (let i = 0; i < numCustPerHour.length; i++) {
            this.scookies = this.numCustPerHour * this.avargeOfCookies;              
        }
    }
}

let salmonTokyo = {
    name = "Tokyo",
    numCustPerHour : 0,
    minNumCust : 3 ,
    maxNumCust : 24,
    avargeOfCookies : 1.2,
    numCustomer : function() {
        this.numCustPerHour = randomNumber(this.minNumCust, this.maxNumCust);
    },
    salesOfCookies : 0,
    scookies : function () {
        this.scookies = this.numCustPerHour * this.avargeOfCookies;   
    }
}


let salmonDubai = {
    name = "Dubai",
    numCustPerHour : 0,
    minNumCust : 11 ,
    maxNumCust : 38,
    avargeOfCookies : 3.7,
    numCustomer : function() {
        this.numCustPerHour = randomNumber(this.minNumCust, this.maxNumCust);
    },
    salesOfCookies : 0,
    scookies : function () {
        this.scookies = this.numCustPerHour * this.avargeOfCookies;   
    }
}

let salmonParis = {
    name = "Paris",
    numCustPerHour : 0,
    minNumCust : 20 ,
    maxNumCust : 38,
    avargeOfCookies : 2.3,
    numCustomer : function() {
        this.numCustPerHour = randomNumber(this.minNumCust, this.maxNumCust);
    },
    salesOfCookies : 0,
    scookies : function () {
        this.scookies = this.numCustPerHour * this.avargeOfCookies;   
    }
}

let salmonLima = {
    name = "Lima",
    numCustPerHour : 0,
    minNumCust : 2 ,
    maxNumCust : 16,
    avargeOfCookies : 4.6,
    numCustomer : function() {
        this.numCustPerHour = randomNumber(this.minNumCust, this.maxNumCust);
    },
    salesOfCookies : 0,
    scookies : function () {
        this.scookies = this.numCustPerHour * this.avargeOfCookies;   
    }
}
