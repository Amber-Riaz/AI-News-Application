import React, {useState, useEffect, createRef } from "react";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const NewsCard = ({
  article: { desciption, publishedAt, source, title, url, urlToImage },
  i,
  ActiveArticle
}) => {
  // const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(()=>{
    setElRefs((refs)=> Array(20).fill().map((_, j) => refs[j] || createRef()));

  },[]);

  useEffect(() => {
    if (i === ActiveArticle && elRefs[ActiveArticle]) {
      scrollToRef(elRefs[ActiveArticle]);
    }
  }, [i, ActiveArticle, elRefs]);

  return (
    <div>
    <Card ref={elRefs[i]} className={ActiveArticle===i?"border-b-4 border-solid border-[#22289a]":"flex flex-col justify-center border-b-4 border-solid border-white "} >
    {/* <Card className="flex flex-col justify-center border-b-2 border-solid border-white" > */}
     {/* <Card ref={elRefs[i]} className={ActiveArticle===i?classes.activeCard: classes.Card} >  */}

      <CardActionArea href={url} target="_blank" >
        <CardMedia className="h-60 " image={urlToImage || "public/lightpuzzle.jpg"} />
        <div className="flex justify-between m-6">
          <Typography variant="body2" color="textsecondary" component="h2">
            {new Date(publishedAt).toDateString()}{" "}
          </Typography>
          <Typography variant="body2" color="textsecondary" component="h2">
            {source.name}{" "}
          </Typography>
        </div>
        <Typography classname="pt-0 pr-4" gutterBottom variant="h5">
          {title}{" "}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {desciption}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex justify-between pt-0 px-4 pb-2 ">
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
    </div>
  );
};

export default NewsCard;
