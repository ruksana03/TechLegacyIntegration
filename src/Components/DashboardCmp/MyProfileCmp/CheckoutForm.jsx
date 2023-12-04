import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import './CheckoutForm.css'

import axiosSecure from "../../../API/axiosSecure.js";
import useAuth from '../../../Hooks/useAuth'
import toast from 'react-hot-toast';
// import { createCheckoutSession } from '../../../API/payment'

const CheckoutForm = ({ subscriptionInfo, closeModal }) => {
  console.log(subscriptionInfo)
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId , setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false)

  //   // Frontend useEffect
    useEffect(() => {
      axiosSecure.post('/create-checkout-session',{payAmount:subscriptionInfo.pay})
      .then(res =>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
  }, [subscriptionInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
  
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
  
    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('payment method', paymentMethod);
    }
  
    setProcessing(true);
  
    try {
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
            },
          },
        }
      );
  
      if (confirmError) {
        console.log(confirmError);
        setCardError(confirmError.message);
      }
  
      console.log('payment intent', paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        console.log('transiactionId :', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // save payment info to database 
        const paymentInfo = {
          email:user?.email,
          payAmount: subscriptionInfo?.pay,
          date: new Date(),
          transactionId:paymentIntent.id,
          status:'verified'
        }
        const res =await axiosSecure.post('/payments',paymentInfo)
        console.log('payment saved',res)
        toast.success('Payment successful!');
        closeModal()
      }
  
      // Now you can execute the last line of code here
    } catch (error) {
      console.error('Error confirming card payment:', error);
      // Handle error as needed
    } finally {
      setProcessing(false);
    }
  };
  

  return (
    <>
      <form className='my-2 font-mono' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontFamily:'ui-monospace, SFMono-Regular, Menlo Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={!stripe || !clientSecret}
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            {/* {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay ${subscriptionInfo.price}$`
            )} */}
            pay
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm