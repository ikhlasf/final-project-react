const LayTable = (props) => {
    const { children, title } = props;
    return (
        
            <div  className='flex justify-center bg-slate-300 min-h-screen  items-center'>
                <div className='w-full max-w-xs'>
                    <h1 className='text-3xl font-bold mb-2 text-blue-900'>
                        {title}
                    </h1>
                    <p className='font-medium text-slate-500 py-2'></p>
                        {children}
                </div>

            </div>
    )
}

export default LayTable;