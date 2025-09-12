import type { FASTElement, HTMLTemplateTag, ViewTemplate } from '../@microsoft/fast-element/index.js';
import type { AnnotatedStoryFn, Args, ComponentAnnotations, InputType as StorybookInputType, Renderer, StoryAnnotations, StoryContext } from '@storybook/csf';
/**
 * Returns a formatted URL for a given Storybook fixture.
 *
 * @param id - the Storybook fixture ID
 * @param args - Story args
 * @returns - the local URL for the Storybook fixture iframe
 */
export declare function fixtureURL(id?: string, args?: Record<string, any>): string;
/**
 * A helper that returns a function to bind a Storybook story to a ViewTemplate.
 *
 * @param template - The ViewTemplate to render
 * @returns - a function to bind a Storybook story
 */
export declare function renderComponent<TArgs = Args>(template: ViewTemplate): (args: TArgs, context: StoryContext) => Element | DocumentFragment | null;
/**
 * A helper that returns a function to bind a Storybook story to a ViewTemplate.
 */
export type FASTFramework = Renderer & {
    component: typeof FASTElement;
    storyResult: FASTElement | Element | DocumentFragment | null;
};
type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
} & {};
type InputType = Omit<StorybookInputType, 'table'> & {
    table: RemoveIndexSignature<StorybookInputType['table']>;
};
type ArgTypes<TArgs = Args> = {
    [name in keyof TArgs]: InputType;
};
/**
 * Metadata to configure the stories for a component.
 */
export type Meta<TArgs = Args> = Omit<ComponentAnnotations<FASTFramework, Omit<TArgs, keyof FASTElement>>, 'argTypes'> & {
    argTypes?: Partial<ArgTypes<TArgs>>;
};
/**
 * Story function that represents a CSFv3 component example.
 */
export declare type StoryObj<TArgs = Args> = StoryAnnotations<FASTFramework, TArgs>;
/**
 * Story function that represents a CSFv2 component example.
 */
export declare type StoryFn<TArgs = Args> = AnnotatedStoryFn<FASTFramework, TArgs>;
/**
 * Story function that represents a CSFv2 component example.
 *
 * NOTE that in Storybook 7.0, this type will be renamed to `StoryFn` and replaced by the current `StoryObj` type.
 */
export declare type Story<TArgs = Args> = StoryFn<TArgs & {
    storyContent: string | null | ReturnType<HTMLTemplateTag>;
    storyItems: any[] | {
        [key: string]: any[];
    };
}>;
/**
 * Combined Storybook story args.
 *
 */
export type StoryArgs<TArgs = Args> = Partial<Omit<TArgs, keyof FASTElement>> & Args;
export {};
