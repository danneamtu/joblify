import styled from 'styled-components'

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`
export const Li = styled.li`
  list-style-type: none;
  margin-left: 2px;
  margin-right: 2px;
  & a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    display: inline-block;
    width: 38px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 14px;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.7);
    background: ${(props) => (props.pageCurrent && props.pageCurrent === props.page ? '#1d1e26;' : 'none')};
  }
  & a:hover {
    background: #1d1e26;
  }
`
