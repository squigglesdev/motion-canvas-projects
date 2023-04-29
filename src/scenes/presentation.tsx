import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Txt} from '@motion-canvas/2d/lib/components';
import {beginSlide, createRef} from '@motion-canvas/core/lib/utils';
import {all, loop, waitFor} from '@motion-canvas/core/lib/flow';
import { cancel } from '@motion-canvas/core/lib/threading';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  view.add(<Txt ref={title} fill={"white"} fontFamily={"Jetbrains Mono"} fontWeight={400}/>);

  
  yield* beginSlide('first slide');
  const firstTask = yield loop(Infinity, () => all( 
    title().scale(2,1).to(1,1),
    title().rotation(20,1).to(-20,1),
    title().fontWeight(1000,1).to(400,1),
  ))
  yield* title().text('FIRST SLIDE', 0.6);

  
  yield* beginSlide('second slide');
  const secondTask = yield loop(Infinity, () => all( 
    title().scale(2,1).to(1,1),
    title().position.y(200,1).to(-200,1),
    title().fontWeight(1000,1).to(400,1),
  ))
  yield* all(
    title().text('SECOND SLIDE', 0.6),
    title().rotation(0,1)
    );
  cancel(firstTask);

  
  yield* beginSlide('last slide');
  yield* all(
    title().text('LAST SLIDE',0.6),
    title().position.y(0,1),
    title().scale(1,1),
    title().fontWeight(400,1),
    title().rotation(0,1)
    );
  cancel(secondTask);
});