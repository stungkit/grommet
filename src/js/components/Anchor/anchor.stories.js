import React from 'react';
import { storiesOf } from '@storybook/react';

import { Add, Trash } from 'grommet-icons';

import { Anchor, Grommet } from '../';

const customTheme = {
  anchor: {
    color: 'red',
  },
};

storiesOf('Anchor', module)
  .add('Default', () => <Grommet><Anchor href='#'>Link</Anchor></Grommet>)
  .add('Icon', () => <Grommet><Anchor icon={<Add />} label='Add' href='#' /></Grommet>)
  .add('With Text', () => (
    <Grommet>
      This is a <Anchor label='link' href='#' /> with text.
    </Grommet>
  ))
  .add('Custom color', () => (
    <Grommet theme={customTheme}>
      <Anchor icon={<Trash />} label='Delete' href='#' />
    </Grommet>
  ));
