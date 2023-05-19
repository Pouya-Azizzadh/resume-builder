import React,{PropsWithChildren,FC} from 'react'



interface Props{
    className?:string;

}

const Text:FC<PropsWithChildren<Props>> = ({children,className}) => {
    return (
      <p className={`md:text-[12px] text-[6px] font-bold ${className}`}>
          {children}
      </p>
    )
  }
export default Text