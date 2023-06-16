import React from "react";
import { useState, useEffect } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";
import alanBtn from "@alan-ai/alan-sdk-web";
// import useStyles from './styles';

const alanKey =
  "e76d31ee0640c0009a7cc56801ac61c52e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [NewsArticles, setNewsAriticles] = useState([]);
  const [ActiveArticle, setActiveArticle] = useState(-1);
  // const [isOpen, setIsOpen] = useState(false);
  // const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsAriticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parseNumber = number.length > 2 ? wordsToNumbers(number, {}) : number;
          const article = articles[parseNumber - 1];

          if (parseNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening....");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <div className="w-screen h-screen">
      {/*style logoContainer */}
      <div className="mx-auto pt-0 flex justify-around items-center sm:flex-col-reverse sm:text-center">
        <div className="mt-12">
          <NewsCards articles={NewsArticles} ActiveArticle={ActiveArticle} />
        </div>
        {/*style alanLogo */}
        <div className="flex justify-center w-screen gap-4 items-center h-48 bg-blue-700">
          <h1 className="text-white font-serif font-bold text-3xl">ALAN AI <br/> News Application</h1>
          <div className="w-40 h-36">
            <img
              src="Alanlogo.png"
              alt="Alan Logo"
              className="border-solid border-2 border-gray-800 rounded-2xl bg-orange-600"
            />
          </div>
        </div>
        {/* <NewsCards articles={NewsArticles}  /> */}
      </div>
    </div>
  );
};

export default App;

/* <div>
<div className={classes.logoContainer}>
  {NewsArticles.length ? (
    <div className={classes.infoContainer}>
      <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
      <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
    </div>
  ) : null}
  <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
</div>
<NewsCards articles={NewsArticles} activeArticle={ActiveArticle} />
<Modal isOpen={isOpen} setIsOpen={setIsOpen} />
{!NewsArticles.length ? (
  <div className={classes.footer}>
    <Typography variant="body1" component="h2">
      Created by
      <a className={classes.link} href="https://www.linkedin.com/in/adrian-hajdin/"> Adrian Hajdin</a> -
      <a className={classes.link} href="http://youtube.com/javascriptmastery"> JavaScript Mastery</a>
    </Typography>
    <img className={classes.image} src={logo} height="50px" alt="JSMastery logo" />
  </div>
) : null}
</div> */
