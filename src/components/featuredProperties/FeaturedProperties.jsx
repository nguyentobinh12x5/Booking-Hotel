import Base_URL from "../../hooks/Base_URL";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
const FeaturedProperties = () => {
  const { data, loading } = useFetch(`${Base_URL}/hotel`);
  const topRatedHotels = data
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 3);
  return (
    <div className="fp">
      {loading ? (
        "loading"
      ) : (
        <>
          {topRatedHotels.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              <div className="fpRating">
                <button>{item.rate}</button>
                <span>Excellent</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
