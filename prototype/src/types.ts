export type SheetReturn<TypeParam> = {
    code: number,
    message: string,
    data?: TypeParam
}

export type WorkerSheet = {
    timeStream: string,
    date: string,
    sari: number,
    price: number
}