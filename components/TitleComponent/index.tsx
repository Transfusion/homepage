// import { PropsWithChildren } from 'react';
import styled from 'styled-components';

// export default function TitleComponent() {
//     return (
//         <div class="" />
//     )
// }

// export default (props: PropsWithChildren<any>) => {
//     const { className } = props;
//     return <h1  {...props}></h1>
// } styled.h1`
//     color: var(--colors-primary);
// `;

export default styled.h1.attrs({
    className: 'text-5xl font-bold',
})`
    color: var(--colors-primary)
`;