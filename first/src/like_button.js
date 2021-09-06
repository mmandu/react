'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );

    // JSX 사용하기
    //   npm init -y 
    //   npm install babel-cli@6 babel-preset-react-app@3
    //   npx babel --watch src --out-dir . --presets react-app/prod
    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);