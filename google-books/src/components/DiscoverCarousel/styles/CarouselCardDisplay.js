import styled from 'styled-components';

const CarouselCardDisplay = styled.div`

.book-card {
  width: 272px;
  height: 139px;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.blue {
  background-color: #00173D;
}

.purple {
  background-color: #451475;
}


.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
}

span {
  display: flex;
  flex-direction: row;
}

.stats {
  width: 10px;
  height: 10px;
  margin-right: 4px;
}

.card-info div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
}

.card-info p {
  color: white;
}

.book-title {
  font-size: 27px;
  font-family: 'Playfair Display', serif;
  /* font-weight: 700; */
}

.book-author {
  font-size: 14px;
  font-family:  'SFProDisplay', sans-serif;
  font-style: italic;
}

.book-length {
  font-size: 10px;
  font-family:  'SFProDisplay', sans-serif;
}

.book-cover {
  width: 73px;
  height: 109px;
}

`;

export default CarouselCardDisplay;