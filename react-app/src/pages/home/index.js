import React from 'react';
import NavigationBar from '../../components/navigationBar/navigationBar';
import gerenshezhi from '../../images/gerenshezhi.png'
import quyuanniu from '../../images/quyuanniu.png'
import './index.css';
import { Carousel} from 'antd';

export default class HomePage extends React.Component {

  userSettingClick = () => {
    console.log('userSettingClick');
    this.props.history.push({pathname:'/pageA'});
  }

  regionClick = () => {
    console.log('regionClick');
  }

  render() {
    return (
      <div className='home-contanier'>
        <NavigationBar
          title='2018年5月'
          leftImg={gerenshezhi}
          rightImg={quyuanniu}
          rightText={'全国'}
          leftImgClick={this.userSettingClick}
          rightImgClick={this.regionClick}
        />
        <ImageSwiper carModelList={carModelDatas.data}/>
      </div>
    );
  }
}

class ImageSwiper extends React.Component {

  onChange = (a, b, c) => {
    console.log(a, b, c);
  }

  switchLeftOnClick = () => {
    console.log('switchLeftOnClick');
    this.slider.prev();
  }

  switchRightOnClick = () => {
    console.log('switchRightOnClick');
    this.slider.next();
  }

  render() {
    return(
      <div className='imageSwiper-contanier'>
        <div className='imageSwiper-button' onClick={this.switchLeftOnClick}><img src={require('../../images/zuoyi.png')} alt=''/></div>
        <footer className='footer-imageSwiper'>
          <Carousel
            afterChange={this.onChange}
            autoplay={false} dots={false}
            ref={slider => (this.slider = slider)}
            >
            {
              this.props.carModelList.map((carModel, index) => (
                <div className='home-carousel-item-div' key={index}>
                  <img src={carModel.icon1} alt=''/>
                </div>
              ))
            }
          </Carousel>
        </footer>
        <div className='imageSwiper-button' onClick={this.switchRightOnClick}><img src={require('../../images/youyi.png')} alt=''/></div>
      </div>
    )
  }
}

const carModelDatas = {
  "success": true,
  "data": [
    {
      "carModelId": "Total",
      "carModelName": "合计",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/Total.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/Total.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/Total.png"
    },
    {
      "carModelId": "CMY-8",
      "carModelName": "第八代凯美瑞",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/CMY-8.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/CMY-8.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/CMY-8.png"
    },
    {
      "carModelId": "CMY8G",
      "carModelName": "第八代凯美瑞汽油版",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/CMY8G.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/CMY8G.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/CMY8G.png"
    },
    {
      "carModelId": "CMY8H",
      "carModelName": "第八代凯美瑞混动版",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/CMY8H.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/CMY8H.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/CMY8H.png"
    },
    {
      "carModelId": "HLD-T",
      "carModelName": "全新汉兰达",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/HLD-T-1.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/HLD-T.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/HLD-T.png"
    },
    {
      "carModelId": "LEVIN",
      "carModelName": "雷凌",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/LEVIN.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/LEVIN.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/LEVIN.png"
    },
    {
      "carModelId": "LEVHV",
      "carModelName": "雷凌双擎",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/LEVHV.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/LEVHV.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/LEVHV.png"
    },
    {
      "carModelId": "L-YRS",
      "carModelName": "致享",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/L-YRS.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/L-YRS.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/L-YRS.png"
    },
    {
      "carModelId": "YRS-L",
      "carModelName": "致炫",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/YRS-L.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/YRS-L.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/YRS-L.png"
    },
    {
      "carModelId": "CMY-7",
      "carModelName": "第7代凯美瑞",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/CMY-7-1.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/CMY-7-1.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/CMY-7-1.png"
    },
    {
      "carModelId": "CMYHV",
      "carModelName": "凯美瑞混合动力",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/CMYHV.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/CMYHV.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/CMYHV.png"
    },
    {
      "carModelId": "E-ZHI",
      "carModelName": "逸致",
      "carModelEName": "",
      "icon1": "http://smisapp.gtmc.com.cn/resources/images/carmodel/a/E-ZHI.png",
      "icon2": "http://smisapp.gtmc.com.cn/resources/images/carmodel/b/E-ZHI.png",
      "icon3": "http://smisapp.gtmc.com.cn/resources/images/carmodel/c/E-ZHI.png"
    }
  ]
};
