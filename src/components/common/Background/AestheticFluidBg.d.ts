declare module './AestheticFluidBg.js' {
  export class AestheticFluidBg {
    constructor(options?: AestheticFluidBgOptions);

    // 公共方法
    colors(colors: string[]): void;
    start(): void;
    resize(): void;
    reset(seed?: number): void;
    update(type: string, value: number): void;
    destroy(): void;
  }

  interface AestheticFluidBgOptions {
    dom?: string;
    colors?: string[];
    loop?: boolean;
    seed?: number;
    radius_inner?: number;
    radius_outer?: number;
    resize_mode?: string;
  }
}

// 使用ES模块的导出方式
export class AestheticFluidBg {
  constructor(options?: AestheticFluidBgOptions);
  colors(colors: string[]): void;
  start(): void;
  resize(): void;
  reset(seed?: number): void;
  update(type: string, value: number): void;
  destroy(): void;
}

export interface AestheticFluidBgOptions {
  dom?: string;
  colors?: string[];
  loop?: boolean;
  seed?: number;
  radius_inner?: number;
  radius_outer?: number;
  resize_mode?: string;
}
