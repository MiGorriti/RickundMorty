import style from "././card.module.css"

export default function Card(props) {
  const {character, onClose} = props;
return (
  
    <div className={style.cardContainer}>

      <div className={style.imageContainer}>
      <img className={style.characterImage} src={character.image} alt={character.name} />
      <h2 className={style.name}>Name:{character.name}</h2>
      <button className={style.closeButton} onClick={onClose}>X</button>
      </div>
      
      <div className={style.atributes}>
      <h2>Gender:{character.gender}</h2>
      <h2>Species:{character.species}</h2>

      </div>
     
    </div>
  );
}
