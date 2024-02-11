export type Quest = {
    id: number,
    title: string,
    objective: string,
    complete?: boolean = false,
}