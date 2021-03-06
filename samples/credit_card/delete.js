/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var new_credit_card_details = {
    "type": "visa",
    "number": "4417119669820331",
    "expire_month": "11",
    "expire_year": "2019"
};

paypal_api.credit_card.create(new_credit_card_details, function (error, credit_card) {
    if (error) {
        throw error;
    } else {
        paypal_api.credit_card.delete(credit_card.id, function (error, no_response) {
            if (error) {
                throw error;
            } else {
                console.log("CreditCard deleted.");
            }
        });
    }
});
