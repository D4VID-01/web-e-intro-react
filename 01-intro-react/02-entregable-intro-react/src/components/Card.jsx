
export const Card = () => {

    // Información estatica de la tarjeta 
    const nombre = "Ana Pérez";
    const profesion = "Desarrolladora web";
    const mensaje = "¡Bienvenid@ a mi tarjeta de presentación!";

    return (
        <div style={{border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center'}}>
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{mensaje}</p>
        </div>
    )
}

