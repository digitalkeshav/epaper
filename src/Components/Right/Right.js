import React from "react";
import Popular from "../Popular";
import Tags from "../Tags";
import { useSelector } from "react-redux";

const Right = (props) => {
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const renderstories = () => {
    return props.popularNews.map((popular) => {
      return (
        <div className="row">
          <div className="col">
            <Popular
              title={popular.title}
              imageurl={popular.urlToImage}
              postdate={popular.publishedAt}
            />
          </div>
        </div>
      );
    });
  };
  const categories = [
    "Business",
    "General",
    "Health",
    "Science",
    "Sports",
    "Entertainment",
    "Technology",
  ];

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Tags title={category} isSelected={category === selectedCategory} />
      );
    });
  };
  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col h4">About</div>
      </div>
      <div className="row pt-2 ">
        <div className="col">
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
          quam semper libero, sit amet adipiscing sem neque sed ipsum
        </div>
      </div>
      <div className="row pt-4 border-bottom ">
        <div className="col"></div>
      </div>
      <div className="row pt-4 ">
        <div className="col pt-2 h4">Category</div>
      </div>
      <div className="row pt-2 pb-4">
        <div className="col">{renderCategories()}</div>
      </div>
      <div className="row pt-4  border-top">
        <div className="col h4">Popular Stories</div>
      </div>
      <div className="row pt-2">
        <div className="col p-0">{renderstories()}</div>
      </div>
    </div>
  );
};
export default Right;
