const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="space-y-3 w-10/12 mx-auto">
            <h1 className='text-sm text-center text-orange-400 italic'>--{subHeading}--</h1>
            <hr />
            <h1 className='text-2xl text-center uppercase'>{heading}</h1>
            <hr />
            <br />
        </div>
    );
};

export default SectionTitle;