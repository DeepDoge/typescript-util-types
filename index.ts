/**
 * Makes IDE suggest defined types while also allowing anything with the same primitive type.   
 * #### Example
 * ```ts
 * const color: LiteralUnion<'yellow' | 'black'>
 * ```
 * You get `yellow` and `black` suggestions while being able to use any other string.
 */
export type LiteralUnion<T extends U, U = string> = T | (U & {});

/**
 * Construct a type with the properties of T except for those extend type V.
 * #### Example
 * ```ts
 * interface Example {
 *  a: number
 *  b(): void
 *  c(num: number): number
 * }
 * type ExampleWithoutFunctions = OmitMatch<Example, Function>
 * ```
 * `ExampleWithoutFunctions` type is not going to have `b` and `c` because they extend `Function`
 */
export type OmitMatch<T, V> = Pick<T, { [K in keyof T]-?: T[K] extends V ? never : K }[keyof T]>

/**
 * Extract types from constant array T.  
 * #### Example
 * ```ts
 * const allowedColors = ['red', 'blue', 'green'] as const
 * type Colors = ExtractGeneric<typeof allowedColors>
 * ```
 * `Colors` type gives us:
 * ```ts
 * 'red' | 'blue' | 'green'
 * ```
 */
export type ExtractGeneric<T extends readonly any[]> = T extends readonly (infer U)[] ? U : never