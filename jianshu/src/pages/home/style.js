import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  height: 100%;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  height: 32px;
  background: #f7f7f7;
  color: #000;
  line-height: 32px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  float: left;
  margin-right: 20px;
  padding-right: 10px;
  margin-bottom: 10px;
  .topic-img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const TopicItemMore = styled.div`
  height: 32px;
  color: #666;
  line-height: 32px;
  font-size: 12px;
  float: left;
  margin-right: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
  height: 100%;
`;

export const ListItem = styled.div`
  width: 100%;
  height: 136px;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .img {
    float: right;
    width: 150px;
    height: 100px;
    background-color: rgb(241, 243, 244);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 4px;
    margin-left: 15px;
    cursor: pointer;
  }
`;

export const ListInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: block;
  margin: 20px 0;
  .title {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: #333;
    line-height: 24px;
  }
  .desc {
    margin-top: 10px;
    color: #999;
    font-size: 13px;
    line-height: 24px;
  }
  
`;

export const RecommendWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  height: 230px;
`;

export const RecommendItem = styled.div`
  min-height: 50px;
  border-radius: 4px;
  margin-bottom: 6px;
  cursor: pointer;
  background-size: contain;
  box-sizing: border-box;
  .img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

export const LoadMore = styled.div`
  background: #a5a5a5;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  margin: 30px 0;
  border-radius: 20px;
  height: 40px;
  width: 100%auto;
  cursor: pointer;
`;

export const ScollViewTop = styled.div`
  width: 60px;
  height: 60px;
  right: 100px;
  bottom: 100px;
  background: #dcdcdc;
  text-align: center;
  position: fixed;
  line-height: 60px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 12px;
  color: #666;
`;
