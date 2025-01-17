import styled from 'styled-components';
// import font from '../../public/FontsFree'

const HomeDisplay = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
/* margin-left: 5%;
margin-right: 5%; */
margin-top: 40px;
background-color: #FFFCF9;

/* div {
  float: left;
} */

.welcome-message p {
  font-size: 24px;
  margin-right: 5px;
  font-family: 'SFPro Display', sans-serif;
}

.search-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
}

.load-more {
  border: none;
  background-color: #FFFCF9;
  font-size: 20px;
  font-weight: bold;
  color: #4ABDF1;
  margin-bottom: 80px;
}

.results {
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.message {
  color: #54565A;
}

.username {
  color: #FF6978;
}

.welcome-message {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}

/* .search-results {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
} */


`;

export default HomeDisplay;
