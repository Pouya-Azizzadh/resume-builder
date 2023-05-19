import React,{PropsWithChildren,FC, ChangeEvent} from 'react'



interface Props{
    className?:string;
    onChange?:any;
    name?:string;
    placeholder?:string

}
const Editor :FC<Props> = ({placeholder,className,onChange,name}) => {
    const handleChange=(e:ChangeEvent<HTMLInputElement> | any)=>{
        onChange(e)
    }
    return (
      <textarea rows={9} name={name} className={`w-full border my-4 px-4 py-8 ${className}`} placeholder={placeholder}  onChange={handleChange}>
      </textarea>
    )
  }

export default Editor
