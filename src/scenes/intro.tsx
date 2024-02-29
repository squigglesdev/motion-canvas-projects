import { Img, Rect } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, sequence, waitFor} from '@motion-canvas/core/lib/flow';
import { easeInBack, easeInElastic, easeInOutBack, easeInOutCirc, easeOutBack, spring } from '@motion-canvas/core/lib/tweening';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  // The four boxes / pixels
  const box1 = createRef<Rect>();
  const box2 = createRef<Rect>();
  const box3 = createRef<Rect>();
  const box4 = createRef<Rect>();

  view.add(
    <>
      // Leftmost box
      <Rect
        ref={box1}
        width={100}
        height={100}
        fill={'#fff'}
        x={-150}
        y={50}
        scale={0}
      />,
      // Shared centre
      <Rect
        ref={box2}
        width={100}
        height={100}
        fill={'#fff'}
        x={-50}
        y={-50}
        scale={0}
      />,
      // Shared centre
      <Rect
        ref={box3}
        width={100}
        height={100}
        fill={'#fff'}
        x={50}
        y={50}
        scale={0}
      />,
      // Rightmost box
      <Rect
        ref={box4}
        width={100}
        height={100}
        fill={'#fff'}
        x={150}
        y={-50}
        scale={0}
      />      
    </>
  );

  yield sequence(0.2, 
    box1().scale(1,0.5,easeOutBack),
    box2().scale(1,0.5,easeOutBack),
    box3().scale(1,0.5,easeOutBack),
    box4().scale(1,0.5,easeOutBack),
  )
  yield* waitFor(0.5)
  yield* all(
    box1().position.y(-50, 0.5, easeInOutCirc),
    box2().position.y(50, 0.5, easeInOutCirc),
    box3().position.y(-50, 0.5, easeInOutCirc),
    box4().position.y(50, 0.5, easeInOutCirc),  
  )
  yield* all(
    box1().position.y(50, 0.5, easeInOutCirc),
    box2().position.y(-50, 0.5, easeInOutCirc),
    box3().position.y(50, 0.5, easeInOutCirc),
    box4().position.y(-50, 0.5, easeInOutCirc),  
  )
  yield* waitFor(0.5)
  yield* all(
    box1().size([0,0], 0.5, easeInBack),
    box2().size([0,0], 0.5, easeInBack),
    box3().size([0,0], 0.5, easeInBack),
    box4().size([0,0], 0.5, easeInBack),
    box1().position([0,0],0.5, easeInBack),
    box2().position([0,0],0.5, easeInBack),
    box3().position([0,0],0.5, easeInBack),
    box4().position([0,0],0.5, easeInBack),
  );
});