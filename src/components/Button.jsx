const Button = ({ label, type }) => {
  return (
    <button type={type} className="btn btn-dark">
      {label}
    </button>
  );
};

export default Button;
