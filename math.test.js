// import {add} from "./math";
// import {api} from './api'
// import { app } from "./app";
import '@testing-library/jest-dom' // AMELIORE ASSERTIONS DANS LES TESTS JEST
import React , {Children} from 'react' // IMPORTE MODULE NECESSAIRE POUR COMPOSANT REACT
import { render, prettyDOM, screen, waitFor, getByPlaceholderText, fireEvent } from '@testing-library/react' // POUR COMPOSANT REACT PENDANT LES TEST
import Comp from './Comp'

test("methode", () => {
    // const li = document.createElement('li');
    // const containerRender = document.body.appendChild(li);
    // const { container, debug} = render (<Comp/>, {
    //     container:containerRender
    // })
    // const { container } = render (<Comp/>);
    // const { getByText} = render(<Comp/>); // REND COMP ET EXTRAIT FONCTION GetByText

    // const elem = getByText(/Word/); // RECUP ELEMENT QUI CONTIENT "WORD"
    // expect(elem).toBeInTheDocument();
    // console.log(prettyDOM(container)); //VOIR SIL S'AFFICHE
    // screen.debug(); // UTILE QUAND GROSSE APP

    // const { getByText} = render (<Comp/>);
    // const text = getByText(/^hello/i);// le 'i' pour ignorer la casse, le $ veut dire 'se termine par' et le ^ pour test valide
    // console.log(prettyDOM(text));
    // expect (text).toBeInTheDocument();
    // debug();
    // AUTRE MANIERE

//     const {getByText } = render(<Comp/>);
//     const text = getByText ("warld", { exact: false});
//     console.log(prettyDOM(text));
//     expect(text).toBeInTheDocument();
// });

// REACT 11 page 4
//  const {getByLabelText} = render(<Comp/>);
//  const label = getByLabelText (/name/i);
//  expect(label).toBeInTheDocument();
//  console.log(prettyDOM(label));
// });

// POUR EMAIL
// const { getByPlaceholderText } = render(<Comp/>);
// const email = getByPlaceholderText(/email/i);
// expect(email).toBeInTheDocument();
// console.log(prettyDOM(email));

//POUR IMAGE
// const {getByAltText} = render(<Comp/>);
// const alt = getByAltText(/image/i);
// expect(alt).toBeInTheDocument();
// console.log(prettyDOM(alt));

// POUR UN TITRE
// const { getByTitle} = render(<Comp/>);
// const title = getByTitle(/titre/i);
// expect(title).toBeInTheDocument();
// console.log(prettyDOM(title));


// POUR RECUP UN INPUT (nimporte lequel)
// const { getByDisplayValue} = render(<Comp/>);
// const value = getByDisplayValue(/valeur/i);
// expect(value).toBeInTheDocument();
// console.log(prettyDOM(value));

// Recuperer un element QUI N A PAS DE REFERENCE
// const { getByTestId} = render(<Comp/>)
// const testId = getByTestId(/elem/i);
// expect(testId).toBeInTheDocument();
// console.log(prettyDOM(testId));

// const { getAllByText } = render (<Comp/>);
// const allText = getAllByText(/word/i);
// allText.forEach(element => {
//     expect(element).toBeInTheDocument();
//     console.log(prettyDOM(element));
// });

const { queryByText } = render(<Comp/>);
const allText = queryByText(/jamais/i);
});

// DEF TEST AVEC FONCTION ASYNCHRONE
test("verifie", async () => {
    const name = "FakeValue"; // DEF valeur pour le test
    const { getByText, queryByText, getByPlaceholderText, getByDisplayValue} = // RENDU DU COMPOSANT + RECUP DES FONCTIONS REQUETES
    render (<Comp />);
    expect (queryByText (name)).toBeNull(); // Verif initiale que l'element n'est pas présent
    
    fireEvent.change(getByPlaceholderText(/name/), { target : { value: name}}); // SIMULATION DE CHANGEMENT DE VALEUR DANS LE CHAMP D'ENTRéE
    expect (getByDisplayValue(name)).toBeInTheDocument();// VERIF que la valeur est mtn affiché dans le champ d'entrée
    
    fireEvent.click(getByText(/Submit/));// simulation du clic sur le bouton avec un nouvel event de clic
    expect(getByText(name)).toBeInTheDocument();// VERIF que l'element avec le texte "FakeValue" est mtn present
});

  
// Pour VERIF si "hello" est present - ici dans Comp
// test("vérifie le texte hello", async () => {
//     const { findByText } = render(<Comp/>);
//     const element = await findByText (/hello/i, {}, { timeout: 3000});
//     expect(element).toBeInTheDocument();
// });

// test("Vérifie le texte hello", async () => {
//     const { getByText} = render(<Comp />);
//     await waitFor (() => {
//         expect (getByText(/hello/i)).toBeInTheDocument();
//     }, {
//         timeout : 5000 // ICI 3000 PAS ASSEZ !
//     })
// });



// describe("catégorie d'addition", () =>{
//     const firstNumber =1;
//     test('addition 1+ 1 egale 2', () => {
//         expect(add (firstNumber, 1)).toBe(2);
//     })
// });

// test('addition 1+2 egale 3', ()=> {
//     const firstNumber =1;

//     expect(add (firstNumber,2)).toBe(3);
// })




// test.each([
//     [1, 1, 2],
//     [1,2,3]
// ])('addition générique', (a, b, c)=>{
//     expectedError(add(a, b)).toBe(c);
// })
// test('1 + 1 égale 2', () => {
//     expect(add(1,1)).toBe(2);
// })

// function Classe(){
//    this.prop1=42,
//   this.prop2="koala"
// };

// const obj1 ={
//     prop1:42,
//     prop2:"koala"
// };

// const obj2 = new Classe();

// describe("Les objets obj1 et obj2", () =>{
//     test("ont les mêmes propriétés", () => {
//         expect(obj1).toEqual(obj2);
//     });
//     test("mais n'ont pas la même référence", () =>{
//         expect(obj1).not.toStrictEqual(obj2);
//     })
// })

// test("Les koalas sont mignons", () =>{
//     expect("Les koalas sont mignons").toMatch("mignon");
// });

// test("Est un numéro de téléphone", () => {
//     expect("0673363649").toMatch(/^\d{10}$/);
// });

// test("L'objet contient les propriétés prop1 et prop2", () =>{
//     expect(obj1).toHaveProperty("prop1");
//     expect(obj1).toHaveProperty("prop2", "koala");
// });


// const obj3 = {
//     prop1:{
//         prop2: [1, 2, 3]
//     },
//     prop3: 25,
//     prop4:42
// };

// const obj4 = {
//     prop1: {
//         prop2:[1, 2, 3]
//     },
//     prop4:42
// };

// test("L'objet obj3 contient les propriétés de l'objet 2", () => {
//     expect (obj3).toMatchObject(obj4);
// });

// // MATCHER TO BE INSTANCE OF 
// function A(){}
//     class B{}

// const a = new A();
// const b = new B();

// test("tester qu'une valeur est une instance", () => {
//     expect(a).toBeInstanceOf(A);
//     expect(b).toBeInstanceOf(B);
// });

// // MATCHER TO BE CONTAIN EQUAL & TO CONTAIN
// test("Le tableau ne contient pas obj1", () => {
//     expect([
//         {
//             prop1: 42,
//             prop2: "koala"
//         },
//         2,
//         { test : 2}
//     ]).not.toContain(obj1);
// });

// test("Le tableau contient un objet avec les propriétés de obj1", () => {
//     expect([
//         {
//             prop1: 42,
//             prop2: "koala"
//         },
//         2,
//         {test: 2}
//     ]).toContainEqual(obj1);
// });


// // MATHCER TO BE TRUTHY et TO BE FALSY
// test('La valeur null', ()=> {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
// });

// test('Zéro', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
// });

// // MATHCER : TO BE THROW pour verifier SI fonction renvoi erreur
// function fonctionTest(){
//     throw new Error("test");
// }

// test("Test une erreur", () => {
//     expect(fonctionTest).toThrow(Error("test"))
// });

// // Test de PROMESSE résolu
// const promesse = Promise.resolve(42);
// test("tester la résolution", () => {
//     expect(promesse).resolves.toBe(42);
// });

// // test PROMESSE échoué
// const promesse2 = Promise.reject(new Error("oups !"));
// test("testr la résolution", () => {
//     expect(promesse2).rejects.toThrow("oups !");
// });

// test("test", (done) => {
//     const cb =(res) => {
//         expect(res).toBe(3);
//         done(); // Défini le test comme TERMINé
//     };
//     add(1, 2,cb)
// });

// test("promess", () => {
//     return add(1,1).then(res => {
//         expect(res).toBe(2);
//     });
// });

// AUTRE FACON DE LECRIRE : 
//  test("promesse", async () => {
//     const res = await add (1, 1);
//     expect(res).toBe(2);
//  });

// test("addition de deux nombres", () => {
//     expect(add(1, 1)).toBe(2);
// });



// // MATCHER BEFORE ALL
// beforeAll(() => {
//     console.log('before All');
// });

// test("addition de deux nombres", () =>{
//     console.log('first test');
//     expect(add(1, 1)).toBe(2);
// });

// test("addition de deux nombres", () => {
//     console.log('second test');
//     expect(add(1, 2)).toBe(3);
// });

// // MATCHER BEFORE EACH
// beforeEach(() => {
//     console.log('before Each');
// });

// test("addition de deux nombres", () => {
//     console.log('first test');
//     expect(add(1, 1)).toBe(2);
// });

// test ("addition de deux nomvres", () => {
//     console.log('second test');
//     expect(add(1, 2)).toBe(3);
// });


// // MATCHER AFTER ALL
// afterAll(() => {
//     console.log('After all');
// });

// test("addition de deux nombres", () => {
//     console.log('first test');
//     expect(add(1, 1)).toBe(2);
// });

// test("addition de deux nombres", () => {
//     console.log('second test');
//     expect(add(1, 2)).toBe(3);
// });

// // MATCHER AFTER EACH
// afterEach(() => {
//     console.log('After each');
// });

// test("addition de deux nombres", () => {
//     console.log('first test');
//     expect(add(1, 1)).toBe(2);
// });

// test("addition de deux nombres", () => {
//     console.log('Second test');
//     expect (add(1, 2)).toBe(3);
// });

// test("function for Mock", () => {
//     const func = jest.fn();
//     func();
//     func();
//     func();
//     func();
//     func();
//     func();

//     console.log(func.mock.calls.length); // ICI IL MAFFICHE BIEN 6 
// });

// test("function for Mock", () => {
//     const func = jest.fn();
//     func("parametre");

//     console.log(func.mock.calls[0]);
//     // Pour METTRE UN PARAMETRE ET LE RECUP
// });

// // Avec un parametre spécifique 
// test("function pour Mock", () => {
//     const func = jest.fn();
//     func("parametre 1", "parametre 2");

//     console.log(func.mock.calls[0][1]);
// });

// // Mise en place d'un RETURN avec une valeur par DEFAUT (ICI 42)
// test("function pour Mock", () => {
//     const func = jest.fn(() => 42);
//     func ("parametre 1", "parametre 2");

//     console.log(func.mock.results[0].value);
// });

// // RETOURNER une valeur depuis une fonction Mock (ICI 30)
// test("function pour Mock", () => {
//     const func = jest.fn(() => 42);
//     func.mockReturnValue(30)
//     func ("parametre 1", "parametre 2");

//     console.log(func.mock.results[0].value);

// })

// // Variante pour n'attribuer qu'une fois la valeur
// test("function pour Mock", () => {
//     const func = jest.fn();
//     func.mockReturnValueOnce(30)
//     func("parametre 1", "parametre 2");
//     func("parametre 1", "parametre 2");
//     func("parametre 1", "parametre 2");
//     func("parametre 1", "parametre 2");
//     func("parametre 1", "parametre 2");

//     console.log(func.mock.results[0].value);
// });


// test ("function pour Mock", () => {
//     const func = jest.fn();
//     add(1, 1, func);

//     expect(func.mock.calls.length).toBe(1); // voir si mock est bien excécuté
// });

// // Verifier qu'un resultat correspond (toBe[ce quon veut])
// test("function pour Mock", () => {
//     const func = jest.fn();
//     add(1, 1, func);

//     expect(func.mock.calls[0][0]).toBe(2);
// });

// test("function pour Mock", () =>{
//     // Ici on add des fake données
//     const data = [{name: "fakedata"}]
//     // ici on reassigne le fetchAll à un Mock pour en faire une fonction
//     api.fetchAll = jest.fn();
//     // ici on verifie api.fetchAll retourne bien les fake data
//     api.fetchAll.mockResolvedValue(data);

//     // On retourne une Promise (fonction asynchrone) => app.fetchUser()
//     const res = app.fetchUser();

//     // VeRIFICATION
//     expect(api.fetchAll).toHaveBeenCalled();

//     expect(api.fetchAll).toHaveBeenCalledWith('user');

//     return expect(res).resolves.toEqual(data)

// });

// REACT TESTS 9 

// const functest = (cb) => {
//     setTimeout (() => {
//         cb('salut') // APPELLE fonction cb avec parametre 'salut'
//     }, 10000) // PERMETS UN DELAIS de 10000(milisecondes)=10 secondes
// };

// // test ('verification de callback', (done) => {
// //     const cb = (a) => {
// //         try {
// //             expect(a).toBe("salut");
// //             done();
// //         } catch (e){
// //             done(e);
// //         }
// //     };
// //     functest(cb);
// // }, 11000)

// // Configuration de Jest pour utiliser des temporisateurs fictifs
// jest.useFakeTimers();

// // VERIFIE BON FONCTIONNEMENT DE LA FONCTION DE RAPPEL
// test('vérification de callback', () =>{
//     const fn = jest.fn(); // Fonction de rappel SIMULé avec jest
//     functest(fn); // fonction a tester avec fonction de rappel simulée
//     jest.runAllTimers(); // Exécution immédiate des temporisateurs fictifs
//     expect(fn).toHaveBeenCalled(); // ASSERTION (fonction rappel appelé au moins une fois)
//     expect(fn).toHaveBeenCalledWith('salut');
// });


// // Def fonction 'unTimer' qui prend fonction rappel (callback)
// function unTimer(callback){
//     setInterval(() => { // pour exécuter une fonction toutes les 500 milisec
//         console.log("Faire quelque chose");
//         callback();

//     }, 500) // ici les milisecondes
// }

// // Config de Jest pour les temporisateurs fictifs
// jest.useFakeTimers();
// test("timers", () => {
//     const mock = jest.fn(); // creation de la fonction de rappel simulé avec jest
//     unTimer(mock);
//     expect(mock).not.toHaveBeenCalled(); // Verif fonction pas appelé de suite
//     // jest.runOnlyPendingTimers(); // Exécution immédiate du prochain temporisateur fictif créé par Jest
//     jest.advanceTimersByTime(500);//quand on veut avancer manuellement le timer
//     expect(mock).toHaveBeenCalledTimes(1);
// });


// // Ici on veut manipuler le temps via jest qui va faire des Mock de timeout : 
// function unTimer(callback){
//     setTimeout(() => {
//         console.log('Faire quelque chose');
//         callback();
//     }, 500)
// }

// jest.useFakeTimers();test("timers", () => {
//     const mock = jest.fn();
//     unTimer(mock);
//     expect(mock).not.toHaveBeenCalled();
//     jest.advanceTimersByTime(500);
//     expect(mock).toHaveBeenCalledTimes(1);
// });