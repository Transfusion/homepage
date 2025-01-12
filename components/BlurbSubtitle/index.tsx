import styled from 'styled-components';
import { cn } from '../../helpers/utils';

export default styled.p.attrs<{className?: string}>((props) => ({
    // className: ['text-4xl', 'font-bold'],
    className: cn(['text-sm', 'md:text-base'])
}))``;