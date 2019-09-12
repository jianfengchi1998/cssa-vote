import React, { useState } from "react";
import { Card, Icon } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

export default function SingerCard({
  photo,
  name,
  description,
  cardStyle,
  isLike,
  songName,
  voteClick,
  iconType
}) {
  return (
    <Card
      style={cardStyle}
      cover={<img style={{ height: "50%" }} alt="geshou" src={photo} />}
    >
      <Meta title={name} description={description} />
      <p>{songName}</p>
      <Icon
        style={{ fontSize: "50px", color: "red" }}
        theme={isLike ? "filled" : "outlined"}
        onClick={voteClick}
        type={iconType}
      />
    </Card>
  );
}

SingerCard.defaultProps = {
  name: "村花",
  photo: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  description: "巴村 村花",
  songName: "山歌",
  cardStyle: { width: "100%", textAlign: "center" },
  isLike: false
};
  