export default function ({children, buttons}) {
    return <>
       <menu>   
        {buttons} 
        {children}
       </menu> 
       CONTENT 
    </>
}