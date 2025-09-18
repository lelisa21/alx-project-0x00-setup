import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small" size="Small" shapes="rounded-sm" />
      <Button title="Medium" size="Medium" shapes="rounded-md" />
      <Button title="Large" size="Large" shapes="rounded-full" />
      <Button title="Large" size="Large" shapes="rounded-lg" />
    </div>
  );
};
export default Landing;
