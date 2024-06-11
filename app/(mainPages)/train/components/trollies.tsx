

const TrollyFront =({active,setActive,index}:{active:boolean}) => {
               
      return (
        <svg width="186" height="49" viewBox="0 0 186 49" fill="none" xmlns="http://www.w3.org/2000/svg" cursor={'pointer'}>
        <g id="Group 15">
        <path id="Vector 1" d="M17.4706 15.4917L46.2941 1.96226L184.529 1.37402V47.8446H112.765H1V33.727L17.4706 15.4917Z" fill={active?"#9f6a3d":"#D9D9D9"} stroke="black" onClick={() => {
             setActive(index+1)
        }}/>
             
        
        <g id="Vector 2">
        <path d="M24.5298 16.6685H32.1768V23.7273L21.5886 31.3744H10.4121L24.5298 16.6685Z" fill={active?"#9f6a3d":"#D9D9D9"} className="cursor-pointer"/>
        <path d="M44.5298 14.9038H61.0004V47.845H44.5298V14.9038Z" fill="#D9D9D9"/>
        <path d="M70.4121 16.6685H81.0004V23.7273H70.4121V16.6685Z" fill="#D9D9D9"/>
        <path d="M88.0592 16.6685H99.2356V23.7273H88.0592V16.6685Z" fill="#D9D9D9"/>
        <path d="M105.706 16.6685H116.294V23.7273H105.706V16.6685Z" fill="#D9D9D9"/>
        <path d="M123.353 16.6685H133.942V23.7273H123.353V16.6685Z" fill="#D9D9D9"/>
        <path d="M143.353 14.9038H159.824V47.845H143.353V14.9038Z" fill="#D9D9D9"/>
        <path d="M167.471 16.6685H177.471V23.7273H167.471V16.6685Z" fill="#D9D9D9"/>
        <path d="M24.5298 16.6685H32.1768V23.7273L21.5886 31.3744H10.4121L24.5298 16.6685Z" stroke="black"/>
        <path d="M44.5298 14.9038H61.0004V47.845H44.5298V14.9038Z" stroke="black"/>
        <path d="M70.4121 16.6685H81.0004V23.7273H70.4121V16.6685Z" stroke="black"/>
        <path d="M88.0592 16.6685H99.2356V23.7273H88.0592V16.6685Z" stroke="black"/>
        <path d="M105.706 16.6685H116.294V23.7273H105.706V16.6685Z" stroke="black"/>
        <path d="M123.353 16.6685H133.942V23.7273H123.353V16.6685Z" stroke="black"/>
        <path d="M143.353 14.9038H159.824V47.845H143.353V14.9038Z" stroke="black"/>
        <path d="M167.471 16.6685H177.471V23.7273H167.471V16.6685Z" stroke="black"/>
        </g>
        </g>
        </svg>
      )
}

const trollyMiddle = ({active,setActive,index}:{active:boolean}) => {

    return (
        <svg width="172" height="45" viewBox="0 0 172 45" fill="none" xmlns="http://www.w3.org/2000/svg" cursor={'pointer'}>
        <g id="Vector 4">
        <path d="M1.11816 1.13867H170.53V44.0798H148.765H132.883H39.9417H21.7064H1.11816V1.13867Z" fill={active?"#9f6a3d":"#D9D9D9"} onClick={() => {
             setActive(index+1)
        }}/>
        <path d="M132.883 44.0799V11.7269H148.765V44.0799M132.883 44.0799H148.765M132.883 44.0799H39.9417M148.765 44.0799H170.53V1.13867H1.11816V44.0799H21.7064M21.7064 44.0799V11.7269H39.9417V44.0799M21.7064 44.0799H39.9417M164.059 14.0798H155.236V22.3151H164.059V14.0798ZM126.412 14.0798H115.236V22.3151H126.412V14.0798ZM109.942 14.0798H97.5888V22.3151H109.942V14.0798ZM91.7064 14.0798H79.3535V22.3151H91.7064V14.0798ZM72.2946 14.0798H61.7064V22.3151H72.2946V14.0798ZM54.6476 14.0798H44.6476V22.3151H54.6476V14.0798ZM16.4123 14.0798H6.41228V22.3151H16.4123V14.0798Z" stroke="black"/>
        </g>
        </svg>
    )
}




const trollyLast =  ({active,setActive,index}:{active:boolean}) => {
     return (
        <svg width="188" height="48" viewBox="0 0 188 48" fill="none" xmlns="http://www.w3.org/2000/svg" cursor={'pointer'}>
        <g id="Group 16">
        <path id="Vector 1" d="M170.318 14.7251L141.125 1.36692L1.11765 0.786133V46.6685H73.8024H187V32.7295L170.318 14.7251Z" fill={active?"#9f6a3d":"#D9D9D9"} stroke="black" onClick={() => {
             setActive(index+1)
        }}/>
        <g id="Vector 2">
        <path d="M163.169 15.8869H155.424V22.8564L166.148 30.4066H177.468L163.169 15.8869Z" fill="#D9D9D9"/>
        <path d="M142.913 14.1445H126.231V46.6687H142.913V14.1445Z" fill="#D9D9D9"/>
        <path d="M116.699 15.8869H105.975V22.8564H116.699V15.8869Z" fill="#D9D9D9"/>
        <path d="M98.8252 15.8869H87.5055V22.8564H98.8252V15.8869Z" fill="#D9D9D9"/>
        <path d="M80.9519 15.8869H70.2279V22.8564H80.9519V15.8869Z" fill="#D9D9D9"/>
        <path d="M63.0786 15.8869H52.3546V22.8564H63.0786V15.8869Z" fill="#D9D9D9"/>
        <path d="M42.8222 14.1445H26.1405V46.6687H42.8222V14.1445Z" fill="#D9D9D9"/>
        <path d="M18.3954 15.8869H8.26715V22.8564H18.3954V15.8869Z" fill="#D9D9D9"/>
        <path d="M163.169 15.8869H155.424V22.8564L166.148 30.4066H177.468L163.169 15.8869Z" stroke="black"/>
        <path d="M142.913 14.1445H126.231V46.6687H142.913V14.1445Z" stroke="black"/>
        <path d="M116.699 15.8869H105.975V22.8564H116.699V15.8869Z" stroke="black"/>
        <path d="M98.8252 15.8869H87.5055V22.8564H98.8252V15.8869Z" stroke="black"/>
        <path d="M80.9519 15.8869H70.2279V22.8564H80.9519V15.8869Z" stroke="black"/>
        <path d="M63.0786 15.8869H52.3546V22.8564H63.0786V15.8869Z" stroke="black"/>
        <path d="M42.8222 14.1445H26.1405V46.6687H42.8222V14.1445Z" stroke="black"/>
        <path d="M18.3954 15.8869H8.26715V22.8564H18.3954V15.8869Z" stroke="black"/>
        </g>
        </g>
        </svg>
        
     )
}

export {
     TrollyFront,
     trollyMiddle,
     trollyLast
}

