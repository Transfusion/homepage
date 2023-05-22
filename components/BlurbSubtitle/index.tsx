import styled, { StyledProps } from 'styled-components';

type BlurbSubTitleProps = StyledProps<{
    className?: string;
}>

export default styled.p.attrs((props: BlurbSubTitleProps) => ({
    // className: ['text-4xl', 'font-bold'],
    className: ['text-sm', 'md:text-base']
}))``;