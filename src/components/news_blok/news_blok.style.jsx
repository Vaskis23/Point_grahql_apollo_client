import styled from "styled-components";


export const NewsWrapper = styled.div`
    display: flex;
    text-aling: center;
    margin-bottom: 25px;
    img {
        width: 160px;
        height: 84px;
    }
    `;


export const NewsTitle = styled.h1`
    font-weight: bold;
    display: block;
    font-size: 17px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin-bottom: -10px;
    color: rgb(51, 121, 191);
    `
    
export const NewsDescription = styled.div`
    font-size: 15px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 4px;
`;

export const WrapperRightContent = styled.div`
margin-left: 20px;
vertical-align:100px;
    line-height: 1.2;
    margin: 0px 19px;
    margin-top: -20px;`;

export const NewsFooter = styled.div`
margin: 0px;
img {
    height: 17px;
    width: 17px;
    margin-left: 6px;
    margin-bottom: -4px;
};`
;



export const TimeBlock = styled.span`
font-size: 14px;`;

export const CommentBlock = styled.span`
font-size: 14px;
margin-left: 2px;`;







// export const NewsFooter = styled.span`
// margin: 0px;`;

// export const time = styled.span`
// margin-left: 20px;`;

// export const news_footer = styled.div`
// display: inline-flex;`;