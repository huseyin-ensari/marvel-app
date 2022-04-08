const HeroList = ({ heros }) => {
    return (
        <div id='hero-list'>
            {heros?.map((hero) => (
                <div className='card' key={hero.id}>
                    <div className='divider'></div>
                    <div className='img-frame'>
                        <img
                            className='hero-image'
                            src={hero.thumbnail.path + "." + hero.thumbnail.extension}
                            alt='Apocalypse'
                        />
                        <span id='hero-name'>{hero.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroList;