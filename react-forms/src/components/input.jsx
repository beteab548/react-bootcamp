export default function Input({ Lable, error, id, ...props }) {
  console.log(error);
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{Lable}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {error && <p>the input is invalid!</p>}
      </div>
    </div>
  );
}
