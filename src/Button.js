export default function Button(props){
    return(
        <button onClick={props.azione}>{props.nome}</button>
    )
}