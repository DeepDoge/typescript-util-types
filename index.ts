export type LiteralUnion<T extends U, U = string> = T | (U & {});
export type ExcludeMatchingProperties<T, V> = Pick<
    T,
    { [K in keyof T]-?: T[K] extends V ? never : K }[keyof T]
>

export type GetArrayElementType<T extends readonly any[]> = T extends readonly (infer U)[] ? U : never