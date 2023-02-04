// import { useEffect } from 'react';
// import QuoteForm from '../components/quotes/QuoteForm'
// import { useHistory } from 'react-router-dom';
// import useHttp from '../hooks/hooks/use-http'
// import addQuote from '../lib/lib/api'

// const NewQuote = () => {
//   const histroy = useHistory()
//       const [sendRequest , status] = useHttp(addQuote)
//       useEffect(() => {
//         if(status === 'completed') {
//           histroy.push('/quotes')
//         }
//       }, [status])

//       const addQuoteHandler = quoteData => {
//         console.log(quoteData)
//         histroy.push('/quotes')
//       }

//   return <QuoteForm OnAddQuote={addQuoteHandler} isLoading={status === 'pending'} />
// };

// export default NewQuote;
