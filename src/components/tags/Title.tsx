import React,{PropsWithChildren,FC} from 'react'



interface Props{
    className?:string;

}

 const Title:FC<PropsWithChildren<Props>> = ({children,className}) => {
  return (
    <h1 className={`md:text-[40px] md:leading-[40px] text-[20px] leading-[20px] ${className}`}>
        {children}
    </h1>
  )
}
export default Title
