import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

const Block = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.color};
    margin: 10px;
`;

const blockItems = [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
    { id: 3, color: "green" },
    { id: 4, color: "yellow" },
];

function Blocks(props) {
    return (
        <Wrapper>
            {blockItems.map((item) => (
                <Block key={item.id} color={item.color}>
                    {item.id}
                </Block>
            ))}
        </Wrapper>
    );
}

export default Blocks;
