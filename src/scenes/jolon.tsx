import { Circle, Img, Spline, Txt, Node } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, sequence, waitFor, any } from '@motion-canvas/core/lib/flow';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { easeInOutBack, easeInOutCubic, easeInBack, easeOutQuint, easeInOutCirc, easeInOutQuint, easeInQuint, easeOutBack } from '@motion-canvas/core/lib/tweening';
import { createRef } from '@motion-canvas/core/lib/utils';
export default makeScene2D(function* (view) {
  const LIGHTPURPLE = "9000C3";
  const PURPLE  = "560075";
  const angle = createSignal(0);
  const progress = createSignal(0);
  const progress2 = createSignal(0);
  const bg = createRef<Circle>();
  const darkCircle = createRef<Circle>();
  const bigCircle = createRef<Circle>();
  const mask = createRef<Circle>();
  const mask2 = createRef<Circle>();
  const dot = createRef<Circle>();
  const dot2 = createRef<Circle>();
  const path = createRef<Spline>();
  const path2 = createRef<Spline>();
  const J = createRef<Img>();
  const portalO = createRef<Img>();
  const portalB = createRef<Img>();

  view.add(
    <Node scale={0.75}>
      <Circle
        ref={bg}
        size={492}
        fill={LIGHTPURPLE}
        scale={0}
      />

      <Circle 
        ref={bigCircle}
        size={492}
        stroke={LIGHTPURPLE}
        lineWidth={45}
        lineCap={'round'}
        endAngle={() => angle()}
        rotation={-90}
        opacity={0}
      />
      
      <Circle
        ref={dot}
        size={45}
        fill={LIGHTPURPLE}
        opacity={0}
      />
      <Circle
        ref={dot2}
        size={45}
        position={() => path().getPointAtPercentage(progress()).position}
        fill={LIGHTPURPLE}
        opacity={0}
      />
	<Circle
	  ref={darkCircle}
        fill={PURPLE}
        size={537}
        scale={0}
      />
      <Img
        ref={portalO}
        src={'../../media/OrangePortal.svg'}
        scale={0}
        x={900}
        y={550}
      />
      <Img
        ref={portalB}
        src={'../../media/BluePortal.svg'}
        scale={0}
        x={-900}
        y={-550}
      />
      <Node cache>
        <Circle
          ref={mask}
          size={14}
          position={[80, -116]}
          scale={0.1}
          fill={'#000'}
        />
        <Img
          ref={J}
          src={'../../media/J.svg'}
          scale={2}
          compositeOperation={'source-in'}
        />
      </Node>
      <Spline
        ref={path}
        stroke={'#fff'}
        points={[
          [350, -540],
          [500, -369],
          [800, 0],
          [900, 555],
        ]}
      />
      <Spline
        ref={path2}
        stroke={'#fff'}
        points={[
          [-900, -565],
          [-800, 0],
          [-387, 200],
          [80, -116],
        ]}
      />
    </Node>
  );
  yield* all(
    dot().opacity(1,0.5),
    dot().position.y(0,0).to(-286, .5),
  );
  yield* dot().position.y(-246, .2)
  bigCircle().opacity(1)
  yield* angle(360, 0.7, easeOutQuint)
  yield* waitFor(0.2);
  yield* bg().scale(1, 0.5);
  yield* portalO().scale(0.5, 0.5, easeOutBack)
  yield* portalB().scale(0.5, 0.5, easeOutBack)
  yield* all(
      progress(1, 3, easeInQuint),
      dot2().opacity(1, 0.5),
  );
  dot2().position(() => path2().getPointAtPercentage(progress2()).position) 
  yield* all(
      dot2().size(28, 3),
      progress2(1, 3, easeOutQuint),
      dot2().fill('#000', 1),
  );
  yield* any(
    mask().scale(45, 1, easeInOutCirc),
  );
  dot2().scale(0)
  yield* waitFor(0.5)
  yield* all(
    portalO().position([0,200],1),
    portalB().position([0,-200],1),
  );
  yield* J().scale(2.2, 0.5),
  yield* any(
    J().scale(0.9, 0.2),
    portalO().position([0,150],0.5),
    portalB().position([0,-150],0.5),
  );
  yield* all(
    darkCircle().scale(1, 0.2, easeOutQuint),
    J().scale(1, 0.1)
  );
  bigCircle().stroke(PURPLE)
  bg().scale(0)
  dot().fill(PURPLE)
  yield* waitFor(2);
  yield* all(
    mask().position([0,0]),
    mask().scale(25),
    J().rotation(30, 0.5),
    J().position.y(150, 0.7, easeInBack)
  );
  yield all(
    J().position([0,-150],0).to([0,150], 0.7, easeOutBack),
    darkCircle().scale(0, 0.5, easeInQuint),
    J().scale(0, 0.5, easeInQuint),
    portalO().scale(0, 0.5, easeInBack),
    portalB().scale(0, 0.5, easeInBack),
    mask().scale(0, 0.5, easeInQuint),
  );
  yield* waitFor(0.5);
  yield* all(
    angle(0, 0.7, easeInQuint),
    bigCircle().stroke(LIGHTPURPLE, 0.7),
    dot().fill(LIGHTPURPLE, 0.7)
  );
  bigCircle().opacity(0)
  yield* dot().position.y(-286, .2)
  yield* all(
    dot().opacity(0,0.5),
    dot().position.y(0,0.5)
  );
});
