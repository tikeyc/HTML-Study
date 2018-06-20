import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, WingBlank, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './style.less';

export default class PageA extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    weights: PropTypes.array.isRequired,
  };

  handleBack = () => {
    // this.props.onChangePage(0);
   }

  handleNext = () => {
    // this.props.onChangePage(2);
  }

  render() {
    const { weights } = this.props;

    return (
      <div className='subject-open'>
        <div className="viewpoint-tag-list">
          {data.pageB.map((option, index) => (
            <div key={index} className="viewpoint-tag-item">
              <div>
                <img className='viewpoint-img' src={require('../../logo.svg')} alt=''/>
                <div className="viewpoint-label">{option.label}</div>
                <div className="viewpoint-num-label">(110)</div>
              </div>
              <WingBlank>
                <Flex wrap="wrap" className={`viewpoint-tags viewpoint-tags-w${[index]}`}>
                  {option.tags.map((tag, index) => (<span key={index}>{tag} (66)</span>))}
                </Flex>
              </WingBlank>
            </div>
          ))}
          <Flex className="actionbar" justify="between">
            <button onClick={this.handleBack}><Icon type="left" />返回</button>
            <button onClick={this.handleNext}>详情<Icon type="right" /></button>
          </Flex>
        </div>
      </div>
    );
  }
}


const data = {
  "pageB": [
                {
                    "label": "空间",
                    "tags": [
                        "大",
                        "宽敞"
                    ]
                },
                {
                    "label": "外观",
                    "tags": [
                        "不错",
                        "大方",
                        "大气",
                        "好看",
                        "新颖",
                        "时尚",
                        "漂亮",
                        "稳重",
                        "美观"
                    ]
                },
                {
                    "label": "配置",
                    "tags": [
                        "不错",
                        "低",
                        "好",
                        "高"
                    ]
                },
                {
                    "label": "动力",
                    "tags": [
                        "不错",
                        "充沛",
                        "好",
                        "强",
                        "强劲",
                        "很好",
                        "足"
                    ]
                },
                {
                    "label": "性价比",
                    "tags": [
                        "最高",
                        "高"
                    ]
                },
                {
                    "label": "价格",
                    "tags": [
                        "合适",
                        "实惠",
                        "适中"
                    ]
                },
                {
                    "label": "油耗",
                    "tags": [
                        "低"
                    ]
                },
                {
                    "label": "内饰",
                    "tags": [
                        "不错",
                        "好",
                        "好看",
                        "漂亮",
                        "精致"
                    ]
                },
                {
                    "label": "外形",
                    "tags": [
                        "好",
                        "好看"
                    ]
                },
                {
                    "label": "车型",
                    "tags": [
                        "不错",
                        "成熟"
                    ]
                },
                {
                    "label": "造型",
                    "tags": [
                        "不错",
                        "好看",
                        "新颖"
                    ]
                },
                {
                    "label": "品牌",
                    "tags": [
                        "不错",
                        "好"
                    ]
                },
                {
                    "label": "外观设计",
                    "tags": [
                        "好看",
                        "美观"
                    ]
                },
                {
                    "label": "安全性",
                    "tags": [
                        "高"
                    ]
                },
                {
                    "label": "性能",
                    "tags": [
                        "不错",
                        "很好"
                    ]
                },
                {
                    "label": "价位",
                    "tags": [
                        "合适"
                    ]
                },
                {
                    "label": "设计",
                    "tags": [
                        "不错",
                        "好看",
                        "美观"
                    ]
                },
                {
                    "label": "车身",
                    "tags": [
                        "稳定"
                    ]
                },
                {
                    "label": "稳定性",
                    "tags": [
                        "高"
                    ]
                },
                {
                    "label": "技术",
                    "tags": [
                        "成熟"
                    ]
                },
                {
                    "label": "口碑",
                    "tags": [
                        "好"
                    ]
                },
                {
                    "label": "科技含量",
                    "tags": [
                        "高"
                    ]
                },
                {
                    "label": "功能",
                    "tags": [
                        "全"
                    ]
                },
                {
                    "label": "做工",
                    "tags": [
                        "精细"
                    ]
                },
                {
                    "label": "外表",
                    "tags": [
                        "好看"
                    ]
                },
                {
                    "label": "价钱",
                    "tags": [
                        "合适"
                    ]
                },
                {
                    "label": "后备箱",
                    "tags": [
                        "大"
                    ]
                },
                {
                    "label": "档次",
                    "tags": [
                        "不错"
                    ]
                }
            ]
}
