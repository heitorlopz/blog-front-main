import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
  /* display: flex;
  flex-direction: row; */

  h3 {
    margin-bottom: 20px;
  }
  span {
    font-size: 14px;
  }

  input {
    width: 100%;
    max-width: 1120px;
    height: 45px;
    left: 722px;
    top: 91px;
    margin: 8px 6px 8px 0px;
    padding: 8px 16px;
    border: 1px solid #e1e8ed;
    box-sizing: border-box;
    border-radius: 2px;
  }

  textarea {
    width: 100%;
    max-width: 1120px;
    height: 100px;
    left: 722px;
    top: 100px;
    margin: 8px 6px 8px 0px;
    padding: 8px 16px;
  }

  select {
    width: 100%;
    max-width: 1120px;
    height: 45px;
    left: 722px;
    top: 91px;
    margin: 8px 6px 8px 0px;
    padding: 8px 16px;
    border: 1px solid #e1e8ed;
    box-sizing: border-box;
    border-radius: 2px;
  }

  button {
    width: 191px;
    height: 45px;
    margin: 8px 6px 8px 0px;
    border: 1px solid #e1e8ed;
    box-sizing: border-box;
    border-radius: 2px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  .submitButton {
    background: #1f922a;
    color: #ffffff;
  }

  .submitButton:hover {
    opacity: 0.2;
  }

  .cancelButton {
    background: #c4c4c4;
    color: #000;
  }

  .cancelButton:hover {
    opacity: 0.2;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
