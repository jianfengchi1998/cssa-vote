import { Row, Col } from "antd";
import React, { useState, Component } from "react";
import SingerCard from "./components/card";

export default function Screen() {
  // const [isLike, setLike] = useState(false);
  const displayVote = () => {
    //grab vote number from backend and display on card
  };
  const singers = [
    {
      name: "村花",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "巴村 村花",
      songName: "山歌",
      cardStyle: { width: "100%", textAlign: "center" },
      isLike: false
    },
    {
      name: "村花",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "巴村 村花",
      songName: "山歌",
      cardStyle: { width: "100%", textAlign: "center" },
      isLike: false
    },
    {
      name: "村花",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "巴村 村花",
      songName: "山歌",
      cardStyle: { width: "100%", textAlign: "center" },
      isLike: false
    },
    {
      name: "村花",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "巴村 村花",
      songName: "山歌",
      cardStyle: { width: "100%", textAlign: "center" },
      isLike: false
    },
    {
      name: "村花",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "巴村 村花",
      songName: "山歌",
      cardStyle: { width: "100%", textAlign: "center" },
      isLike: false
    },
    {
      name: "村花",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "巴村 村花",
      songName: "山歌",
      cardStyle: { width: "100%", textAlign: "center" },
      isLike: false
    },
    {
      name: "村花",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "巴村 村花",
      songName: "山歌",
      cardStyle: { width: "100%", textAlign: "center" },
      isLike: false
    },
    {
      name: "村花",
      photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description: "巴村 村花",
      songName: "山歌",
      cardStyle: { width: "100%", textAlign: "center" },
      isLike: false
    }
  ];
  return (
    //Here, you use map function to map each values into the props.
    /**
     * example
     * const singers = [
     * {name: cunhua, },
     * {name: cunhua, },
     * {name: cunhua, },
     * ]
     *
     * singers.map(singer =>{
     *     <SingerCard name=singer.name islike=singer.isLike  />
     * })
     *
     *
     */
    <div>
      <Row type="flex" gutter={100} justify="center">
        {singers.map(singer => (
          <Col span={5}>
            <SingerCard
              isLike={singer.isLike}
              voteClick={() => displayVote()}
              iconType="question-circle"
            ></SingerCard>
          </Col>
        ))}
      </Row>
    </div>
  );
}
