import styled from 'styled-components';
import { cn } from '../../helpers/utils';

export default styled.h1.attrs<{ className?: string }>((props) => ({
    className: cn(['text-4xl', 'font-bold']),
}))`
    color: var(--colors-primary)
`;