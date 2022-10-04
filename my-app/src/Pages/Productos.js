import { useHistory, useLocation } from "react-router-dom";

const Productos = () => {

    let location = useLocation();
    console.log(location);
    // http://localhost:3000/productos?inicio=1&fin=20

    let {search} = useLocation();
    let query = new URLSearchParams(search);
    console.log(query);

    const LIMIT = 20;

    let start = parseInt(query.get('inicio')) || 1;
    let end = parseInt(query.get('fin')) || LIMIT;
    // console.log(start, end);

    let history = useHistory();
    // console.log(history);

    const handlePrev = (e) => {
        history.push({search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`})
    };
    const handleNext = (e) => {
        history.push({search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}`});
    };

    return(
        <div>
            <h3>Productos</h3>
            <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
            {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
            <button onClick={handleNext}>Adelante</button>
        </div>
    );
};

export default Productos;