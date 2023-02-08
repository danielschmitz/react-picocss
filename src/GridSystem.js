import React from "react"



export default function GridSystem({items}){

    //const [columns, setColunms] = React.useState(items);

    return (<div class="grid">
        {items.map((item, index) => {
            return (
                <a role="button" key={index}>
                    {item}
                </a>
            )
        })}        
    </div>)


}