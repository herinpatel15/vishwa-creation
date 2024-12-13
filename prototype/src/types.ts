export type SheetReturn<TypeParam> = {
    code: number,
    message: string,
    data?: TypeParam
}

export type WorkerSheet = {
    month: number,
    date: string,
    sari: number,
    price: number
}