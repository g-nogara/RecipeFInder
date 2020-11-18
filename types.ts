export interface Recipe {
    readonly title: string,
    readonly thumbnail: string,
    ingredients: string | Array<string>,
    link?: string,
    href?: string,
    gif?: string,
}