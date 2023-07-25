import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

export default function Spinner({ variant = "dark", extra }) {
    return (
        <div class={`spinner-border text-${variant} + ${extra}}`} role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
}
