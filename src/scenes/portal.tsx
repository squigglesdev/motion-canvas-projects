import { Circle, Img, Node, Rect } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, waitFor} from '@motion-canvas/core/lib/flow';
import { easeInCubic, easeOutCubic, linear } from '@motion-canvas/core/lib/tweening';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
    const bluePortal = createRef<Img>();
    const orangePortal = createRef<Img>();
    const portalMask1 = createRef<Circle>();
    const portalMask2 = createRef<Circle>();
    const object = createRef<Rect>();
    const objectDuplicate = createRef<Rect>();
    const objectTexture = createRef<Img>();
    const terminalVelocity = 1000;
    let time = 1;

    view.add(
        <>
            <Img
                ref={bluePortal}
                src={'../../media/BluePortal.svg'}
                width={250}
                scale={1}
                y={-400}
            />
            <Img
                ref={orangePortal}
                src={'../../media/OrangePortal.svg'}
                width={250}
                scale={1}
                y={400}
            />

            <Node cache>
                <Circle
                    ref={portalMask1}
                    size={835}
                    fill={'#fff'}
                />
                <Rect
                    ref={object}
                    size={150}
                    fill={'#fff'}
                    stroke={'#000'}
                    strokeFirst
                    lineWidth={20}
                    compositeOperation={'source-in'}
                >
                    <Img
                        ref={objectTexture}
                        size={150}
                        src={'../../media/Companion.svg'}
                    />
                </Rect>
            </Node>
            <Node cache>
                <Circle
                    ref={portalMask2}
                    size={835}
                    fill={'#fff'}
                />
                <Rect
                    ref={objectDuplicate}
                    size={150}
                    fill={'#fff'}
                    stroke={'#000'}
                    strokeFirst
                    y={-800}
                    lineWidth={20}
                    compositeOperation={'source-in'}
                >
                    <Img
                        ref={objectTexture}
                        size={150}
                        src={'../../media/Companion.svg'}
                    />
                </Rect>
            </Node>
        </>
    );
    yield* all(
        object().position.y(800, 0.7, easeInCubic),
        objectDuplicate().position.y(0, 0.7, easeInCubic),
        
    );
    bluePortal().rotation(-45),
    object().position([-780,-1180]);
    object().rotation(-45)
    portalMask1().position([335,-65])
    portalMask1().scale(1.18)
    yield* all(
        object().position([400,0], 0.35, easeOutCubic),
        objectDuplicate().position.y(800, 0.35, easeOutCubic),
    );
    objectDuplicate().position.y(-800);
});
