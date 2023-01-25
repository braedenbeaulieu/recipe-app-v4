export { }

declare global {
    interface Recipe {
        id?: number,
        title?: string,
        content ?: string,
        slug?: string,
        description?: string,
        featured_image?: string,
        featured_image_alt?: string,
        has_blog?: boolean,
        tags?: string[],
        meta?: {
            video_url?: string|undefined,
            difficulty?: string|undefined,
            servings?: string|undefined,
            prep_time?: string|undefined,
            cook_time?: string|undefined,
            total_time?: number|undefined,
            cooks_note?: string|undefined,
            oven?: {
                temp_unit?: string|undefined,
                temp?: string|undefined,
            }
        },
        ingredients?: any[],
        directions?: any[],
    }
}
