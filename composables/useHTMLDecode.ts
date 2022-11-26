export default (html: string) => {
    return html.replaceAll('&#038;', '&')
                .replaceAll('&#39;', '\'')
}