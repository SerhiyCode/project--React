export default function Tabs ({children, buttons, ButtonsContainer }) { 
    // const ButtonsContainer = ButtonsContainer;
    return <>
       <ButtonsContainer >   
        {buttons}          
       </ButtonsContainer>  
       {children}
       CONTENT 
    </>
}