import {Button} from "@repo/ui/button"
import {Inputelement} from "@repo/ui/inputelement"


export default function signup(){
    return<div className="w-screen h-screen flex justify-center items-center" >
       
            <div className="h-80 w-80 bg-gray-800 rounded-lg  ">
            <div className="text-2xl flex justify-center pb-4 pt-4 shadow-xl text-blue-400  " >signup</div>
        <div >
            <div className=" flex justify-center pt-3 pb-3"><Inputelement variant="primary"className=" bg-gray-800 shadow-xl" placeholder="email" type="text" size="sm" ></Inputelement> </div>
           <div  className="flex justify-center pb-3"><Inputelement variant="primary" className="bg-gray-800 shadow-xl" type="text" placeholder="username"  size="sm"></Inputelement></div>
           <div  className="flex justify-center "><Inputelement className="bg-gray-800 shadow-xl" variant="primary" type="password" placeholder="password"  size="sm"></Inputelement></div>
            <div className="flex justify-center pt-3">
            <Button variant="send" children={"signup"} className="bg-blue-600 text-lg text-black px-6 py-2  border border-gray-600 shadow-2xl" size="sm"></Button>
            </div>
                
        </div>
       
        </div>
        

    </div>
}

