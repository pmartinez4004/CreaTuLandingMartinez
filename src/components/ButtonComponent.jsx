export default function ButtonComponent({texto, color}){

    const misEstilos={
        backgroundColor: color,
        margin: 10,
        border: "2px solid gray"
    }
    return(
        <>
       <button style= {misEstilos}>{texto}</button>
        </>
    )
}