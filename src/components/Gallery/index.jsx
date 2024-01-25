import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import accommodations from "../../data/accommodations.json";

const GalleryContainer = styled.div`
  width: 86%;
  margin-left: auto;
  margin-right: auto;
  height: 829px;
  background-color: #f6f6f6;
  border-radius: 25px;
  padding: 56px 50px 43px 50px;
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  box-sizing: border-box;
  overflow: auto;
`;

// Thumb défini en div pour le moment. Sera un Link plus tard
const Thumb = styled.div`
height: 340px;
// width: 340px;
flex-shrink: 0px;
border-radius: 10px;
// background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
background: linear-gradient(180deg, rgba(255, 96, 96, 1) 0%, rgba(0, 0, 0, 0.50) 100%);
background-size: cover;
padding: 20px;
display: flex;
justify-content: flex-start;
align-items; flex_end;
box-sizing: border-box;
position: relative;
`;

const ThumbTitle = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
  text-align: left;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

function Gallery() {
  return (
    <GalleryContainer>
      {accommodations.map((accommodation) => (
        <Thumb key={accommodation.id} backgroundImage={accommodation.cover}>
          <ThumbTitle>{accommodation.title}</ThumbTitle>
        </Thumb>
      ))}
    </GalleryContainer>
  );
}

export default Gallery;
