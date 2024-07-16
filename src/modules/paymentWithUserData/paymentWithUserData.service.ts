import Stripe from 'stripe';
import config from '../../config';
import { TPayment } from './paymentWithUserData.interface';
import { Payment } from './paymentWithUserData.model';

const stripe = new Stripe(config.stripe as string);

interface PaymentPayload {
    price: number;
}

interface PaymentResponse {
    clientSecret: string | null;
}

const setPayment = async (payload: PaymentPayload): Promise<PaymentResponse> => {
    const { price } = payload;
    const amount = Math.round(price * 100);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });
        return {
            clientSecret: paymentIntent.client_secret,
        };
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
}


const setUserPayment = async (payload: TPayment) => {
    const result = await Payment.create(payload)
    return result
};

export const paymentService = {
    setPayment,
    setUserPayment
}
