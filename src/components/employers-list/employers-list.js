import EmployersListItem from "../employers-list-item/employers-list-item";



const EmployersList = ({data, onDelete, onToggleProp}) => {

     const elements = data.map(item => {
         const {id, ...itemProps} = item;
         return (
             <EmployersListItem 
             key={id} 
             {...itemProps}
             onDelete={() => onDelete(id)}
             onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
             />
         )
     })

    return (
        <ul className="app-list list-group">
           {/* <EmployersListItem name="John C." salary={800}/>
           <EmployersListItem name="Alex M." salary={3000}/>
           <EmployersListItem name="Carl W." salary={5000}/> */}
           {elements}
        </ul>
    )
}

export default EmployersList;