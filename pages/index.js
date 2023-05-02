import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signup from '@/components/signup'
import UserPost from '@/components/userPost'
import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import Login from '@/components/login';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  return (
    <main
      className={`flex w-[700px] flex-col justify-between mt-16 mx-auto ${inter.className} ${isModalOpen ? 'blur-[2px]': 'blur-none'}`}
    >
      <div className="w-[480px] mb-10" >
        <p className="font-medium text-2xl text-[#C5C7CA] mb-3 " >Hello Jane</p>
        <p className='text-base text-[#7F8084]'>How are you doing today? Would you like to share something with the community 🤗</p>
      </div>

      <div className="w-[700px] h-[235px] border-2 border-[#35373B] rounded-lg p-5 bg-[#35373B] " >
        <div className="w-full " >Create post</div>
        <div className="flex gap-4 w-full items-center my-4 bg-[#191920] rounded-lg p-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#27292D] text-lg">
              <Image src="/images/text.png" alt="speech bubble" height={18} width={18} />
            </div>
            <div className="text-base text-[#7F8084] w-[551px]" >How are you feeling today?</div>
        </div>
        <div className="flex flex-row-reverse " >
          <button type="submit" className="h-11 w-28 rounded-md bg-[#4A96FF] " onClick={handleClick} >Post</button>
        </div>
    </div>

      <div className="flex flex-col gap-4 my-4">
        <UserPost img_src="/images/user1.png" name="Theresa Webb" time="5 mins ago" emoji="👋" 
        post_text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." count='24'  />

        <UserPost img_src="/images/user2.png" name="Marvin McKinney" time="8mins ago • Edited" emoji="🙁" 
        post_text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." count='24'  />
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 h-auto w-auto overflow-y-auto lg:max-h-[50v] lg:max-w-[60vw]"
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <div className="fixed inset-x-0 top-1 h-full max-h-full w-auto max-w-full lg:overflow-y-auto ">
            <div className="flex h-auto max-h-full min-h-full w-auto max-w-full items-center justify-center text-center  ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="shadow-xl h-full w-full max-w-[85%] transform overflow-y-auto rounded-2xl bg-transparent text-left align-middle transition-all lg:max-h-full lg:overflow-hidden ">
                  {showLogin ? <Login isModalOpen={true} setIsModalOpen={setIsModalOpen} /> : <Signup isModalOpen={true} setIsModalOpen={setIsModalOpen} setShowLogin={setShowLogin} />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  )
}
