import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class MyAjaxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // this.fetchLoadPicData();
    this.jqueryLoadPicData();
  }

  componentWillUnmount() {
    //取消网络请求
  }

  //
  fetchLoadPicData() {
    fetch("http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result);
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  //
  jqueryLoadPicData(){
    const thisCurrentComponent = this;
    $.ajax({
      type:"get",
      url:"http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1",
      dataType:"json",
      data:{},
      success: function (result) {
        console.log('result', result.results);
        thisCurrentComponent.setState({
          isLoaded: true,
          items: result.results
        });
      },
      error: function (error) {
        thisCurrentComponent.setState({
          isLoaded: true,
          error: error
        });
      }
    });
  }

  handleScroll = (e) => {
    var point = { x: e.clientX, y: e.clientY };
    console.log(point);
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div
          className='div_border'
          style={{ overflow: 'scroll',height: '400px' }}
          onScroll={this.handleScroll}
        >
          {/* 在这里写注释 */}
          API:<a href='http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1'>http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1</a>
          <ul>
            {items.map(item => (
              <li key={item._id}>
                <img className='ajax_img' src={item.url} alt={item.url}/>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <MyAjaxComponent />,
  document.getElementById('ajax')
);
