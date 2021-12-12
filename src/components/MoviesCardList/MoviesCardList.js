import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

const props = {
  title: '33 слова о дизайне',
  subtitle: '1ч 42м',
  link: 'https://www.dvhab.ru/kino/kino/images/big_gbep.JPG',
  isLike: true,
}

function MoviesCardList() {
  return (
    <section className="movies-list">
      <div className="movies-list__container">
        <MoviesCard {...props} />
        <MoviesCard {...props} />
        <MoviesCard {...props} />
        <MoviesCard {...props} />
        <button type="button" className='movies-list__button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
