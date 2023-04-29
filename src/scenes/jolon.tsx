import { Img } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {waitFor} from '@motion-canvas/core/lib/flow';
import { createRef } from '@motion-canvas/core/lib/utils';
import jSVG from "../../media/Images/j.svg"
export default makeScene2D(function* (view) {
  // Create your animations here
  const J = createRef<Img>();

  view.add(<Img ref={J} src={jSVG} />);


  yield* waitFor(5);
});
