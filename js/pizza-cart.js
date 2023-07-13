function pizzaCartLogic() {
    return {

        paymentAmount:"",
        paymentFeedback : "",
        viewCart: false ,
        clickViewCart(){
            this.viewCart = !this.viewCart;
        },
        small: {
            quantity: 0,
            totalPrice: "0.00",
            addedToCart: false,

            addToCart() {
                if (this.addedToCart == true) {
                    this.addedToCart = false;
                    this.quantity = 0;
                } else {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 29).toFixed(2);
                    this.addedToCart = true;
                }
            },
            increase() {
                if (this.addedToCart) {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 29).toFixed(2);
                }
            },
            decrease() {
                if (this.quantity > 0 && this.addedToCart) {
                    this.quantity--;
                    this.totalPrice = (this.quantity * 29).toFixed(2);
                }
            },
        },

        medium: {
            quantity: 0,
            totalPrice: "0.00",
            addedToCart: false,

            addToCart() {
                if (this.addedToCart == true) {
                    this.addedToCart = false;
                    this.quantity = 0;
                } else {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 59).toFixed(2);
                    this.addedToCart = true;
                }
            },
            increase() {
                if (this.addedToCart) {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 59).toFixed(2);
                }
            },
            decrease() {
                if (this.quantity > 0 && this.addedToCart) {
                    this.quantity--;
                    this.totalPrice = (this.quantity * 59).toFixed(2);
                }
            },
        },

        large: {
            quantity: 0,
            totalPrice: "0.00",
            addedToCart: false,

            addToCart() {
                if (this.addedToCart == true) {
                    this.addedToCart = false;
                    this.quantity = 0;
                } else {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 89).toFixed(2);
                    this.addedToCart = true;
                }
            },
            increase() {
                if (this.addedToCart) {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 89).toFixed(2);
                }
            },
            decrease() {
                if (this.quantity > 0 && this.addedToCart) {
                    this.quantity--;
                    this.totalPrice = (this.quantity * 89).toFixed(2);
                }
            },
        },

        submitPayment(){
            let difference = Number(this.paymentAmount) - ( Number((this.small.totalPrice)) + Number((this.medium.totalPrice)) + Number((this.large.totalPrice)))   ;
            if(difference < 0){
                this.paymentFeedback = `Insufficient amount, R ${-1*difference} short`;
            }else if (difference > 0){
                this.paymentFeedback = `Payment successful : R ${difference} change`;

            }else{
                this.paymentFeedback = "Payment successful";
            }
        },
     
     
    };
}
