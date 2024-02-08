import React, { useRef, useState} from 'react';

export default () => { // Composant fonctionnel par default exporté
    const [name, setName] = useState(null); // DECLARATION DE LETAT NAME ET dE LA FONCTION POUR LE METTRE A JOUR setName
    const ref = useRef(null); // creation reference pour l'element d'entrée
    return ( 
        <>
        <input ref={ref} placeholder="name" /> 
        <button onClick= { () => setName (ref.current.value)}>Submit</button>
        {name ? <h1>{name}</h1> : null    }
        </>
    );
};


// export default () => {
//     return <h1>Hello da warld</h1>
// };

// export default () => {
//     return (
//         <>
//         <h1> Hello World !</h1>
//         {/* <label htmlFor = 'name'> Name</label>
//         <input id="name" />
//         <input placeholder='email'/>
//         <img alt="Je suis une image"/>
//         <svg>
//             <title> Je suis un titre</title>
//         </svg> */}
//         {/* <input onChange={() =>{}} value ="je suis une valeur" /> */}
//         <span data-testid="elem"> texte </span>
//         </>
//     )
// };

// export default () => {
//     return ( 
//         <>
//         <h1> Hello Word ! </h1>
//         <h1> Salut word </h1>
//         <h1> Bonsoir Word ! </h1>
//         <h1> A demain word </h1>
//         <h1> Bonne journée word ! </h1>
//         </>
//     )
// };

// export default () => {
//     const [display, setDisplay] = useState();

//     setTimeout(() => {
//         setDisplay(true);
//     }, 3000);
//     return <>{display ? <h1>hello</h1> : null }</>
// }