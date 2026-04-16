import Counter from "@/components/Counter";
import Message from "@/components/Message";


export default function Home() {
  return (
    <div>
      <h3>React Next.js Application</h3>
      <Message text="Hello Next.js" color="red"/>
      <Counter initCount={10}/> 
    </div>
  );
}
