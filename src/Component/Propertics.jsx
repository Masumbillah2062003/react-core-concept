export default function Propertics({name}) {

    console.log(name)

    const {id, productName, price} = name


    const style = {
        border: "2px solid red",
        margin: "15px",
        padding: "15px",
        borderRadius: "5px"
    }

    return(
        <div style={style}>
            <h4>id : {id}</h4>
            <h3>Product Name : {productName}</h3>
            <p>Price : {price} </p>
        </div>
    )
}

