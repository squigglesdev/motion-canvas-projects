import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import ffmpeg from '@motion-canvas/ffmpeg';

export default defineConfig({
  plugins: [motionCanvas({
      project: [
        './src/acerola1.ts',
        './src/portals.ts',
        './src/jolon.ts',
        './src/presentationTest.ts',
      ]
    }),
    ffmpeg(),
  ],
});
