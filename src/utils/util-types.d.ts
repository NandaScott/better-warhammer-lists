/**
 * Transforms any string into a camelcase version of itself.
 *
 * const foo: CamelCase<'this is my string'> = 'ThisIsMyString'
 */
export type CamelCase<S extends string> =
  S extends `${infer Head} ${infer Tail}`
    ? CamelCase<`${Capitalize<Head>}${Capitalize<Tail>}`>
    : S;

/**
 * Source: Matt Pocock
 * Takes any type and resolves it to a simpler, single layer type.
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
