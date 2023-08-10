import { styled } from '@stitches/react';

const Tag = styled('div', {
  display: 'inline-block',
  padding: '0.25rem 0.5rem',
  borderRadius: '1rem',
  backgroundColor: 'hsl(0, 0%, 90%)',
  color: 'hsl(0, 0%, 20%)',
  fontSize: '0.75rem',
  fontWeight: '500',
  lineHeight: '1',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  '&:not(:last-child)': {
    marginRight: '0.5rem',
  },
  variants: {
    color: {
      yellow: {
        backgroundColor: '  rgba(234,179,8, 0.5)',
        color: '#854d0e',
      },
      green: {
        backgroundColor: 'rgba(34,197,94,0.5)',
        color: '#166534',
      },
    },
  },
});

export default Tag;
