import { useState } from 'react'
import './App.css'
import { DualRangeSlider } from './components/core/slider'

function App() {
   const [length, setLength] = useState(8)
   const [numberAllowed, setNumberAllowed] = useState(false)
   const [charAllowed, setCharAllowed] = useState(false)
   const [password, setPassword] = useState("")
   console.log(length);
   




   return (
      <div className='bg-slate-400 h-screen flex justify-center items-center'>

         <div className='h-[350px] w-[560px] bg-gray-500 rounded-xl flex items-center justify-center flex-col'>
            <h1 className='text-2xl'>Password Generator</h1>
            <div className='flex w-full justify-center items-center flex-row h-20 bg-orange-300 mt-3'>
               <input
                  className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 
                  outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-6 py-4 shadow-md focus:shadow-lg focus:shadow-rose-400 w-3/4 mr-3"
                  disabled
                  autoComplete="off"
                  placeholder="Password"
                  name="text"
                  type="text"
                  value={password}
               />
               <div className="flex items-center justify-center">
                  <div className="relative group">
                     <button
                        className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                     >
                        <span
                           className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        ></span>

                        <span className="relative z-10 block px-4 py-3 rounded-xl bg-gray-950">
                           <div className="relative z-10 flex items-center space-x-2">
                              <span className="transition-all duration-500 group-hover:translate-x-1"
                              >Copy
                              </span>
                              <svg
                                 className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                 data-slot="icon"
                                 aria-hidden="true"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    clipRule="evenodd"
                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                    fillRule="evenodd"
                                 ></path>
                              </svg>
                           </div>
                        </span>
                     </button>
                  </div>
               </div>

            </div>
            <div className='bg-rose-900 w-full h-20 flex justify-center items-center gap-x-3'>
               <h1 className='text-xl'>Length</h1>

               <DualRangeSlider
                  label
                  lableContenPos={'left'}
                  value={[length]}
                  onValueChange={([newlength]) =>
                     newlength != null && setLength(newlength)
                  }
                  min={8}
                  max={20}
                  step={1}
               />
               <label
               className='text-xl'
               htmlFor="number">Numbers
               </label>

               <label
                  className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900"
               >
                  <input
                  onChange={(prev) => setNumberAllowed(!prev)}
                  className="peer sr-only" id="AcceptConditions" type="checkbox" />
                  <span
                     className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                  ></span>
               </label>

               <label
               className='text-xl'
               htmlFor="number">Characters
               </label>

               <label
                  className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900"
               >
                  <input 
                  onChange={(prev) => setCharAllowed(!prev)}
                  className="peer sr-only" id="AcceptConditions" type="checkbox" />
                  <span
                     className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                  ></span>
               </label>



            </div>
         </div>

      </div>
   )
}

export default App
