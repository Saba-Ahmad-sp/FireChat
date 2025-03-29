
const Input = () => {
  return (
    <div className="bg-[#FBF8EF] w-full h-8  flex justify-between items-center rounded-br-2xl shadow-xl">
       <input type="text" className="h-10 p-2 text-xs focus:outline-none tracking-wide w-2/3 flex-wrap" placeholder="Type Something..."/>
       <div className="flex gap-2">
        <img src="https://www.svgrepo.com/show/509187/paper-clip.svg" alt="clip-logo" className="w-4.5" />
        <img src="https://www.svgrepo.com/show/528989/gallery-send.svg" alt="gallery-logo" className="w-4.5"/>
       <button className="bg-blue-500  py-1.5 px-2.5 rounded-tl-2xl rounded-br-2xl rounded text-xs mr-0.5 ">Send</button>
       </div>
    </div>
  ) 
}

export default Input;