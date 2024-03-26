export { }

declare global {
    interface Recipe {
        title?: string,
        description?: string,
        has_blog?: boolean,
        tags?: string[],
        servings?: string|undefined,
        cooks_note?: string|undefined,
        prep_time?: string|undefined,
        cook_time?: string|undefined,
        oven_temp?: string|undefined,
        ingredients?: Ingredient[],
        directions?: String[],
        _path?: string,
        thumbnail?: string,
        thumbnail_alt?: string,
    }

    interface Ingredient {
        qty?: string,
        unit?: string,
        name: string,
        modifier?: string
    }
}