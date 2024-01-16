export default function Loading() {
    // Or a custom loading skeleton component
    console.log(Loading);
    return <p style={{
        fontSize: '5rem',
        position: 'fixed',
        inset: '0',
        zIndex: 9999999999999,
        backgroundColor: 'red'
    }}>Loading...</p>
}