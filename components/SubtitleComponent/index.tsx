import styled, { StyledProps } from 'styled-components';

type SubtitleComponentProps = StyledProps<{
    className?: string;
}>

export default styled.h1.attrs((props: SubtitleComponentProps) => ({
    className: ['text-xl', 'font-normal'],
}))`
    color: var(--colors-primary)
`;