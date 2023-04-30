import { style } from "@vanilla-extract/css";

const modalContainer = style({
    filter: 'blur(3px)',
    height: '100vh',
    width: '100vw',
}, 'modalContainer')


export const stylesCss = {
    modalContainer,
}