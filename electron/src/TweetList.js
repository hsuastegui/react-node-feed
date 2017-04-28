import React, { Component } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Tweet from "./Tweet";

class TweetList extends Component {
  static defaultProps = {
    tweets: []
  };
  renderTweets() {
    return this.props.tweets.map(tweet => {
      return <Tweet key={tweet.id} tweet={tweet} />;
    });
  }
  render() {
    return (
      <div>
        <section className="Tweet_group">
          <CSSTransitionGroup
            transitionName={{
              enter: "slideInLeft",
              enterActive: "animated",
              leave: "slideOutRight",
              leaveActive: "animated",
              appear: "slideInLeft",
              appearActive: "animated"
            }}
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={false}
          >
            {this.renderTweets()}
          </CSSTransitionGroup>
        </section>
        {this.props.tweets.length
          ? null
          : <div className="Loading">
              <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true" />
            </div>}
      </div>
    );
  }
}

export default TweetList;
