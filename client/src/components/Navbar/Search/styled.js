import styled from 'styled-components'


export const SearchBox = styled.div`
  position: relative;
  z-index: 1;
  & svg {
    position: absolute;
    z-index: 2;
    color: rgba(0, 0, 0, 0.664);
    top: 0;
    margin-top: auto;
    margin-bottom: auto;
    left: 8px;
    bottom: 0;
    width: 14px;
    height: 14px;
    color: rgba(255, 255, 255, 0.8);
  }

  .searchInput {
    color: rgba(255, 255, 255, 0.8);
    width: 290px;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    padding-left: 32px;
    padding-right: 16px;
    border-radius: 5px;
    border: none;
    margin-right: 8px;
    transition: 0.3s;
    outline-offset: 0;
    outline: none;
    background: none;
    border: solid 1px #2a2b34;
  }
  .searchInput:focus {
    /* width: 410px; */
    outline-offset: 0;
    outline: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const SearchResults = styled.div`
  position: absolute;
  width: 460px;
  left: 0;
  top: 34px;
`

export const SearchResult = styled.div`
  padding: 10px 25px;
  background: #2a2b34;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  :hover {
    background: #1d1e26;
  }
`
