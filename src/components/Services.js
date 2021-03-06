import React, { Component } from 'react'
import styled from 'styled-components'
import globe from '../images/earth-globe.png'
import mortarboard from '../images/mortarboard.png'
import book from '../images/book.png'

const Section = styled.section`
  width: 100vw;
  padding: 0 2rem;
  min-height: 400px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #efefef;

  @media (max-width: 767px) {
		flex-direction: column;
	}
`

const Header = styled.h1`
  margin-top: 0.4em;
  width: 100%;
  height: 100%;
  text-align: center;
`

const Body = styled.ul`
  font-size: 1.2rem;
  margin-top: 0;
  @media (max-width: 991px) {
    font-size: 1rem;
	}
`

const Image = styled.img`
  width: 50%;
  height: 50%;
  margin: 0;
  padding: 1em;
`

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: white;
  padding: 1em;
  margin: 2rem 1em;
  box-shadow: 7px 10px 13px 0px rgba(214,214,214,1);

  @media (max-width: 767px) {
    margin: 1rem 0;
	}
`

export default class Services extends Component {
  render() {
    return (
      <Section>
        <Service>
          <Image src={book} />
          <Header>我们做什么</Header>
          <Body>
            <li>做好准备升学院的心态</li>
            <li>二十一世纪的工作生涯</li>
            <li>准备有原因和目标用途的生活方式</li>
          </Body>
        </Service>
        <Service>
           <Image src={mortarboard} />     
           <Header>为什么我们做这件事</Header>
           <Body>
             <li>机会 / 选择 </li>
             <li>增加更高的期望</li>
             <li>社会的影响</li>
          </Body>
        </Service>
        <Service>
          <Image src={globe} />
          <Header>我们如何做到这一点</Header>
          <Body>
             <li>加强整个人</li>
             <li>培育创业心态</li>
             <li>在全球范围内的整体思考</li>
          </Body>
        </Service>
      </Section>
    )
  }
}
