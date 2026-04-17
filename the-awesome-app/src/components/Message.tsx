type MessageProps = {
  text: string;
  color: string;
};

//function Message(props: MessageProps){
function Message({ color, text }: MessageProps) {
  //console.log("Message", );
  return (
    <>
      <div>
        <h4 style={{ color: color }}>Message: {text}</h4>
        <p>Generated at: {new Date().toLocaleString()}</p>
      </div>
      <div></div>
    </>
  );
}

export default Message;
