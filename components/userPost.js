import React from 'react'
import Image from 'next/image'


export default function UserPost(props) {
  return (
    <div className="w-[700px] h-[256px] border-2 border-[#35373B] rounded-lg p-5 bg-[#35373B]" >
        <div className="flex w-full justify-between" >
            <Image src={props.img_src} alt="profile Picture" width={44} height={44} className="h-[44px]" />
            <div className="w-[600px] pl-4">
                <p className="font-medium text-base text-[#C5C7CA]" >{props.name}</p>
                <p className="font-medium text-sm text-[#7F8084]" >{props.time}</p>
            </div>
            <Image src="/images/menu.png" alt="menu" width={17} height={3} className="h-[4px] cursor-pointer"  />
        </div>
        <div className="flex gap-4 w-full mt-5 bg-[#191920] rounded-lg p-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#27292D] text-lg">{props.emoji}</div>
            <div className="text-base text-[#7F8084] w-[551px]" >{props.post_text}</div>
        </div>
        <p className="flex mt-3.5 items-center text-sm text-[#7F8084] gap-[9px] mb-6" >
            <Image src="/images/comment.png" alt="comment icon" width={19} height={16} className="h-[16px]" /> {props.count} comments
        </p>
    </div>
  )
}
