import { Circle, Img, Node, Rect } from '@motion-canvas/2d/lib/components';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, any, waitFor} from '@motion-canvas/core/lib/flow';
import { easeInCubic, easeInOutCubic, easeOutCubic, linear } from '@motion-canvas/core/lib/tweening';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
    const bluePortal = createRef<Img>();
    const orangePortal = createRef<Img>();
    const orangePortalDuplicate = createRef<Img>();
    const portalMask1 = createRef<Circle>();
    const portalMask2 = createRef<Circle>();
    const object = createRef<Rect>();
    const objectDuplicate = createRef<Rect>();
    const objectTexture = createRef<Img>();
    const unMaskedObject = createRef<Rect>();
    const platform = createRef<Rect>();
    const celing = createRef<Rect>();
    const floor = createRef<Rect>();
    const terminalVelocity = 1000;
    let time = 1;

    view.add(
        <>
            <Rect
                ref={celing}
                size={[1920, 300]}
                fill={'aaaaaa'}
                stroke={'#000'}
                strokeFirst
                y={-500}
                lineWidth={20}
            />
            <Rect
                ref={floor}
                size={[1920, 300]}
                fill={'aaaaaa'}
                stroke={'#000'}
                strokeFirst
                y={500}
                lineWidth={20}
            />
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
            <Img
                ref={orangePortalDuplicate}
                src={'../../media/OrangePortal.svg'}
                width={250}
                scale={0}
                y={400}
                x={800}
            />
            <Rect
                ref={unMaskedObject}
                size={150}
                fill={'#fff'}
                stroke={'#000'}
                strokeFirst
                y={0}
                lineWidth={20}
                opacity={0}
            >
                <Img
                    ref={objectTexture}
                    size={150}
                    src={'../../media/Companion.svg'}
                />
            </Rect>
            <Rect
                ref={platform}
                size={[800, 100]}
                fill={'aaaaaa'}
                stroke={'#000'}
                strokeFirst
                x={-1600}
                lineWidth={20}
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
                    opacity={0.0001}
                    y={100}
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
        object().position.y(0, 0.7, easeOutCubic),
        object().opacity(1, 0.7, easeOutCubic),
    );
    yield* all(
        object().position.y(800, 0.7, easeInCubic),
        objectDuplicate().position.y(0, 0.7, easeInCubic),
    );
    object().position.y(-800);
    /*bluePortal().rotation(-45),
    object().position([-780,-1180]);
    object().rotation(-45)
    portalMask1().position([335,-65])
    portalMask1().scale(1.18)*/
    yield* all(
        //object().position([400,0], 0.35, easeOutCubic),
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(20, 0.175, linear),
        objectDuplicate().rotation(20, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* all(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(40, 0.175, linear),
        objectDuplicate().rotation(40, 0.175, linear),
    );
    object().position.y(-800);
    yield* all(
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(60, 0.175, linear),
        objectDuplicate().rotation(60, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* all(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(80, 0.175, linear),
        objectDuplicate().rotation(80, 0.175, linear),
    );
    object().position.y(-800);
    yield* all(
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(100, 0.175, linear),
        objectDuplicate().rotation(100, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* all(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(120, 0.175, linear),
        objectDuplicate().rotation(120, 0.175, linear),
    );
    object().position.y(-800);
    yield* all(
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(140, 0.175, linear),
        objectDuplicate().rotation(140, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* all(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(160, 0.175, linear),
        objectDuplicate().rotation(160, 0.175, linear),
    );
    object().position.y(-800);
    yield* all(
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(180, 0.175, linear),
        objectDuplicate().rotation(180, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* all(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(200, 0.175, linear),
        objectDuplicate().rotation(200, 0.175, linear),
    );
    object().position.y(-800);
    yield* all(
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(220, 0.175, linear),
        objectDuplicate().rotation(220, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* all(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(240, 0.175, linear),
        objectDuplicate().rotation(240, 0.175, linear),
    );
    object().position.y(-800);
    yield* all(
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(260, 0.175, linear),
        objectDuplicate().rotation(260, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* all(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(280, 0.175, linear),
        objectDuplicate().rotation(280, 0.175, linear),
    );
    object().position.y(-800);
    yield* all(
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(300, 0.175, linear),
        objectDuplicate().rotation(300, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* all(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(320, 0.175, linear),
        objectDuplicate().rotation(320, 0.175, linear),
    );
    object().position.y(-800);
    yield* all(
        object().position.y(0, 0.175, linear),
        objectDuplicate().position.y(800, 0.175, linear),
        object().rotation(340, 0.175, linear),
        objectDuplicate().rotation(340, 0.175, linear),
    );
    objectDuplicate().position.y(-800);
    yield* any(
        object().position.y(800, 0.175, linear),
        objectDuplicate().position.y(0, 0.175, linear),
        object().rotation(360, 0.175, linear),
        objectDuplicate().rotation(360, 0.175, linear),
        platform().position.x(0, 0.55, easeOutCubic),
    );
    unMaskedObject().opacity(1)
    object().opacity(0.0001)
    objectDuplicate().opacity(0.0001)
    yield* all(
        unMaskedObject().position.x(800, 0.7, easeOutCubic),
        unMaskedObject().position.y(350, 0.3, linear),
        unMaskedObject().rotation(90, 0.3, linear),
    )
    object().position.x(800)
    object().position.y(350)
    objectDuplicate().position.y(-800)
    object().rotation(90)
    objectDuplicate().rotation(270)
    yield* waitFor(0.5)
    yield all(
        objectDuplicate().position.y(-450, 0.3),
        object().opacity(1, 0),
        objectDuplicate().opacity(1, 0),
        orangePortal().scale(0, 0.3, easeOutCubic),
        orangePortalDuplicate().scale(1, 0.3, easeOutCubic),
    );
    yield* waitFor(0.1)
    yield all(
        unMaskedObject().opacity(0, 0),
        portalMask1().position.x(800, 0),
        object().position.y(800, 0.5, easeInCubic),
        objectDuplicate().position.y(60, 0.5, easeInCubic),
    );
    yield* waitFor(0.475)
    yield* platform().position.y(150, 0.05, easeOutCubic)
    yield all(
        platform().position.y(0, 0.7, easeOutCubic),
        objectDuplicate().position.y(-80, 0.7, easeOutCubic),
        platform().position.x(-1600, 0.7, easeInCubic),
        objectDuplicate().position.x(-1075, 0.7, easeInCubic),
        portalMask2().position.x(-1075, 0.7, easeInCubic),
    )
    yield* waitFor(0.6)
    yield objectDuplicate().rotation(360, 0.175, linear)
    yield* waitFor(0.025)
    yield* any(
        objectDuplicate().position.y(350, 0.5, easeInCubic),
        portalMask2().position.y(350, 0.5, easeInCubic),
        waitFor(0.4),
    )
    yield* all(
        orangePortal().scale(1, 0.5, easeOutCubic),
        orangePortalDuplicate().scale(0, 0.5, easeOutCubic),
    )
    yield* waitFor(1)

});
