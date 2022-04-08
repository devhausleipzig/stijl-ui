import { styled } from '../../stitches.config'

export const Input = styled('input', {
  all: 'unset',
  $$shadowColor: '$colors$gray500',
  boxShadow: '0 0 0 1px $$shadowColor',
  backgroundColor: '$gray400',
  fontSize: '13px',
  paddingX: '15px',
  paddingY: '10px',
  '&:hover': {
    backgroundColor: '$gray500',
  },
})
