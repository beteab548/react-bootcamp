export default function Notification({ status }) {
  return (
    <div className="notification">
      {status.error !== null && <p>{status.error}</p>}
      {status.isSending && <p>cart is being sent...</p>}
      {status.dataSent && <p>cart sent succcessfully!</p>}
    </div>
  );
}
