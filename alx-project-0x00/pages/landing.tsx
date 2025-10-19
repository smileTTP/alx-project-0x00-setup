import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC =  () => {
    return (
    <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <div className="space-x-8">
            <Button title="Small" styles="bg-white text-black text-sm px-3 py-1 rounded-sm" />
            <Button title="Medium" styles="bg-white text-black text-md px-3 py-1 rounded-md" />
            <Button title="Large" styles="bg-white text-black text-lg px-3 py-1 rounded-lg" />
            <Button title="Full" styles="bg-white text-black text-full px-3 py-1 rounded-full" />
        </div>
    </div>
    )
}
export default Landing;