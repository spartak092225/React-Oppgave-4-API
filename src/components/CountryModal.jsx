import styles from './CountryModal.module.css';

export default function CountryModal({
  country,
  onClose,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
        >
          ×
        </button>
        <img
          src={country.flags.png}
          alt={country.name.common}
          className={styles.flag}
        />
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Subregion: {country.subregion}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>
          Calling Code: +{country.idd?.root}
          {country.idd?.suffixes?.[0]}
        </p>
        <button
          className={styles.favoriteBtn}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(e, country.name.common);
          }}
        >
          {isFavorite ? '❤️ Remove Favorite' : '🤍 Add to Favorites'}
        </button>
      </div>
    </div>
  );
}
