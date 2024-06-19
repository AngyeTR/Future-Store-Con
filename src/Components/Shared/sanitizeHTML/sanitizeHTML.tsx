import { HTMLAttributes, createElement } from "react"
import sanitize from "sanitize-html"


type sanitizeHTMLProps = {
    children: string
    tag: string

} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({tag, children, ...rest}: sanitizeHTMLProps) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: ["b", "i", "em", "strong"]
    })

    return createElement(
        tag,
        {...rest},
        sanitizedHTML
    )
}