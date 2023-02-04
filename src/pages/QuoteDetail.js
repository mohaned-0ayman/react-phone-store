// import HighlightedQuote from '../components/quotes/HighlightedQuote'
// import { Fragment } from 'react';
// import { Link, Route, useRouteMatch } from 'react-router-dom';
// import  {useParams}  from 'react-router-dom';
// import Comments from '../components/comments/Comments'

// const DUMMY_DATA = [
//   {id: 'q1', auther: 'MOHAMED', text: 'Learing react is fun'},
//   {id: 'q2', auther: 'AYMAN', text: 'Learing react is fun'}
// ]

// const QuoteDetail = () => {
//   const params = useParams();
//   const match = useRouteMatch()

//   const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId)

//   if(!quote){
//     return <p>No quote found</p>
//   }

//   return (
//     <Fragment>
//       <HighlightedQuote text={quote.text} auther={quote.auther} />

//       <Route path={match.path} exact>
//       <Link className='btn-flat' to={`/quotes/${match.url}/comments`}>Load Comments</Link>
//       <p>{params.quoteId}</p>
//       <Route path={`${match.path}/comments`}>
//           <Comments />
//       </Route>
//       </Route>

//     </Fragment>
//   );
// };

// export default QuoteDetail;
