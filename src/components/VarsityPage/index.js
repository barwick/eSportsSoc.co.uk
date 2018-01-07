import React from 'react';
import styled from 'styled-components';

import { media } from 'src/style';

import PlatformGamingIcon from 'static/varsity/PlatformGaming.png';
import CouchCastersIcon from 'static/varsity/CouchCasters.png';
import DinoPCIcon from 'static/varsity/DinoPC.png';
import NobleChairsIcon from 'static/varsity/NobleChairs.png';

import VarsitySplash from 'static/varsity/splash.png';
import VarsityTimeline from 'static/varsity/timeline.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`;

const Title = styled.div`
  font-family: OctinCollege;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  ${media.desktop`
    font-size: 50px;
  `};
`;

const Splash = styled.img`
  margin: 50px 10px 10px 10px;
  width: 90%;
  ${media.desktop`
    width: 300px;
  `};
`;

const Timeline = styled.img`
  margin: 10px 10px 30px 0;
  height: 75%;
  ${media.desktop`
    max-width: 600px;
  `};
`;

const Super = styled.sup`
  font-size: 10px;
  ${media.desktop`
  font-size: 20px;
`};
`;

const Content = styled.div`width: 100%;`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  padding: 50px;
  max-width: 1400px;
  margin: 0 auto;
`;

const TwitchFrame = styled.iframe`
  height: 100%;
  width: 100%;
  display: none;
  ${media.desktop`
    display: initial;
  `};
`;

const Sponsors = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SponsorTitle = styled.p`margin-right: 5px;`;

const SponsorText = styled.p`
  font-size: 10px;
  margin-right: -5px;
  margin-left: 10px;
`;

const Icon = styled.a`
  width: 30px;
  height: 30px;
  margin: 10px;
  background-image: url(${props => props.src});
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
`;

export default () => {
  return (
    <div>
      <Container>
        <Sponsors>
          <SponsorTitle>Sponsored by...</SponsorTitle>
          <SponsorText>Platform Gaming</SponsorText>
          <Icon
            src={PlatformGamingIcon}
            title="Platform Gaming"
            href="https://www.facebook.com/PlayWatchBe/"
          />
          <SponsorText>Couch Casters</SponsorText>
          <Icon
            src={CouchCastersIcon}
            title="Couch Casters"
            href="https://twitter.com/couchcasters"
          />
          <SponsorText>Dino PC</SponsorText>
          <Icon src={DinoPCIcon} title="Dino PC" href="https://www.dinopc.com/" />
          <SponsorText>Noble Chairs</SponsorText>
          <Icon src={NobleChairsIcon} title="Noble Chairs" href="https://www.noblechairs.com/" />
        </Sponsors>
        <Content>
          <Splash src={VarsitySplash} />
          <Title>
            <p>
              Sat 27<Super>th</Super> January<br />
              10:00 - 19:30<br />
              2<Super>nd</Super> floor, Beit Quad<br />
              SW7 2BB
            </p>
          </Title>
          <Title>Live</Title>
          <BottomContainer>
            <Timeline src={VarsityTimeline} />
            <TwitchFrame src="http://player.twitch.tv/?channel=iclesports" allowfullscreen />
          </BottomContainer>
        </Content>
      </Container>
    </div>
  );
};
