import "./search-box.styless.css";

const SearchBox = ({ className, type, placeholder, onChangeHandler }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
export default SearchBox;
