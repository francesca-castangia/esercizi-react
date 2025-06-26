export function Message({ age }) {
    return(
        <div>
            { age > 18 ? 'You are older than 18!' : 'You are very young!' }
        </div>
    )
}