const payementV2Enabled = true;

function PaymentServices() {
    this.pay = function (amount) {
        console.log(`Payment of ₹${amount.toFixed(2)} has been completed`);
    }
}

function PaymentServicesV2() {
    this.initiate = function (amount) {
        console.log(`Payment of ₹${amount} has initiate.`);
    }

    this.ott = function () {
        console.log(`OTT generated`);
    }

    this.validate = function () {
        console.log(`Payment request validated.`);
    }

    this.pay = function (amount) {
        console.log(`Payment of ₹${amount} has been completed`);
    }
}

function PaymentAdapter() {
    this.pay = function (amount) {
        if (!payementV2Enabled) {
            const payment = new PaymentServices();
            payment.pay(amount);
        }
        else {
            const payment = new PaymentServicesV2();
            payment.initiate(amount);
            payment.ott();
            payment.pay(amount);
        }
    }
}

function Cart() {
    const payment = new PaymentAdapter();
    payment.pay(100);
}

Cart();