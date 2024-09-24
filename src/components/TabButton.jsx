export default function TabButton({children, onSelect}) {
    // prop set by react, whichever content you have in your component
    // alternative is put props inside the function above as a parameter and below put props.children
    return ( 
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}