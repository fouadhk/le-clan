import React from 'react'
import styled from 'styled-components'
import { Col, Layout, Icon } from 'antd';

class Card extends React.Component {
  constructor(props) {
    console.log("RENDER")
    super(props)
  }
  _convertToRgba(hex) {
    /**
      Fonction qui va me permettre de récupérer une couleur au format hexagonal et la convertir en rbga.
    */
    var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.1)';
        }
        throw new Error('Bad Hex');
  }

  render() {
    return (
      <CardContainer>
        <Col span={7}>
          <Figure style={{background:this._convertToRgba(this.props.color)}}>
            <Icon type={this.props.type} theme="outlined" style={{color: this.props.color}}/>
          </Figure>
        </Col>
        <Col span={17}>
          <Price>{this.props.price}€</Price>
          <Text>{this.props.text}</Text>
        </Col>
      </CardContainer>
    )
  }
}

const CardContainer = styled.div`
  min-width: 180px;
  height: 100px;
  padding: 10px;
  display: inline-block;
  background: #FFFFFF;
  border: 1px solid rgba(192, 196, 207, 0.3);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  margin-top: 22px;
  margin-bottom: 22px;
  margin-right: 18px;
  & > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Figure = styled.figure`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Price = styled.h4`
  line-height: 100px;
  font-size: 20px;
  line-height: 32px;
  color: #171725;
  margin-bottom: 0;
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
`;

export default Card
