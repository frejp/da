import styled from 'styled-components';

export const PropertyTableWrapper = styled.div`
    border: 1px solid green;
}`;

export const PremisesWrapper = styled.div`
    display: flex;
}`;

export const Table = styled.table`
    text-align: left;
    padding: 10px;
}`;

export const TH = styled.th`
    text-align: left;
    padding: 10px;
    background-color: #4CAF50;
}`;

export const TD = styled.th`
    text-align: left;
    padding: 10px;
}`;

export const TR = styled.tr`
    text-align: left;
    padding: 10px;
    :nth-child(even) {
       background-color: #f2f2f2;
    }
}`;

export const BoxWrapper = styled.div`
    width: 700px;
    max-width: 700px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
}`;

export const SelectWrapper = styled.div`
    margin: 20px;
    width: 200px;
}`;
