import './Navbar.css'
import './Link.jsx'
import Link from './Link.jsx'

function Navbar(){

const x = 1;
const img = "vite";
/*const imgStyle ={
    height: x < 10 ? "300px" : "500px",
    borderRadius: "100%",
};*/
//<div className={`box rounded ${x < 10 ? "rotated" : ""}`}> x è {x}</div>

    return (
        <>
        <div className={`rounded-lg w-72 h-72 ${x<10 ? "bg-red-500 rotate-45" : "bg-sky-300"}`}> x è {x}</div>
        <ul>
            <li>
                <Link>
                    qwerty
                </Link>
            </li>
            <li>
                <Link>qwerty</Link>
            </li>
            <li>
                <Link>qwerty</Link>
            </li>
            <li>
                <Link>qwerty</Link>
            </li>
        </ul>
        </>
    )
}

export default Navbar