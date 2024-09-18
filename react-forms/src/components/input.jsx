export default function Input({Lable,id,...props}) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{Lable}</label>
      <input
      id={id}
       {...props}
      />
    </div>
  );
}
