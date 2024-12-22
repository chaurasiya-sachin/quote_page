import styles from './quote.module.css'

const quotes =  [
      {
        "quote": "Good food is the foundation of genuine happiness.",
        "by": "Auguste Escoffier"
      },
      {
        "quote": "The only thing I like better than talking about food is eating.",
        "by": "John Walters"
      },
      {
        "quote": "People who love to eat are always the best people.",
        "by": "Julia Child"
      },
      {
        "quote": "Food brings people together on many different levels. It's nourishment of the soul and body; it's truly love.",
        "by": "Giada De Laurentiis"
      },
      {
        "quote": "You don't need a silver fork to eat good food.",
        "by": "Paul Prudhomme"
      },
      {
        "quote": "One cannot think well, love well, sleep well, if one has not dined well.",
        "by": "Virginia Woolf"
      },
      {
        "quote": "Cooking is like love. It should be entered into with abandon or not at all.",
        "by": "Harriet Van Horne"
      },
      {
        "quote": "Laughter is brightest where food is best.",
        "by": "Irish Proverb"
      },
      {
        "quote": "We all eat, and it would be a sad waste of opportunity to eat badly.",
        "by": "Anna Thomas"
      },
      {
        "quote": "After a good dinner one can forgive anybody, even one's own relations.",
        "by": "Oscar Wilde"
      },
      {
        "quote": "The secret of success in life is to eat what you like and let the food fight it out inside.",
        "by": "Mark Twain"
      },
      {
        "quote": "Life is uncertain. Eat dessert first.",
        "by": "Ernestine Ulmer"
      },
      {
        "quote": "There is no sincerer love than the love of food.",
        "by": "George Bernard Shaw"
      },
      {
        "quote": "The discovery of a new dish does more for the happiness of the human race than the discovery of a star.",
        "by": "Jean Anthelme Brillat-Savarin"
      },
      {
        "quote": "You don't have to cook fancy or complicated masterpieces—just good food from fresh ingredients.",
        "by": "Julia Child"
      },
      {
        "quote": "Eating is not merely a material pleasure. Eating well gives a spectacular joy to life and contributes immensely to goodwill and happy companionship.",
        "by": "Elsa Schiaparelli"
      },
      {
        "quote": "First we eat, then we do everything else.",
        "by": "M.F.K. Fisher"
      },
      {
        "quote": "Great cooking favors the prepared hands.",
        "by": "Jacques Pépin"
      },
      {
        "quote": "To eat is a necessity, but to eat intelligently is an art.",
        "by": "François de La Rochefoucauld"
      },
      {
        "quote": "Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.",
        "by": "Ruth Reichl"
      }
    ]

const QuoteCard = ({quote,by})=>{
    return(
        <div className={styles.quoteCard}>
            <p>{quote}</p>
            <p>{by}</p>
        </div>
    )
}

const Quote = () => {
  return (
    <div className={styles.quoteContainer}>
      {
        quotes.map((quote,idx)=>{
            return <QuoteCard {...quote} key={idx}/>
        })
      }
      
    </div>
  )
}

export default Quote;
