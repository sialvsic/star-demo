// demo14:Mapped types
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };
/**
 * 1.The type variable K, which gets bound to each property in turn.。
 * 2.The string literal union Keys, which contains the names of properties to iterate over.
 * 3.The resulting type of the property
 */

 // --------------------------------------------
 
interface Job {
    readonly name: string;
    amount: number;
}
type NullableJob = { [P in keyof Job]: Job[P] | null }
type PartialJob = { [P in keyof Job]?: Job[P] }
/** ------------------------------------------------------- */
type Nullable<T> = { [P in keyof T]: T[P] | null }
type Partial<T> = { [P in keyof T]?: T[P] }


type NewPartialJob = Partial<Job>
