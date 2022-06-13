//条件类型
type TypeName<T> = T extends string ? "string" : "object";

//(A | B) extends U : X: Y
//(A extends U : X: Y) | (B extends U : X: Y)
