import { Img, Rect } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, sequence, waitFor} from '@motion-canvas/core/lib/flow';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
    // The game jam logo
    const acerolaImage = createRef<Img>();

    view.add(
        <>
            <Img
                ref={acerolaImage}
                src={"https://img.itch.zone/aW1hZ2UyL2phbS8zODU2NjYvMTQ3NjM0MjcucG5n/original/72d8ND.png"}
                opacity={0}
                y={50}
            />
        </>
    );

    yield* all(
        acerolaImage().opacity(1, 1),
        acerolaImage().y(0,1)
    );
});