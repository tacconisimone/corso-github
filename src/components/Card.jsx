function Card({ title, imgUrl, isVisited, isAdmin, children }) {

    //function Card(props){
    //const title = props.title;
    const descrizione = "Molto bella";
    //const imgUrl = props.imgUrl;
    return (
        <div className="rounded-md bg-zinc-950">
            <img src={imgUrl} alt=""></img>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">{descrizione}</p>
                <p className="text-gray-500">{children}</p>
                {/* {isVisited ? <span>✅ visitata</span> : <span>❌ non visitata</span>} */}
                {isVisited && <span>✅ visitata</span>}
                {!isVisited && <span>❌ non visitata</span>}
                {isAdmin && <span>❌ cancella città</span>}
            </div>
        </div>
    )
}

export default Card;

//  formattazione automatica:                   |Maiusc + Alt + F
//  Sposta la riga verso l'alto/verso il basso: |Alt + Freccia su/Giù
//  Duplica la riga corrente:                   |Alt + Maiusc + Freccia su/Giù
//  Apri il terminale integrato:                |Ctrl + ò
//  Apri una nuova finestra del terminale:      Ctrl + Maiusc + O
//  Commenta il codice selezionato:             Ctrl + ù
//  Aggiungi una riga vuota sopra:              Ctrl + Maiusc + Invio
//  Seleziona l'intera riga:                    Ctrl + L