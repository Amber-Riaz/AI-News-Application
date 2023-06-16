import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow } from "@mui/material";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, ActiveArticle }) => {
  if (!articles.length) {
    return (
      <Grow in className="flex justify-center items-center mx-auto">
        <Grid
          className="pt-0  bg-green-400 w-full mx-auto"
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="flex mx-auto flex-col items-center"
            >
              <div className="flex mx-auto justify-between  w-80 rounded-2xl h-80 border-gray-700 border-2  bg-[infoCards.color]">
                <div
                  className="flex flex-col justify-between bg-[infoCard.color] items-center w-full h-[45%] text-black "
                  // style={{ backgroundColor: infoCards.color }}
                >
                  <h2 className="p-2">{infoCard.title}</h2>
                  {infoCard.info ? (
                    <h1 className="p-2">
                      <strong>{infoCard.title.split(" ")[2]}:</strong>
                      <br />
                      {infoCard.info}
                    </h1>
                  ) : null}
                  <h6 className="p-2">
                    Try saying:
                    <br /> <i>{infoCard.text}</i>
                  </h6>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    // <div className=' bg-slate-300 h-10' >
    <Grow in>
      <Grid
        className="pt-0 pr-2 w-full m-0"
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className="flex">
            <NewsCard article={article} ActiveArticle={ActiveArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
    // </div>
    // <div card className="flex flex-col justify-center items-centre w-full h-12 p-3 border-8 bg-white "></div>
    // <div infocard className="flex flex-col items-center "></div>
  );
};

export default NewsCards;
