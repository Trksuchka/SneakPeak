import React from "react";
import FilterGroup from "../FilterGroup";
import ProductCard from "../ProductCard";
import ProductCardSkeleton from '../Skeletons/ProductCardSkeleton'

const CatalogBlock = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);

    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';

        fetch(`https://68879c52071f195ca9817415.mockapi.io/items?${category}`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId]);

    return(
        <section id="collection" class="page-section">
            <div class="container">
                <div class="collection-header">
                    <h2>Коллекция кроссовок</h2>
                    <p class="collection-description">
                        Откройте для себя нашу эксклюзивную коллекцию премиальных кроссовок от ведущих мировых брендов. 
                        Каждая модель создана для вашего комфорта и стиля.
                    </p>
                    <FilterGroup value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                </div>

                <div class="products-grid">
                    {
                        isLoading
                        ? [...new Array(12)].map((_, index) => <ProductCardSkeleton key={index} />)
                        : items.map((obj) => <ProductCard key={obj.id} {...obj} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default CatalogBlock;