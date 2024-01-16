'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100dvh',
                gap: '3rem',
                width: '100%',
                backgroundColor: '#f5f5f5',
                color: '#333',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                padding: '1rem',
                boxSizing: 'border-box',
                textAlign: 'center',
            }
        }>
            <h2>Something went wrong!</h2>
            <div>
                {error.message}
            </div>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}