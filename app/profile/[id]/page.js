import Mybtn from "@/components/Mybtn";

const page = ({params}) => {
    return (
        <div
            className='flex flex-col bg-slate-500'
        >
            profile page id {params.id}

            <Mybtn/>
        </div>
    );
}

export default page;