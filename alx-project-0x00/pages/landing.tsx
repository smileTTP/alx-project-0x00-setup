import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC =  () => {
    return (
    <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Next" styles="bg-white text-black text-sm px-3 py-1 rounded-md" />
    </div>
    )
}
export default Landing;