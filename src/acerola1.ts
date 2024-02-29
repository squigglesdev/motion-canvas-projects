import {makeProject} from '@motion-canvas/core';

import intro from './scenes/intro?scene';
import acerolaInfo from 'scenes/acerolaInfo?scene';

export default makeProject({
  scenes: [intro, acerolaInfo],
});
