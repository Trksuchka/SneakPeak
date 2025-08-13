import ContentLoader from "react-content-loader"

const ProductCardSkeleton = (props) => {
    return (
        <div className="product-card">
            <ContentLoader 
                speed={2}
                width={370}
                height={430}
                viewBox="0 0 370 430"
                backgroundColor="#3b3b3b"
                foregroundColor="#dfdddd"
                {...props}
            >
                <rect x="10" y="10" rx="10" ry="10" width="350" height="250" /> 
                <rect x="10" y="284" rx="10" ry="10" width="330" height="32" /> 
                <rect x="10" y="328" rx="10" ry="10" width="100" height="32" /> 
                <rect x="24" y="383" rx="10" ry="10" width="155" height="40" /> 
                <rect x="191" y="383" rx="10" ry="10" width="155" height="40" />
            </ContentLoader>
        </div>
    );
};

export default ProductCardSkeleton;