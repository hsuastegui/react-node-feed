import React from 'react';
import moment from 'moment';

const Tweet = ({tweet}) => {
  const cleanText = () => {
    return tweet.text.replace(/https:\/\/t\.co\/([a-zA-Z0-9_]{10})/g, '');
  };
  const hasSymbol = () => {
    return tweet.text.search(/\$[a-zA-Z]+/g);
  };
  // const getImage = () => {
  //   if(tweet.hasOwnProperty('entities') && tweet.entities.hasOwnProperty('media')){
  //     return <img src={tweet.entities.media[0].media_url} alt="tweet" />
  //   }  else if(tweet.hasOwnProperty('extended_entities') && tweet.extended_entities.hasOwnProperty('media')){
  //     return <img src={tweet.extended_entities.media[0].media_url} alt="tweet" />
  //   }
  //   return null;
  // };
  const getUrl = () => {
    if(tweet.hasOwnProperty('entities') && tweet.entities.hasOwnProperty('urls') && tweet.entities.urls[0]){
      return tweet.entities.urls[0].expanded_url;
    }
    return '#';
  };
  const getClassName = () => {
    let name = 'Tweet_item ';
    if(hasSymbol() > -1){
      name += 'Tweet_item-info';
    }else if(tweet.retweet_count > 5 || tweet.favorite_count > 5){
      name += 'Tweet_item-warning';
    }
    return name;
  };
  return(
    <article className={getClassName()}>
      <div className="row">
        <div className="col-md-12">
          <h2 className="Tweet_text"><a href={getUrl()} target="_blank">{cleanText()}</a></h2>
        </div>
        <div className="col-md-6">
          <small className="Tweet_date">{moment(tweet.created_at, 'ddd MMM DD HH:mm:ss Z YYYY').format('LLLL')}</small>
        </div>
        <div className="Tweet_details col-md-6 text-right">
          <a href={tweet.user.url} target="_blank"><strong>{tweet.user.name}</strong></a>
          <span><i className="fa fa-retweet" aria-hidden="true"></i> {tweet.retweet_count}</span>
          <span><i className="fa fa-heart" aria-hidden="true"></i> {tweet.favorite_count}</span>
        </div>
      </div>
    </article>
  );
};

export default Tweet;
