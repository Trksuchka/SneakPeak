

const FilterGroup = ({value, onClickCategory}) => {

    const categories = ['Все', 'Беговые', 'Баскетбольные', 'Повседневные', 'Мощные', 'Стильные', 'Лимитированная серия']

    return(
        <div class="filters">
            {categories.map((categoryName, i) => (
                <button key={i} onClick={() => onClickCategory(i)} className={value === i ? 'filter-btn active' : 'filter-btn'}>{categoryName}</button> 
            ))}
        </div>
    );
};

export default FilterGroup