/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

import { GUI } from 'dat.gui';
import { EventDispatcher } from 'three';

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare global {
  interface Window {
    eventDispatcher: EventDispatcher;
    virtualScrollY: number;
    virtualScrollX: number;
    gui: GUI;
  }

  declare module '*.avif' {
    const src: string;
    export default src;
  }

  declare module '*.bmp' {
    const src: string;
    export default src;
  }

  declare module '*.gif' {
    const src: string;
    export default src;
  }

  declare module '*.jpg' {
    const src: string;
    export default src;
  }

  declare module '*.jpeg' {
    const src: string;
    export default src;
  }

  declare module '*.png' {
    const src: string;
    export default src;
  }

  declare module '*.webp' {
    const src: string;
    export default src;
  }

  declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
  }

  declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }

  declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }

  declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }

  declare module '*.glsl' {
    const value: string;
    export default value;
  }
  declare module '*.fbx' {
    const value: string;
    export default value;
  }
  declare module '*.glb' {
    const value: string;
    export default value;
  }
  declare module '*.glb' {
    const value: string;
    export default value;
  }
  declare module '*.dds' {
    const src: string;
    export default src;
  }

  declare module '*.mp3' {
    const src: string;
    export default src;
  }
  declare module '*.mp4' {
    const src: string;
    export default src;
  }

  declare module '*.m4a' {
    const src: string;
    export default src;
  }
}
