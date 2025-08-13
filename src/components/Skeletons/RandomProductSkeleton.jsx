import ContentLoader from "react-content-loader"

const RandomProductSkeleton = (props) => {
    return (
        <div className="main-content">
            <div className="product-gallery card">
                <ContentLoader 
                    speed={2}
                    width={560}
                    height={590}
                    viewBox="0 0 560 590"
                    backgroundColor="#3b3b3b"
                    foregroundColor="#dfdddd"
                    {...props}
                >
                    <rect x="32" y="13" rx="10" ry="10" width="500" height="375" /> 
                    <rect x="32" y="408" rx="10" ry="10" width="500" height="35" /> 
                    <rect x="32" y="474" rx="10" ry="10" width="50" height="50" /> 
                    <rect x="91" y="474" rx="10" ry="10" width="50" height="50" /> 
                    <rect x="150" y="474" rx="10" ry="10" width="50" height="50" /> 
                    <rect x="208" y="474" rx="10" ry="10" width="50" height="50" /> 
                    <rect x="266" y="474" rx="10" ry="10" width="50" height="50" /> 
                    <rect x="325" y="474" rx="10" ry="10" width="50" height="50" />
                </ContentLoader>
            </div>
            <div className="product-details card">
                <ContentLoader 
                    speed={2}
                    width={560}
                    height={590}
                    viewBox="0 0 560 590"
                    backgroundColor="#3b3b3b"
                    foregroundColor="#dfdddd"
                    {...props}
                >
                    <rect x="8" y="13" rx="10" ry="10" width="500" height="51" /> 
                    <rect x="8" y="79" rx="10" ry="10" width="500" height="120" /> 
                    <rect x="8" y="224" rx="10" ry="10" width="500" height="160" /> 
                    <rect x="8" y="403" rx="10" ry="10" width="265" height="54" />
                </ContentLoader>
            </div>
        </div>
    );
};

export default RandomProductSkeleton;

