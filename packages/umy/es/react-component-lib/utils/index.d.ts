import React from 'react';
import type { StyleReactProps } from '../interfaces';
export type MaterialReactExternalProps<PropType, ElementType> = PropType & Omit<React.HTMLAttributes<ElementType>, 'style' | 'translate'> & StyleReactProps;
export type MaterialReactForwardedRef<T> = ((instance: T | null) => void) | React.MutableRefObject<T | null> | null;
export declare const setRef: (ref: MaterialReactForwardedRef<any> | React.Ref<any> | undefined, value: any) => void;
export declare const mergeRefs: (...refs: (MaterialReactForwardedRef<any> | React.Ref<any> | undefined)[]) => React.RefCallback<any>;
export declare const createForwardRef: <PropType, ElementType>(ReactComponent: any, displayName: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<MaterialReactExternalProps<PropType, ElementType>> & React.RefAttributes<ElementType>>;
export declare const defineCustomElement: (tagName: string, customElement: any) => void;
export * from './attachProps';
export * from './case';
//# sourceMappingURL=index.d.ts.map