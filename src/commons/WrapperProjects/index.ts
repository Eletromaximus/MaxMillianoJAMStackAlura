import styled from 'styled-components'

// interface Props {
//   LeftSide: any;
//   CentralSide: any;
//   RightSide: any;
// }

export const WrapperProjects: any = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  height: 500px;
  margin-top: 28px;
  border-radius: 10px;
  justify-content: space-between;
  border: 1px solid;

`

WrapperProjects.LeftSide = styled.div`
  
  padding: 0;
  margin: 0;
  order: 1; 
`

WrapperProjects.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 2; 
`

WrapperProjects.RightSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3; 
`