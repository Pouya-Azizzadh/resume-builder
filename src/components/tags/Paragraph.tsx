import React,{PropsWithChildren,FC, ReactNode} from 'react'



interface Props{
    className?:string;
}
const Paragraph :FC<PropsWithChildren<Props>> = ({children,className}) => {
    return (
      <p className={`md:text-[10px] text-[8px] ${className}`}>
          {children}
      </p>
    )
  }

export default Paragraph