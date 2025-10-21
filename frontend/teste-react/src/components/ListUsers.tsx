
export  default function ListUsers(){
    return(
        <div className="min-h-screen  items-center  bg-red-900 text-white text-3xl font-bold">
           
            <div className="flex bg-blue-100">
                <div className=" bg-gray-700 min-h-screen min-w-60 p-2">
                    <div className=" text-white font-thin ">OndiTá?</div>
                    <ul className="mt-4  ">
                        
                        <li className="text-gray-400 font-sans text-lg"><a href="#">Home</a></li>
                        <li className="text-gray-400 font-sans mt-2 text-lg"><a href="#">Guardar</a></li>
                    </ul>
                </div>
                <div className=" w-full min-h-screen  items-start" >
                     <div className="w-full flex bg-gray-700 justify-end items-end p-3">
                        <button className=" text-white font-thin text-lg">Sair</button>
                     </div>
                     
                     <div className="text-gray-500 ml-4">Bem vindo(a) 🔥</div>
                     
                     <div className="w-full h-auto p-4 justify-between flex">

                        <div className=" mt-4 bg-white w-80 h-32 p-2 shadow-xl rounded-md ">
                            <text className="text-gray-500 w-full" >Tetse</text>                            
                        </div>
                        <div className=" mt-4 bg-white w-80 h-32 p-2 shadow-xl rounded-md ml-4">
                            <text className="text-gray-500 w-full" >Tetse</text>                            
                        </div>  
                        <div className=" mt-4 bg-white w-80 h-32 p-2 shadow-xl rounded-md ml-4">
                            <text className="text-gray-500 w-full" >Tetse</text>                            
                        </div>                       
                     </div>
                     <div className="p-4">
                         <table className="table-auto text-lg w-full mt-4">
                            <thead className="bg-gray-700 ">
                                <tr>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Year</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-500">
                                <tr>
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                                </tr>
                                <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                                </tr>
                                <tr>
                                <td>Shining Star</td>
                                <td>Earth, Wind, and Fire</td>
                                <td>1975</td>
                                </tr>
                            </tbody>
                        </table>
                     </div>
                
                </div>
            </div>
        </div>
    )
}