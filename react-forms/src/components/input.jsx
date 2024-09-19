export default function Input({ Lable, valid, id, ...props }) {
  console.log(valid);
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{Lable}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {valid ? "" : <p>the input is invalid!</p>}
      </div>
    </div>
  );
}
