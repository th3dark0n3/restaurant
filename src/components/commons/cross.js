import React from 'react';
import styled from 'styled-components';

const CrossContainer = styled.div`
    position: absolute;
    right: -50px;
    top: 20px;
    @media (max-width: 768px) {
        background-color: lightgray;
        padding: 6px;
        border-radius: 30px;
        right: 5px;
    }
`;

const CrossSvg = styled.svg`
    width: 20px;
`;

const StyledEsc = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

export default ({ onClick }) => (
    <CrossContainer onClick={onClick}>
        <CrossSvg viewBox="0 0 512 512">
            <g>
                <g>
                    <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249    C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306    C514.019,27.23,514.019,14.135,505.943,6.058z" />
                </g>
            </g>
            <g>
                <g>
                    <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636    c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z" />
                </g>
            </g>
        </CrossSvg>
        <StyledEsc>
            {'Esc'}
        </StyledEsc>
    </CrossContainer>
);
