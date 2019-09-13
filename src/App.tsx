import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { Avatar, Form, Button, List, Input, Tag, Row, Col, Layout, Icon } from 'antd';
import Card from './Components/Card';
import Comments from './Components/Comment'
import "antd/dist/antd.css";
import "./index.css";
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
    <Layout>
      <Sider className="bg-white"></Sider>
      <Layout>
        <Header className="bg-white"></Header>


        <Content className="content">

          <div className="container">
            <a className="fil-ariane">Avantages</a>
            <Row>
              <Col span={8}>
                <Title>Subvention Sports</Title>
              </Col>
              <Col span={8} offset={8}>
                <Button className="btn-edit" type="primary"><Icon type="edit" />Éditer</Button>
              </Col>
            </Row>


            <article className="article">
              <Row gutter={16}>
                <Col>
                  <ArticleMedia className="article__Media">
                    <img src="http://placehold.it/128x128"/>
                  </ArticleMedia>
                </Col>
                <Col >
                  <Row>
                    <Tag color="magenta">Subvention</Tag>
                    <Icon type="calendar" style={{color: "#FFD666"}}/><TextGrey className="txt-grey">Inscriptions: 01/01/2019 - 27/12/2019</TextGrey>
                    <Icon type="clock-circle" style={{color: "#079CEE"}}/><TextGrey className="txt-grey">165 jours restants avant la fermeture</TextGrey>
                  </Row>
                  <Row>
                      <ArticleParagraph>Remboursement des activités sportives des salariés à hauteur de 150€ sur présentation de factures nominatives de licence sportive, d’adhésion à un club de sport ou d'achat de billetterie pour des événements sportifs.</ArticleParagraph>
                  </Row>
                </Col>
              </Row>
            </article>

            <div className="cards-list">
              <Card type="user" color="#3DD598" price="150" text="Par salarié" />
              <Card type="heart" color="#F5222D" price="100" text="Par conjoint" />
              <Card type="user-add" color="#EB2F96" price="100" text="Par enfant" />
              <Card type="usergroup-add" color="#722ED1" price="214" text="Participants" />
              <Card type="euro" color="#FA8C16" price="16 124" text="Consommés" />
            </div>

            <Row>
              <div>
                <h3>Commentaires</h3>
                <Comments/>
              </div>
            </Row>

          </div>
        </Content>
      </Layout>
    </Layout>

    </div>
  );
}

const Title = styled.h1`
  font-size: 30px;
  line-height: 30px;
`

const ArticleMedia = styled.div`
  width: fit-content;
  border-radius: 4px;
  overflow: hidden;
`

const ArticleParagraph = styled.p`
  color: #000;
  margin-top: 22px;
`

const TextGrey = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: #8C8C8C;
  margin: 0 20px 0 4px;
`

export default App;
