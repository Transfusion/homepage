import styled, { StyledProps } from 'styled-components';

type BlurbTitleProps = StyledProps<{
    className?: string;
}>

export default styled.h1.attrs((props: BlurbTitleProps) => ({
    className: ['text-4xl', 'font-bold'],
}))`
    color: var(--colors-primary)
`;