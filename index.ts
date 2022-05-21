/**
 * ### Example
 * ```ts
 * const color: LiteralUnion<'yellow' | 'black'>
 * ```
 * You get `yellow` and `black` suggestions while being able to use any other string.
 */
export type LiteralUnion<T extends U, U = string> = T | (U & {});

/**
 * ### Example
 * ```ts
 * interface Example {
 *  a: number
 *  b(): void
 *  c(num: number): number
 * }
 * type ExampleWithoutFunctions = ExcludeMatchingProperties<Example, Function>
 * ```
 * `ExampleWithoutFunctions` type is not going to have `b` and `c` because they extend `Function`
 */
export type ExcludeMatchingProperties<T, V> = Pick<
    T,
    { [K in keyof T]-?: T[K] extends V ? never : K }[keyof T]
>

/**
 * ### Example
 * ```ts
 * const allowedColors = ['red', 'blue', 'green'] as const
 * type Colors = ExtractGeneric<typeof allowedColors>
 * ```
 * `Colors` type gives us:
 * ```ts
 * 'red' | 'blur' | 'green'
 * ```
 */
export type ExtractGeneric<T extends readonly any[]> = T extends readonly (infer U)[] ? U : never