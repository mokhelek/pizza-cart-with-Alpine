function pizzaCartLogic() {
    return {
        checkoutClicked:false,
        clickCheckout(){
            this.checkoutClicked = !this.checkoutClicked ;
        },
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
                    this.totalPrice = 0;
                    this.quantity = 0;
                } else {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 29.99).toFixed(2);
                    this.addedToCart = true;
                }
            },
            increase() {
                if (this.addedToCart) {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 29.99).toFixed(2);
                }
            },
            decrease() {
                if (this.quantity > 0 && this.addedToCart) {
                    this.quantity--;
                    this.totalPrice = (this.quantity * 29.99).toFixed(2);
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
                    this.totalPrice = 0;
                } else {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 59.99).toFixed(2);
                    this.addedToCart = true;
                }
            },
            increase() {
                if (this.addedToCart) {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 59.99).toFixed(2);
                }
            },
            decrease() {
                if (this.quantity > 0 && this.addedToCart) {
                    this.quantity--;
                    this.totalPrice = (this.quantity * 59.99).toFixed(2);
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
                    this.totalPrice = 0;
                } else {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 89.99).toFixed(2);
                    this.addedToCart = true;
                }
            },
            increase() {
                if (this.addedToCart) {
                    this.quantity++;
                    this.totalPrice = (this.quantity * 89.99).toFixed(2);
                }
            },
            decrease() {
                if (this.quantity > 0 && this.addedToCart) {
                    this.quantity--;
                    this.totalPrice = (this.quantity * 89.99).toFixed(2);
                }
            },
        },

        submitPayment(){
            let difference = Number(this.paymentAmount) - ( Number((this.small.totalPrice)) + Number((this.medium.totalPrice)) + Number((this.large.totalPrice)))   ;
            if(difference < 0){
                this.paymentFeedback = `Insufficient amount, R ${(-1*difference).toFixed(2)} short`;
            }else if (difference > 0){
                
                this.paymentFeedback = `Payment successful : R ${(difference).toFixed(2)} change`;
                setTimeout(()=>{
                    this.paymentFeedback= ''
                },3000)
                
                this.small.totalPrice = 0 ;
                this.small.quantity = 0 ;
                this.small.addedToCart= false;

                this.medium.totalPrice = 0 ;
                this.medium.quantity = 0 ;
                this.medium.addedToCart= false;

                this.large.quantity = 0 ;
                this.large.totalPrice = 0 ;
                this.large.addedToCart= false;

                this.checkoutClicked = false ;
             
            }else{
                this.paymentFeedback = "Payment successful";
                setTimeout(()=>{
                    this.paymentFeedback = "" 
                },3000)
                this.small.totalPrice = 0 ;
                this.small.quantity = 0 ;
                this.small.addedToCart= false;

                this.medium.totalPrice = 0 ;
                this.medium.quantity = 0 ;
                this.medium.addedToCart= false;

                this.large.quantity = 0 ;
                this.large.totalPrice = 0 ;
                this.large.addedToCart= false;
                
                this.checkoutClicked = false ;
            }
        },
     
     
    };
}
